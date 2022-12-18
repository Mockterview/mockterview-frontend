import React from 'react';
import * as S from './InterviewBodyOrganisms.style';
import Image from 'next/image';

import book from '../../../../../public/images/item/book.png';
import memo from '../../../../../public/images/item/memo.png';
import speaker from '../../../../../public/images/item/speaker.png';

const InterviewPageBodyOrganisms = () => {
  return (
    <>
      <S.Wrap>
        <S.Body>
          <S.CardList>
            <S.Card1>
              <S.CardTitle>01</S.CardTitle>
              <S.CardDescription>
                모의면접을 시작할
                <br />
                문제집을 선택하세요.
              </S.CardDescription>
              <S.ImgWrap>
                <Image src={book} alt="book" />
              </S.ImgWrap>
              <S.WrapDescription>
                <S.SubDescription>
                  실전과 유사한 환경을 위해 모의면접을
                  <br /> 시작하면 중단할 수 없습니다.
                </S.SubDescription>
              </S.WrapDescription>
            </S.Card1>

            <S.Card2>
              <S.CardTitle>02</S.CardTitle>
              <S.CardDescription>
                문제마다 주어진 1분동안 녹음이
                <br /> 완료되면 다음문제로 넘어가세요.
              </S.CardDescription>
              <S.ImgWrap>
                <Image src={speaker} alt="speaker" />
              </S.ImgWrap>
              <S.WrapDescription>
                <S.SubDescription>
                  문제집에서 답안을 작성하여 제출한 <br />
                  문제 중 10개가 랜덤으로 출제됩니다.
                </S.SubDescription>
              </S.WrapDescription>
            </S.Card2>

            <S.Card3>
              <S.CardTitle>03</S.CardTitle>
              <S.CardDescription>
                문제집에서 답안을 작성하여 제출한
                <br /> 문제 중 10개가 랜덤으로 출제됩니다.
              </S.CardDescription>
              <S.ImgWrap>
                <Image src={memo} alt="memo" />
              </S.ImgWrap>
              <S.WrapDescription>
                <S.SubDescription>
                  문제집에서 제출했던 답안과 녹음파일을
                  <br />
                  비교하며 잘 답변했는지 확인 가능합니다.
                </S.SubDescription>
              </S.WrapDescription>
            </S.Card3>
          </S.CardList>
        </S.Body>
      </S.Wrap>
    </>
  );
};
export default InterviewPageBodyOrganisms;
