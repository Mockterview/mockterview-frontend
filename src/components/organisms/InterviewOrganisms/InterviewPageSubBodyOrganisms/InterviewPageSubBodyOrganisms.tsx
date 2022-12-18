import React from 'react';
import * as S from './InterviewPageSubBodyOrganisms.style';
import megaphone from '/public/images/icon/Megaphone.svg'
import Image from 'next/image'
const InterviewPageSubBodyOrganisms = () => {
  return (
    <S.wrap>
      <S.ImageWrap>
    <Image src={megaphone} alt={megaphone}></Image></S.ImageWrap>
      <S.DescriptionWrap>

      <S.title>충분한 시간을 가지고 모의면접을 진행하세요!</S.title>
        <S.SubDescription>
          실제와 유사한 면접 환경을 위해 모의면접을 중단하면 해당 회차는
          무효입니다.
        </S.SubDescription>
      </S.DescriptionWrap>
    </S.wrap>
  );
};

export default InterviewPageSubBodyOrganisms;
