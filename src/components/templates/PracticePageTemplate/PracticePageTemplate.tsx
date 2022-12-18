import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './PracticePageTemplate.style';
import PracticePageBodyMolecules from '../../organisms/PracticeOrganisms/PracticeBodyOrganisms/PracticeBodyOrganisms';
import PracticePageCategoryMolecules from '../../organisms/PracticeOrganisms/PracticeCategoryOrganisms';
import PracticePageHeaderMolecules from '../../organisms/PracticeOrganisms/PracticeHeaderOrganisms/PracticeHeaderOrganisms';
import PracticeInterviewOrganisms from '../../organisms/PracticeOrganisms/PracticeInterviewOrganisms';
import PracticeNavOragnims from '../../organisms/PracticeOrganisms/PracticeNavOrganisms';
import MainPageFooterOrganism from '../../organisms/MainPagesFooterOrganism/MainPagesFooterOrganism';
import background from '../../assets/images/practiceBackgroundImage.png';
import { userInfo } from '../../../http/userInfo';

import down from '../../../../public/images/item/down.svg';
import up from '../../../../public/images/item/up.svg';

let language = ['react', 'node', 'spring'];

const PracticePageTemplate = (props: any) => {
  // console.log('userInfo._id:', userInfo?._id);

  const [modal, setModal] = useState(false);
  const [defaultmodal, setDefaultModal] = useState(false);

  return (
    <>
      <PracticeNavOragnims />
      <PracticePageHeaderMolecules />
      <S.ButtonWrap>
        {modal === false ? (
          <S.Button
            onClick={() => {
              setDefaultModal(true);
              setModal(true);
            }}
          >
            문제집 가이드
            <S.images>
              <Image src={down} alt="down" />
            </S.images>
          </S.Button>
        ) : (
          <S.Button
            onClick={() => {
              setModal(false);
            }}
          >
            문제집 가이드
            <S.images>
              <Image src={up} alt="up" />
            </S.images>
          </S.Button>
        )}
      </S.ButtonWrap>
      {defaultmodal ? (
        defaultmodal === true && modal === true ? (
          <S.Load>
            <PracticePageBodyMolecules></PracticePageBodyMolecules>
          </S.Load>
        ) : (
          <S.UnLoad>
            <PracticePageBodyMolecules></PracticePageBodyMolecules>
          </S.UnLoad>
        )
      ) : (""
      )}
      <PracticeInterviewOrganisms />
      <S.Wrap>
        <S.MaintitleWrap>
          <S.Title>기술 스택별 문제집</S.Title>
        </S.MaintitleWrap>
        <S.CardWrap>
          {language.map((language, i) => (
            <PracticePageCategoryMolecules key={i} language={language} />
          ))}
        </S.CardWrap>
      </S.Wrap>
      <MainPageFooterOrganism />
    </>
  );
};

export default PracticePageTemplate;
