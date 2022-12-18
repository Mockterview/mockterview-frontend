import React from 'react';
import Link from 'next/link';
import * as S from './PracticeWorkBookNavOrganisms.style';
import Image from 'next/image';
import logo_blue from '../../../../../public/images/item/logo_blue.svg';

const PracticeWorkBookNavOragnims = () => {
  return (
    <>
      <S.wrap>
        <S.workBook>
          <Link href="/practice">문제집으로 돌아가기</Link>
        </S.workBook>
      </S.wrap>
    </>
  );
};

export default PracticeWorkBookNavOragnims;
