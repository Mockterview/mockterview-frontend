import react, { useState } from 'react';
import * as S from './NPSFinishOrganisms.style';
import { userInfo } from '../../../../http/userInfo';

const NPSOrganisms = () => {
  return (
    <>
      <S.Wrap>
        <S.Title>답변이 제출되었습니다!</S.Title>
        <S.SubTitle>
          {userInfo?.name}님의 소중한 의견 감사합니다.
          <br />
          많은 추천 부탁드려요 :D
        </S.SubTitle>
        <S.BtnWrap>
          <S.ShareBtn
            onClick={() => {
              let dummy = document.createElement('input');
              let text =
                `mockterview.xyz/?femail=` + encodeURIComponent(userInfo.email);

              document.body.appendChild(dummy);
              dummy.value = text;
              dummy.select();
              document.execCommand('copy');
              document.body.removeChild(dummy);
            }}
          >
            친구에게 추천하기
          </S.ShareBtn>
          <S.CloseBtn>닫기</S.CloseBtn>
        </S.BtnWrap>
      </S.Wrap>
    </>
  );
};

export default NPSOrganisms;
