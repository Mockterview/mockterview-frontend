/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import React from 'react';
import * as S from './InterviewHeaderOrganisms.style';
import down from '/public/images/item/down.svg';
import up from '/public/images/item/up.svg';
import Image from 'next/image';
import InterviewBodyOrganisms from '../InterviewBodyOrganisms';

const InterviewPageHeaderOrganisms = () => {
  const [modal, setModal] = useState(false);
  const [defaultmodal, setDefaultModal] = useState(false);
  return (
    <>
      <S.Wrap>
        <S.Header>
          <S.Title>반복해서 연습하면 정복할 수 있습니다.</S.Title>
          <S.Description>
            내뱉어야 익숙해집니다. 답안 작성으로 만족하지 마세요.
            <br />
            누가 보는 것도 아닌데 어떤가요. 반복해서 연습하면 정복할 수
            있습니다.
          </S.Description>
          <S.ButtonWrap>
            {modal === false ? (
              <S.Button
                onClick={() => {
                  setModal(true);
                  setDefaultModal(true);
                }}
              >
                모의면접 가이드
                <S.ImageWrap>
                  <Image src={down} alt="down" />
                </S.ImageWrap>
              </S.Button>
            ) : (
              <S.Button
                onClick={() => {
                  setModal(false);
                }}
              >
                모의면접 가이드
                <S.ImageWrap>
                  <Image src={up} alt="up" />
                </S.ImageWrap>
              </S.Button>
            )}
          </S.ButtonWrap>
        </S.Header>
      </S.Wrap>
      {defaultmodal ? (
        defaultmodal === true && modal === true ? (
          <S.Load>
            <InterviewBodyOrganisms></InterviewBodyOrganisms>
          </S.Load>
        ) : (
          <S.UnLoad>
            <InterviewBodyOrganisms></InterviewBodyOrganisms>
          </S.UnLoad>
        )
      ) : (""
      )}
    </>
  );
};

export default InterviewPageHeaderOrganisms;
