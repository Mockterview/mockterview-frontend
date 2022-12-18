import { useState, useEffect, useCallback } from 'react';
// import { setToken } from "../TokenManager";
import Link from 'next/link';
import instance from '../../../../http/axios';
import * as S from './LoginPageOrganism.style';
import { baseURL } from '../../../../http/url';
import { useRouter } from 'next/router';
import { isLogin } from '../../../../http/userInfo';
import LoginHeader from '../Header/LoginHeader';
import axios from 'axios';

export default function LoginPageOrganism() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  const [isEmail, setIsEmail] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [isPassword, setIsPassword] = useState(false);

  const [showPasswordInput, setPasswordInput] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const { query, isReady } = useRouter();
  const router = useRouter();

  const onChangeEmail = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (showPasswordInput) {
        setPasswordInput(false);
      }

      const regex =
        /([\w-]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const inputValue = e.target.value;
      setEmail(inputValue);
      if (!regex.test(inputValue)) {
        setEmailMessage('이메일 양식을 확인해주세요.');
        setIsEmailValid(false);
        return;
      }
      setIsEmailValid(true);
      setEmailMessage('');
    },
    [email, isEmailValid, showPasswordInput],
  );
  // https://testapi.mockterview.shop
  // .post(`${baseURL}/users/signup/validate/email`, { email: email })


// const emailCheckd = useCallback((e:any)=>{
//   // console.log("fetch")
//   fetch('https://testapi.mockterview.shop/users/signup/validate/email', {
//     method: 'POST', 
//     mode: 'cors',
//     cache: 'no-cache', 
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 
//       "application/x-www-form-urlencoded; charset=UTF-8"
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer',
//     body: JSON.stringify({"email":"mijunglee1215@gmail.com"})
//   }).then(response =>{
// if(response.status ==201){
//   console.log('signup으로 이동')
// }

 
  const emailCheck = useCallback(
    async (e: any) => {
      // console.log('버튼누름')
      // console.log('click')
      e.preventDefault()
      await instance
      .post(`${baseURL}/users/signup/validate/email`, { email: email })
        .then(response => {
          if (response) {
            if (Number(response.status) == 409) {
              setEmailMessage('');
              setIsEmailChecked(true);
              setPasswordInput(true);
              // console.log('show', showPasswordInput);
              // console.log('409');
              // console.log('isEmailChecked', isEmailChecked);
              // console.log('isEmailValid', isEmailValid);
              return;
            } else if (
              Number(response.status) == 200 ||
              Number(response.status) == 201
            ) {
              router.push({ pathname: '/signup', query: { email: email } });
              // window.location.href = '/signup'
              setIsEmailChecked(false);
              setEmailMessage('');
              // console.log('200');
              // console.log('isEmailChecked', isEmailChecked);
              // console.log('isEmailValid', isEmailValid);
              // console.log('showPasswordInput', showPasswordInput);
              return;
            }
          }
        })
        .catch(function (error) {
        if(error.response){
          // console.log(error.response)
          return error.response
        } else if(error.request){
          // console.log(error.request)
          return error.request
        }
        }
        );
    },
    [email],
  );

  useEffect(() => {
    if (isLogin) {
      setIsLoggedIn(isLogin);
      window.location.href = '/';
    }
    if (!isReady) return;

    if (query.email) {
      setEmail(String(query.email));
      setIsEmail(true);
      setIsEmailValid(true);
    }
  }, [isReady]);

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const regex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
      const passwordInput = e.target.value;
      setPassword(passwordInput);
      if (!regex.test(passwordInput)) {
        setPasswordMessage('8~16자 소문자, 숫자, 특수문자를 사용하세요.');
        setIsPassword(false);
      } else {
        setIsPassword(true);
        setPasswordMessage('');
      }
    },
    [password],
  );

  type User = {
    email: string;
    password: string;
    name: string;
    phone: string;
  };

  const onCheckEnter = async (e: any) => {

    if (e.key === 'Enter') {
      e.preventDefault();
      if (!isEmailValid) {
        onChangeEmail(e);
        return;
      }
      if (isEmailValid && !isEmailChecked) {
        emailCheck(e);
        return;
      }
      if (isEmailValid && isEmailChecked && isPassword) {
        handleSubmit();
        return;
      }
    }
  };
  // console.log(isEmailChecked, isEmailValid, isPassword)

  async function handleSubmit() {
    let User = { email, password };
    const result = await instance
      .post<User>(`${baseURL}/users/login`, {
        email: email,
        password: password,
      })
      .then(response => {
        if (Number(response.status) == 200 || Number(response.status) == 201) {
          window.location.href = `/`;
        }
        if (Number(response.status) == 400) {
          setPasswordMessage('비밀번호가 올바르지 않습니다.');
        } else if (
          Number(response.status) == 500 ||
          Number(response.status) == 404
        ) {
          setPasswordMessage(
            '회원정보가 조회되지 않습니다. 회원가입을 진행해주시기 바랍니다.',
          );
        }
      })
      .catch(function (error) {
        if (error.response) {
        // console.log(error.response.data);
          return error.response;
        }
      });
  }

  return (
    <div>
      <LoginHeader></LoginHeader>

      {!isLoggedIn && (
          <S.LoginWrapper>
          <S.LoginForm onKeyPress={onCheckEnter}>
            <S.LoginDesc>
              엄선된 문제와 모의면접으로<br></br> 함께 달려볼까요?
            </S.LoginDesc>
            <S.InputWrapper>
              <S.Label>이메일 </S.Label>
              <S.Input
                required
                autoFocus
                isError={emailMessage}
                type="email"
                name="email"
                value={email}
                placeholder="mockinterview@gmail.com"
                onChange={e => {
                  setEmail(e.target.value);
                  onChangeEmail(e);
                }}
              ></S.Input>
              {email?.length > 0 && (
                <S.WarningMessage>{emailMessage}</S.WarningMessage>
              )}
            </S.InputWrapper>
            {isEmailValid ? (
              showPasswordInput ? (
                <>
                  <S.InputWrapper>
                    <S.Label>비밀번호 </S.Label>
                    <S.Input
                      isError={passwordMessage}
                      name="password"
                      type="password"
                      placeholder="비밀번호"
                      onChange={onChangePassword}
                    ></S.Input>
                    <S.WarningMessage>{passwordMessage}</S.WarningMessage>
                  </S.InputWrapper>
                  <S.ActiveBtn type="button" onClick={handleSubmit}>
                    로그인
                  </S.ActiveBtn>
                </>
              ) : (
                <S.ActiveBtn
                  onClick={e => {
                    emailCheck(e);
                  }}
                  type="button"
                >
                  다음
                </S.ActiveBtn>
              )
            ) : (
              <S.ActiveBtn>다음</S.ActiveBtn>
            )}

            {showPasswordInput ? (
              <Link href="/login/find/password">
                <S.LoginForgot>비밀번호가 기억 안 나시나요?</S.LoginForgot>
              </Link>
            ) : (
              <Link href="/login/find/email">
                <S.LoginForgot>이메일이 기억 안 나시나요?</S.LoginForgot>
              </Link>
            )}
          </S.LoginForm>
        </S.LoginWrapper>
      )}
      
    </div>
  );
}
