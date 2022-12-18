import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { isLogin } from '../../../../http/userInfo';

import * as S from './LandingPageHeaderOrganism.style';
import landing_logo from '/public/images/Landing/header/landing_logo.svg';

const LandingPageHeaderOrganism = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // responsive burgerMenu
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isLogin);
  }, [isLoggedIn]);

  function handleClick() {
    alert('로그인을 해주시기 바랍니다.');
  }

  function detectMobileDevice() {
    const minWidth = 400;
    return window.innerWidth < minWidth;
  }

  function checkMobile() {
    alert(`모바일은 준비중입니다. PC에서 접속해주세요!`);
    router.replace('/');
  }

  return (
    <S.Background>
      <S.Wrapper>
        <S.Logo onClick={() => router.replace('/')}>
          <Image
            src={landing_logo}
            alt="landing_logo"
            loading="lazy"
            unoptimized
            width={111}
            height={15}
          />
        </S.Logo>
        <S.LinkWrapper>
          {!isLoggedIn && <S.Link href="/login">로그인</S.Link>}
          {!isLoggedIn ? (
            <S.Link onClick={handleClick} href="/login">
              문제집
            </S.Link>
          ) : (
            <Link href="/practice">
              <S.Link>문제집</S.Link>
            </Link>
          )}
          {!isLoggedIn ? (
            <S.Link onClick={handleClick} href="/login">
              모의면접
            </S.Link>
          ) : (
            <Link href="/interview">
              <S.Link>모의면접</S.Link>
            </Link>
          )}

          <S.BurgerBtn open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </S.BurgerBtn>
          <S.BurgerMenu open={open}>
            {!isLoggedIn && (
              <Link href="/login">
                <li>로그인</li>
              </Link>
            )}

            {detectMobileDevice ? <li onClick={checkMobile}>문제집</li> : null}

            {detectMobileDevice ? (
              <li onClick={checkMobile}>모의면접</li>
            ) : null}

            {/* {!isLoggedIn ? (
              <li onClick={handleClick}>문제집</li>
            ) : (
              <Link href="/practice">
                <li>문제집</li>
              </Link>
            )}

            {!isLoggedIn ? (
              <li onClick={handleClick}>모의면접</li>
            ) : (
              <Link href="/interview">
                <li>모의면접</li>
              </Link>
            )} */}
          </S.BurgerMenu>
        </S.LinkWrapper>
      </S.Wrapper>
    </S.Background>
  );
};

export default LandingPageHeaderOrganism;
