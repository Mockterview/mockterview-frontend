import * as S from '../LoginEmailFindOrganism/LoginEmailFindOrganism.style';
import { useCallback, useEffect, useState } from 'react';
import instance from '../../../../../http/axios';
import { useRouter } from 'next/router';
import { baseURL } from '../../../../../http/url';
import { deleteCookie } from 'cookies-next';
import LoginHeader from '../../Header/LoginHeader'

const LoginPasswordResetOrganism =(props:any)=> {
  const router = useRouter();
  const { key } = router.query;
  
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [isPassword, setIsPassword] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  useEffect(() => {
    if (!key) {
      return;
    }
    const verifyToken = async () => {
      const response = await instance
        .get(`${baseURL}/users/verify/${key}`)
        .then(response => {
          setEmail(response.data);
          //email 받아서 set 하고 password 받아서 셋 해서 보내준다.
          if (Number(response.status) == 401) {
            window.location.href = `/signup`;
            return
          } if(Number(response.status == 400)){
            alert('유효하지 않은 접근입니다.')
            window.location.href = `/`;
            return
          }
        });
    };
    verifyToken();
  }, [key]);

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
        return
      } 
      if (passwordConfirm.length>0){
        if(passwordInput!=passwordConfirm){
          setPasswordMessage('비밀번호가 일치하지 않습니다.');
          setIsPassword(false); return
        } 
        setIsPassword(true);
        setPasswordMessage('');
      }
      else {
        setIsPassword(true);
        setPasswordMessage('');
      }
    },
    [password,passwordConfirm],
  );

  const onChangeConfirmPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordConfirm(e.target.value);
      if (password !== e.target.value) {
        setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
        setIsPasswordConfirm(false);
      } else {
        setPasswordConfirmMessage('');
        setIsPasswordConfirm(true);
      }
    },
    [passwordConfirm, password],
  );

  
    async function handleSubmit(){
         const result = await instance.patch(
          `${baseURL}/users/change/password`,
          {email: email, password: password},
        ).then(response=> {
          if(Number(response.status)==200||Number(response.status)==201){
            deleteCookie("accessToken");
            deleteCookie("refreshToken");
            deleteCookie("userInfo");      
            router.push({ pathname: '/login', query: { email: email } });
            return}
          if(Number(response.status)==404){
            //예외처리
        } 
        
        })
    }      

    const onCheckEnter = async (e:any) => {
      if(e.key === 'Enter') {
        e.preventDefault()
        if(isPassword && isPasswordConfirm){
          handleSubmit()}
        }
    }
 
    return(
          
<>
<LoginHeader></LoginHeader>
        <S.LoginWrapper>

     <S.LoginTitle>재설정할 비밀번호를 입력해주세요.</S.LoginTitle>
     <S.InputWrapper >
        <S.Label>비밀번호</S.Label>
        <S.Input
        onKeyPress={onCheckEnter}
         isError={passwordMessage}
          type="password"
          placeholder="8-16자 소문자, 숫자, 특수문자"
          onChange={onChangePassword}
        ></S.Input>
        <S.WarningMessage>{passwordMessage}</S.WarningMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>비밀번호 확인</S.Label>
        <S.Input
        onKeyPress={onCheckEnter}
          isError={passwordConfirmMessage}
          type="password"
          placeholder="위와 동일한 비밀번호를 입력해주세요."
          onChange={onChangeConfirmPassword}
        ></S.Input>
        <S.WarningMessage>{passwordConfirmMessage}</S.WarningMessage>
      </S.InputWrapper>

      {isPassword && isPasswordConfirm ? (
        <S.ActiveBtn type="button" onClick={handleSubmit} >
          완료
        </S.ActiveBtn>
      ) : (
        <S.UnactiveBtn> 완료</S.UnactiveBtn>
      )}
    </S.LoginWrapper>
    </>
  );
}

export default LoginPasswordResetOrganism