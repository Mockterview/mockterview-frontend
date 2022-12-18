import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import Link from 'next/link';

import * as S from './PracticeOtherAnswersTemplate.style';

import PracticeOtherAnswersNavOrganisms from '../../organisms/PracticeOtherAnswersOrganisms/PracticeOtherAnswersNavOrganisms';
import PracticeOtherAnswersHeaderOrganisms from '../../organisms/PracticeOtherAnswersOrganisms/PracticeOtherAnswersHeaderOrganisms';
import PracticeOtherAnswersBodyOrganisms from '../../organisms/PracticeOtherAnswersOrganisms/PracticeOtherAnswersBodyOrganisms';
import PracticeOtherAnswersMyanswerOrganisms from '../../organisms/PracticeOtherAnswersMyanswerOrganisms';

const PracticeOtherAnswersTemplate = (props: any) => {
  const [showMyAnswer, setShowMyAnswer] = useState(true);

  const router = useRouter();

  // console.log('router:', router);

  return (
    <>
      <S.Wrap>
        {/* <PracticeOtherAnswersNavOrganisms /> */}
        <S.Container>
          <S.BtnWrap>
            <S.Description>
              나의 답안을 다른 답안과 비교해보세요. 수정한 나의 답안은 자동으로
              저장됩니다.
            </S.Description>
            <S.Button1>
              {/* <Link href="/workbook/react">문제로 돌아가기</Link> */}
              <Link href={{pathname:`/workbook/${router.query.category}`, query:{page:router.query.page}}}>
                문제로 돌아가기
              </Link>
              {/* <Link
                href={`/workbook/${router.query.category}/${router.query.page}`}
              >
                문제로 돌아가기
              </Link> */}
            </S.Button1>
            {showMyAnswer ? (
              <S.Button onClick={() => setShowMyAnswer(false)}>
                나의 답안 열기
              </S.Button>
            ) : (
              <S.Button onClick={() => setShowMyAnswer(true)}>
                나의 답안 닫기
              </S.Button>
            )}
          </S.BtnWrap>
        </S.Container>
      </S.Wrap>

      {showMyAnswer ? (
        <>
          <br />
          <br />
          <PracticeOtherAnswersBodyOrganisms />
        </>
      ) : (
        <>
          <S.loadWrap>
            {/* <S.HeaderWrap>
              <PracticeOtherAnswersHeaderOrganisms />
            </S.HeaderWrap> */}
            <S.MyanswerWrap>
              <PracticeOtherAnswersMyanswerOrganisms />
            </S.MyanswerWrap>
          </S.loadWrap>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <S.OtherAnswerWrap>
            <PracticeOtherAnswersBodyOrganisms />
          </S.OtherAnswerWrap>
        </>
      )}
    </>
  );
};

export default PracticeOtherAnswersTemplate;
