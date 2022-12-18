import { useEffect, useState, useCallback } from 'react';
// import * as S from './LoginEmailFindOrganism.style'
import * as S from './LoginEmailFindOrganism.style';
import Link from 'next/link';
import instance from '../../../../../http/axios';
import { baseURL } from '../../../../../http/url';
import LoginHeader from '../../Header/LoginHeader'
import CompoundedSpace from 'antd/es/space';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import axios from 'axios'

export default function FindEmailOrganism() {
  // type phone= string;
  // console.log('함수 동작')
  const [phone, setPhone] = useState('');
  const [phoneMessage, setPhoneMessage] = useState('');
  const [phoneValid, setPhoneValid] = useState(false);
  const [email, setEmail] = useState('');
  // const [email, showEmail] = useState(false);
  const onChangePhone = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const phoneInput = e.target.value;
      setPhone(phoneInput);
      if (isNaN(Number(phone)) || phone.length < 2) {
        setPhoneMessage('연락처 양식을 확인해주세요.');
        setPhoneValid(false);
        return
      } else {
        setPhoneMessage('');
        setPhoneValid(true);

        return

      }
    },
    [phone],
  );

  async function handleSubmit() {
    const result = await instance
      .post(`${baseURL}/users/find/email`, { phone: phone })
      .then(response => {
        if (Number(response.status) == 200 || Number(response.status) == 201) {
          // var id = response.data.split('@')[0].replace(/(?<=.{2})./gi, '*');
          var id = response.data.split('@')[0].slice(0,3)
          let idLength = response.data.split('@')[0].length-3
          let star = "*".repeat(idLength)
          var mail = response.data.split('@')[1];
          let userEmail = id + star + '@' + mail;
          setEmail(userEmail);
          // console.log("rd",response.data)
          // console.log("userEmail", userEmail)
          // console.log("email",email)
          // console.log(response.status)
          return;
        }
        if (Number(response.status) == 404 || Number(response.status) == 400) {
          setPhoneMessage('입력하신 연락처를 확인해주세요.');
          return

          // setEmailMessage('등록된 이메일이 없습니다. 회원가입을 진행해주세요.')
        }
      })
      .catch(function(error){
      })
  }

  const onCheckEnter = async (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onChangePhone(e);
      if (phoneValid) {
        handleSubmit();
      }
    }
  };

  return (
    <div>
    <LoginHeader></LoginHeader>
    <S.LoginWrapper>
      {email ? (
        <S.LoginForm>
          <S.LoginTitle>가입하신 이메일입니다. </S.LoginTitle>
          <S.LoginDesc>{email}</S.LoginDesc>
          <Link href="/login">
            <S.LoginButton onClick={handleSubmit}>로그인 하기 </S.LoginButton>
          </Link>
        </S.LoginForm>
      ) : (
        <S.LoginForm>
          <S.LoginTitle>휴대폰 번호를 입력해주세요.</S.LoginTitle>
          <S.InputWrapper>
            <S.Label>연락처</S.Label>
            <S.Input
              onKeyPress={onCheckEnter}
              isError={phoneMessage}
              placeholder="01012345678"
              onChange={onChangePhone}
            ></S.Input>
            <S.WarningMessage>{phoneMessage}</S.WarningMessage>
          </S.InputWrapper>
          <S.LoginButton onClick={handleSubmit}>이메일 찾기 </S.LoginButton>
        </S.LoginForm>
      )}
    </S.LoginWrapper>
    </div>
  );
}