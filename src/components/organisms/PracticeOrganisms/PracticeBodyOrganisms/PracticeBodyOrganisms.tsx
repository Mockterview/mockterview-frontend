import React from 'react';
import * as S from './PracticeBodyOrganisms.style';
import Image from 'next/image';

import book from '../../../../../public/images/item/book.png';
import memo from '../../../../../public/images/item/memo.png';
import glass from '../../../../../public/images/item/glass.png';

const PracticePageBodyOrganisms = () => {
  return (
    <>
      <S.body>
        <S.cardList>
          <S.card1>
            <S.cardTitle>01</S.cardTitle>
            <S.cardDescription>
              내게 필요한 문제집을 <br />
              선택하세요.
            </S.cardDescription>
            <S.ImgWrap>
              <Image src={book} alt="book" />
            </S.ImgWrap>
            <S.tagsWrap>
              <S.tag>Frontend</S.tag>
              <S.tag>Backend</S.tag>
            </S.tagsWrap>
          </S.card1>

          <S.card2>
            <S.cardTitle>02</S.cardTitle>
            <S.cardDescription>
              난이도별로 구성된 50문제를
              <br /> 차례로 풀어나가세요.
            </S.cardDescription>
            <S.ImgWrap>
              <Image src={memo} alt="memo" />
            </S.ImgWrap>
            <S.tagsWrap>
              <S.tag>초급</S.tag>
              <S.tag>중급</S.tag>
              <S.tag>고급</S.tag>
            </S.tagsWrap>
          </S.card2>

          <S.card3>
            <S.cardTitle>03</S.cardTitle>
            <S.cardDescription>
              다른 사람의 답안과 비교해보며 <br />
              나만의 면접 답안을 만들어가세요.
            </S.cardDescription>
            <S.ImgWrap>
              <Image src={glass} alt="glass" />
            </S.ImgWrap>
            <S.tagsWrap>
              <S.tagthumb>👍 추천해요</S.tagthumb>
            </S.tagsWrap>
          </S.card3>
        </S.cardList>
      </S.body>
    </>
  );
};
export default PracticePageBodyOrganisms;
