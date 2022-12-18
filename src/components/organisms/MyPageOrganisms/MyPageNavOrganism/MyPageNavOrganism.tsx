import React from 'react';
import Link from 'next/link';
import * as S from './MyPageNavOrganism.style';
import Image from 'next/image';

import logo_blue from '../../../../../public/images/item/logo_blue.svg';

const InterviewOrganism = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.Logo>
          <Link href="/">
            <Image
              src={logo_blue}
              alt="logo"
              width={111}
              height={15}
              loading="lazy"
              unoptimized
            />
          </Link>
        </S.Logo>
        <S.Buttons>
          <Link href="/practice">
            <S.WorkBook>문제집</S.WorkBook>
          </Link>
          <Link href="/interview">
            <S.Interview>모의면접</S.Interview>
          </Link>
          <Link href="/mypage">
            <S.MY>MY</S.MY>
          </Link>
        </S.Buttons>
      </S.Wrap>
    </S.Container>
  );
};

export default InterviewOrganism;
