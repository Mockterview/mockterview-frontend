import * as S from './SignupCompleteOrganism.style'
import { useEffect, useState } from "react"
import Image from 'next/image'
import hand from '/public/images/icon/hand.png'
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import Router, { useRouter } from 'next/router'
import LoginHeader from '../../../organisms/LoginPageOrganisms/Header/LoginHeader'


export default function SignupCompleteOrganism(){
  
    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const {isReady, query} = useRouter()



    useEffect(()=> {
      if(!isReady) return
      if(query.name){
      setName(String(query.name))
      setEmail(String(query.email))
    }

},[isReady])

    function handleClick() {
      router.push({pathname: '/login',query:{email: email}})
        // window.location.replace(`/login`)
    }


  
    return(
      <div>
      <LoginHeader></LoginHeader>
        <S.LoginWrapper>

        <Image src={hand} alt="이미지" width={48} height={48} />
        <S.LoginTitle>{name}님 반가워요!</S.LoginTitle>
        <S.LoginText>회원가입이 완료되었습니다.<br></br>로그인을 하고 바로 시작해보세요.</S.LoginText>
        <S.LoginButton onClick={e=> {handleClick()}} type="submit">로그인 하기</S.LoginButton>
        </S.LoginWrapper>
        </div>
    )

}