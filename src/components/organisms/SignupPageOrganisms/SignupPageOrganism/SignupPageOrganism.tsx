import styled from '@emotion/styled';
import { atom, useAtom } from 'jotai';
import { useState, useEffect, useCallback } from 'react';
import instance from '../../../../http/axios';
import * as S from './SignupPageOrganism.style';
import { baseURL } from '../../../../http/url';
import { isLogin } from '../../../../http/userInfo';
import { useRouter } from 'next/router';
// import { userInfo } from '../../../../store/user'
import LoginHeader from '../../../organisms/LoginPageOrganisms/Header/LoginHeader'

export default function SignupPageOrganism() {
  const { isReady, query } = useRouter();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isEmail, setIsEmail] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [isPassword, setIsPassword] = useState(false);

  const [phone, setPhone] = useState('');
  const [phoneMessage, setPhoneMessage] = useState('');
  const [isPhone, setIsPhone] = useState(false);

  const [name, setName] = useState('');
  const [nameMessage, setNameMessage] = useState('');
  const [isName, setIsName] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [test, setTest] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //이메일
  type email = string;

  useEffect(() => {
    if (!isReady) return;
    if (query.email) {
      setEmail(String(query.email));
      setIsEmail(true);
    }
    if (isLogin) {
      setIsLoggedIn(isLogin);
      window.location.href = '/';
    }
  }, []);

  const onChangeEmail = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const regex =
        /([\w-]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const emailInput = e.target.value;
      setEmail(emailInput);
      if (!regex.test(emailInput)) {
        setEmailMessage('이메일 양식을 확인해주세요.');
        setIsEmail(false);
      } else if (regex.test(emailInput)) {
        setEmailMessage('');
        const emailValidate = await instance
          .post(`${baseURL}/users/signup/validate/email`, { email: emailInput })
          .then(response => {
            if(response){
            if (Number(response.status) == 409) {
              setEmailMessage('이미 등록된 이메일입니다.');
              return;
            } else if (
              Number(response.status) == 200 ||
              Number(response.status) == 201
            ) {
              setIsEmail(true);
              setEmailMessage('');
              return;
            } else if (Number(response.status) == 500) {
              return;
            }
          }});
      }
    },
    [email],
  );
  //비밀번호
  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const regex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
      const passwordInput = e.target.value;
      setPassword(passwordInput);
      if (!regex.test(passwordInput)) {
        setPasswordMessage('8~16자 소문자, 숫자, 특수문자를 사용하세요.');
        setIsPassword(false);
        return;
      }
      if (passwordConfirm.length > 0) {
        if (passwordInput != passwordConfirm) {
          setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
          setIsPasswordConfirm(false);
        } else if(passwordInput == passwordConfirm){
          setPasswordConfirmMessage('');
          setIsPassword(true);
          setIsPasswordConfirm(true);
        }
      } 
        setIsPassword(true);
        setPasswordMessage('');
      
    },
    [password, passwordConfirm],
  );

  const onChangeConfirmPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordConfirm(e.target.value);
      if (password !== e.target.value) {
        setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
        setIsPasswordConfirm(false);
      } else {
        if(passwordMessage == ""){
          setPasswordConfirmMessage('');
          setIsPasswordConfirm(true);
          setIsPassword(true);
        }
        setPasswordConfirmMessage('');
        setIsPasswordConfirm(true);
      }
    },
    [passwordConfirm, password],
  );

  const onChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const regex = /[~!@#$%^&*()_+|<>?:{}\[\]]/;
      // const regex = /[`~!@#$%^&*-_+=|\(\\[\]\{\}\\\'\";:\/?]/;
      const inputValue = e.target.value;
      if (regex.test(inputValue)) {
        setNameMessage('특수문자는 사용할 수 없습니다.');
        setIsName(false);
        return;
      }
      setIsName(true);
      setName(e.target.value);
      setNameMessage('');
      return;
    },
    [name],
  );

  //연락처
  const onChangePhone = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const phoneInput = e.target.value;
      setPhone(phoneInput);
      if (isNaN(Number(phone)) || phoneInput.length != 11 || phoneInput.length >11) {
        setPhoneMessage('전화번호 양식을 확인해주세요.');
        setIsPhone(false);
        return;
      } else {
        const phoneValidate = await instance
          .post(`${baseURL}/users/signup/validate/phone`, { phone: phoneInput })
          .then(response => {
            if(response){
            if (Number(response.status) == 409) {
              setPhoneMessage('이미 등록된 번호입니다.');
              setIsPhone(false);
              return;
            } else if (
              Number(response.status) == 200 ||
              Number(response.status) == 201
            ) {
              setPhoneMessage('');
              setIsPhone(true);
              return;
            } else if (
              Number(response.status) == 500 ||
              Number(response.status) == 404
            ) {
              setPhoneMessage('');
              setIsPhone(true);
              return;
            }
          }});
      }
    },
    [phone],
  );
  type User = {
    email: string;
    password: string;
    name: string;
    phone: string;
  };

  async function handleSubmit() {
    let userInfo = {
      email: email,
      password: password,
      name: name,
      phone: phone,
    };
    const emailValidate = await instance
      .post<User>(`${baseURL}/users/signup`, userInfo)
      .then(response => {
        if (Number(response.status) == 201) {
          router.push({
            pathname: '/signup/complete',
            query: { email: email, name: name },
          });
        }
      });
  }

  const onCheckEnter = async (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (isEmail && isPassword && isPasswordConfirm && isPhone && name)
        handleSubmit();
    }
  };
  return (
    <div>
    <LoginHeader></LoginHeader>

    <div>
      {!isLoggedIn && (
        <S.SignupWrapper>
          <S.SignupForm onKeyPress={onCheckEnter}>
            <S.SignupDesc>
              엄선된 문제와 모의면접으로<br></br> 함께 달려볼까요?
            </S.SignupDesc>
            <S.InputWrapper>
              <S.Label>이메일 </S.Label>
              <S.Input
                isError={emailMessage}
                required
                name="email"
                placeholder="mockinterview@gmail.com"
                value={email}
                type="email"
                onChange={e => {
                  setEmail(e.target.value);
                  onChangeEmail(e);
                }}
              ></S.Input>
              {email?.length > 0 && (
                <S.WarningMessage>{emailMessage}</S.WarningMessage>
              )}
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>비밀번호 </S.Label>
              <S.Input
                isError={passwordMessage}
                required
                name="password"
                type="password"
                placeholder="8~16자 소문자, 숫자, 특수 문자"
                // value={password}
                onChange={onChangePassword}
              ></S.Input>
              {password?.length > 0 && (
                <S.WarningMessage>{passwordMessage}</S.WarningMessage>
              )}
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>비밀번호 확인</S.Label>
              <S.Input
                isError={passwordConfirmMessage}
                required
                name="passwordConfirm"
                type="password"
                placeholder="위와 동일한 비밀번호를 입력해주세요"
                // value={password}
                onChange={onChangeConfirmPassword}
              ></S.Input>
              {password.length > 0 && (
                <S.WarningMessage>{passwordConfirmMessage}</S.WarningMessage>
              )}
            </S.InputWrapper>

            <S.InputWrapper>
              <S.Label>이름</S.Label>
              <S.Input
                isError={nameMessage}
                required
                name="userName"
                placeholder="김터뷰"
                onChange={onChangeName}
                // value={userName}
              ></S.Input>
              <S.WarningMessage>{nameMessage}</S.WarningMessage>
            </S.InputWrapper>

            <S.InputWrapper>
              <S.Label>연락처</S.Label>
              <S.Input
              maxLength = {11}
                required
                isError={phoneMessage}
                name="전화번호"
                placeholder="01012345678"
                // value={phone}
                onChange={onChangePhone}
              ></S.Input>
              <S.WarningMessage>{phoneMessage}</S.WarningMessage>
            </S.InputWrapper>

            {isEmail && isPassword && isPasswordConfirm && isName && isPhone ? (
              <S.ActiveBtn  onClick={handleSubmit}>
                가입하기
              </S.ActiveBtn>
            ) : (
              <S.UnactiveBtn >가입하기</S.UnactiveBtn>
            )}
          </S.SignupForm>
        </S.SignupWrapper>
      )}
    </div>
    </div>
  );
}
