import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as S from './PracticeOtherAnswersNavOrganisms.style';

import logo_blue from '../../../../../public/images/item/logo_blue.svg';

const PracticeOtherAnswersNavOrganisms = () => {
  return (
    <>
      <S.Container>
        <S.Wrap>
          <S.Button1>
            <Link href="/workbook/react">문제로 돌아가기</Link>
          </S.Button1>
          <S.Button>
            <Link href="/workbook/react">나의 답안</Link>
          </S.Button>
        </S.Wrap>
      </S.Container>
    </>
  );
};

export default PracticeOtherAnswersNavOrganisms;
