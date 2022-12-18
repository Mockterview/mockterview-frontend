import React from 'react';
import * as S from './MyPageSideMenuOrganism.style';

const MyPageSideMenuOrganism = () => {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      alert('Mockterview URL이 클립보드에 복사되었습니다!');
    } catch (error) {
      alert('복사 실패!');
    }
  };

  return (
    <>
      <S.Wrap>
        <S.MidWrap>
          <S.Share
            onClick={() => handleCopyClipBoard('https://www.mockterview.xyz/')}
          >
            Mockterview 공유하기
          </S.Share>
          <S.Menus>
            <S.Line></S.Line>
            <S.Menu>회원정보 수정</S.Menu>
            <S.InsideLine />
            <S.Menu>추천해요 리스트</S.Menu>
            <S.InsideLine />
            <S.Logout>로그아웃</S.Logout>
          </S.Menus>
          <S.Line></S.Line>
        </S.MidWrap>
      </S.Wrap>
    </>
  );
};

export default MyPageSideMenuOrganism;
