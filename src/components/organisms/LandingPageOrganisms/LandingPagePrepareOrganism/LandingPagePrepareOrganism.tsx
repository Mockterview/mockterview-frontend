import { useRouter } from 'next/router';
import { isLogin } from '../../../../http/userInfo';
import { useState, useEffect } from 'react';
import * as S from './LandingPagePrepareOrganism.style';

const LandingPagePrepareOrganism = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [phoneType, setPhoneType] = useState('');

  useEffect(() => {
    setIsLoggedIn(isLogin);
  }, []);

  // function checkMobile() {
  //   //  console.log("mobile 검증")
  //   var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

  //   if (varUA.indexOf('android') > -1) {
  //     //안드로이드
  //     setPhoneType('android');
  //     return 'android';
  //   } else if (varUA.indexOf('iphone') > -1) {
  //     //IOS
  //     setPhoneType('iphone');
  //     // console.log("iphone")
  //     return 'iphone';
  //   } else {
  //     //아이폰, 안드로이드 외
  //     // console.log("other")

  //     setPhoneType('other');
  //     return 'other';
  //   }
  // }

  // function handleClick() {
  //   checkMobile();
  //   if (detectMobileDevice()) {
  //     alert(`모바일은 준비중입니다. PC에서 접속해주세요!`);
  //     // <h1>앗! 아직 모바일에서는 문제를 볼 수가 없어요!</h1>;
  //     // } else if(detectMobileDevice()){
  //     //   alert('아이폰 모바일 버전은 준비중입니다. PC에서 접속해주세요!')
  //     // }
  //   } else if (detectMobileDevice() == false) {
  //     alert('로그인을 해주시기 바랍니다.');
  //     router.replace('/login');
  //   }
  // }

  function handleClick() {
    if (detectMobileDevice()) {
      alert('모바일은 준비중입니다. PC에서 접속해주세요!');
    } else {
      alert('로그인을 해주시기 바랍니다.');
      router.replace('/login');
    }
  }

  function detectMobileDevice() {
    const minWidth = 400;
    return window.innerWidth < minWidth;
  }

  return (
    <>
      <S.Wrapper>
        <S.Contents>
          <S.Title>
            검증된 문제로 시간을 아끼는
            <br /> 기술 인터뷰 준비
          </S.Title>
          <S.Desc>믿을 수 있는 50문제로 밀도 높은 연습을 하세요.</S.Desc>
          {!isLoggedIn ? (
            <S.Link onClick={handleClick}>문제 보러가기</S.Link>
          ) : window.innerWidth < 400 ? (
            <S.Link onClick={handleClick}>문제 보러가기</S.Link>
          ) : (
            <S.Link href={'/practice'}>문제 보러가기</S.Link>
          )}
        </S.Contents>
      </S.Wrapper>
    </>
  );
};

export default LandingPagePrepareOrganism;
