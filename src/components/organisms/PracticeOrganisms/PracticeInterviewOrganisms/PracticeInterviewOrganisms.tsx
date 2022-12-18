import Link from 'next/link';
import React from 'react';
import * as S from './PracticeInterviewOrganisms.style';

import Image from 'next/image';

const PracticeInterviewOrganisms = () => {
  return (
    <>
      <S.wrap>
        <Link href="/interview">
          <S.description>
            <S.detail>
              <S.title>다 풀었다면 모의면접에서 연습해보세요</S.title>
              10문제를 랜덤으로 추출하여 실전 연습을 할 수 있습니다.
            </S.detail>
            <S.button>모의면접 보러가기 ﹥</S.button>
          </S.description>
        </Link>
      </S.wrap>
    </>
  );
};

export default PracticeInterviewOrganisms;
