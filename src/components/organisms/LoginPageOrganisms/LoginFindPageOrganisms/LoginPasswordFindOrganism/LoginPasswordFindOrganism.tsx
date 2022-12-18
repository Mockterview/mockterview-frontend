import { useEffect, useState, useCallback } from "react"
import * as S from '../LoginEmailFindOrganism/LoginEmailFindOrganism.style'
import LoginPasswordFindModal from "./LoginPasswordFindModal";
import instance from '../../../../../http/axios'
import {baseURL} from '../../../../../http/url'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import LoginHeader from '../../Header/LoginHeader'


// const App: React.FC = () => <Spin indicator={antIcon} />;



export default function FindPasswordOrganism() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    const [email, setEmail] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [isEmail, setIsEmail] = useState(false);
    const [clicked, setClicked] = useState(false)

    const [modal, showModal] = useState(false)

const onChangeEmail = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const regex =/([\w-]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const inputValue = e.target.value;
      setEmail(inputValue);
      if (!regex.test(inputValue)) {
        setEmailMessage('이메일 양식을 확인해주세요.');
        setIsEmail(false);
        return;
      }
      const emailValidate = await instance.post(`${baseURL}/users/signup/validate/email`,
      {email: inputValue}
        ).then(response=> { 
          if(Number(response.status)==409){
            setEmailMessage('')
            setIsEmail(true);
            return;
          }else if (Number(response.status) == 200||Number(response.status) == 201) {
            setIsEmail(false);
            setEmailMessage('등록되지 않은 이메일입니다');
            return;
          }
        })
      // setEmailMessage('')
      // setIsEmail(true);
    },[email])
  
  
    async function handleSubmit(){
        const result = await instance.post(
          `${baseURL}/users/find/password`,
          {email: email},
        ).then(response=> {
          if(Number(response.status)==200||Number(response.status)==201){
            showModal(true)
            return}
          if(Number(response.status)==404){
            setEmailMessage('입력하신 이메일을 확인해주세요.')
          } 
        })
    }      
 
    const onCheckEnter = async (e:any) => {

      if(e.key === 'Enter') {
        e.preventDefault()
        if(email){
          handleSubmit()
          setClicked(true)
        }
        }
    }

    return(
        <div>
          <LoginHeader></LoginHeader>
          {modal? <LoginPasswordFindModal showModal={showModal}/> :

        <S.LoginWrapper>
          <S.LoginForm onKeyPress={onCheckEnter}>
     <S.LoginTitle>가입하신 이메일을 입력해주세요.</S.LoginTitle>
     <S.InputWrapper>
        <S.Label>이메일</S.Label>
        <S.Input
        isError={emailMessage}
        placeholder="mockinterview@gmail.com"
        onChange={onChangeEmail}
        ></S.Input>
        <S.WarningMessage>{emailMessage}</S.WarningMessage>
        </S.InputWrapper>
{isEmail? 
clicked?
<S.LoginButtonInactive> <S.SpinWrap><Spin indicator={antIcon} /> </S.SpinWrap></S.LoginButtonInactive> :

        <S.LoginButton
        onClick={()=> {handleSubmit();setClicked(true)}}
        >비밀번호 재설정 요청</S.LoginButton>
        :
        <S.LoginButtonInactive
        >비밀번호 재설정 요청 </S.LoginButtonInactive>
}



        </S.LoginForm>
        </S.LoginWrapper>
        }
        </div>
    )

}

