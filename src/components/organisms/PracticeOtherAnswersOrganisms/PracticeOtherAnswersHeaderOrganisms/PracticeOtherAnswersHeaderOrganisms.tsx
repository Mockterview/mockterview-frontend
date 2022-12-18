import React from 'react';
import Link from 'next/link';
import * as S from './PracticeOtherAnswersHeaderOrganisms.style';

const PracticeOtherAnswersHeaderOrganisms = () => {
  return (
    <>
      <S.wrap>
        <S.text>
          <S.title>나의 답안</S.title>
          <S.Modal>
            <S.description>
              다른 사람의 답안을 보며 바로 수정해보세요. 나의 답안을 계속
              발전시켜 나갈 수 있습니다.
            </S.description>
            {/* <S.ShowBtn>열기</S.ShowBtn> */}
          </S.Modal>
        </S.text>
      </S.wrap>
    </>
  );
};

export default PracticeOtherAnswersHeaderOrganisms;
