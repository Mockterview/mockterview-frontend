import react, { useEffect, useState } from 'react';
import instance from '../../../../http/axios';
import { baseURL } from '../../../../http/url';
import { userInfo } from '../../../../http/userInfo';

import Link from 'next/link';
import Image from 'next/image';
import nerdface from 'public/images/mypage/detailedinfo/nerdface.svg';
import clipboard from 'public/images/mypage/detailedinfo/clipboard.svg';
import partypopper from 'public/images/mypage/detailedinfo/partypopper.svg';
import * as S from './MyPageDetailedInfoOrganism.style';
import MyPagePwdResetOrganism from '../MyPagePwdResetOrganism';

const MyPageDetailedInfoOrganism = () => {
  // if (userInfo)
  return (
    <>
      <S.Wrap>
        <S.EditWrap>
          <S.EditBox>
            <S.EditTitleWrap>
              <S.EditInfo>회원정보 수정</S.EditInfo>
              <S.DeleteInfo>회원탈퇴</S.DeleteInfo>
            </S.EditTitleWrap>
            <S.InfoWrap>
              <S.InfoMidWrap>
                <S.InfoDetails>이름</S.InfoDetails>
                <S.InfoDetails>{}</S.InfoDetails>
              </S.InfoMidWrap>
              <S.InfoMidWrap>
                <S.InfoDetails>이메일</S.InfoDetails>
                <S.InfoDetails>{}</S.InfoDetails>
              </S.InfoMidWrap>
              <S.InfoMidWrap>
                <S.InfoDetails>연락처</S.InfoDetails>
                <S.InfoDetails>{}</S.InfoDetails>
              </S.InfoMidWrap>
              <S.InfoMidWrap>
                <S.InfoDetails>비밀번호</S.InfoDetails>
                <S.InfoDetails>***************</S.InfoDetails>
                <S.EditPwdBox>
                  <Link href="/mypage/edit/password">비밀번호 변경</Link>
                </S.EditPwdBox>
              </S.InfoMidWrap>
            </S.InfoWrap>
          </S.EditBox>
        </S.EditWrap>

        <S.BottomWrap>
          <S.SubInfoBox>
            <S.Title>이번달 공부한 날</S.Title>
            <S.DescWrap>
              <S.Desc>30일</S.Desc>
              <S.Emoji>
                <Image
                  src={nerdface}
                  alt="nerdface"
                  loading="lazy"
                  unoptimized
                />
              </S.Emoji>
            </S.DescWrap>
          </S.SubInfoBox>
          <S.SubInfoBox>
            <S.Title>모의면접 응시</S.Title>
            <S.DescWrap>
              <S.Desc>15번</S.Desc>
              <S.Emoji>
                <Image
                  src={clipboard}
                  alt="clipboard"
                  loading="lazy"
                  unoptimized
                />
              </S.Emoji>
            </S.DescWrap>
          </S.SubInfoBox>
          <S.SubInfoBox>
            <S.Title>모의면접 만접</S.Title>
            <S.DescWrap>
              <S.Desc>10번</S.Desc>
              <S.Emoji>
                <Image
                  src={partypopper}
                  alt="partypopper"
                  loading="lazy"
                  unoptimized
                />
              </S.Emoji>
            </S.DescWrap>
          </S.SubInfoBox>
        </S.BottomWrap>
      </S.Wrap>
    </>
  );
};

export default MyPageDetailedInfoOrganism;
