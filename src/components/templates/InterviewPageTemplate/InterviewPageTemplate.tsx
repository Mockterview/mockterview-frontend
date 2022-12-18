import React, { useEffect, useState } from 'react';
import { baseURL } from '../../../../src/http/url';

import * as S from './InterviewPageTemplate.style';
import InterviewPageBodyOrganisms from '../../organisms/InterviewOrganisms/InterviewBodyOrganisms/InterviewBodyOrganisms';
import InterviewPageCategoryOrganisms from '../../organisms/InterviewOrganisms/InterviewCategoryOrganisms';
import InterviewPageHeaderOrganisms from '../../organisms/InterviewOrganisms/InterviewHeaderOrganisms/InterviewHeaderOrganisms';
import InterviewNavOrganisms from '../../organisms/InterviewOrganisms/InterviewNavOrganisms';
import InterviewResultsOrganisms from '../../organisms/InterviewOrganisms/InterviewResultsOrganisms';
import InterviewPageSubBodyOrganisms from '../../organisms/InterviewOrganisms/InterviewPageSubBodyOrganisms';
import axios from 'axios';
import { userInfo } from '../../../http/userInfo';
import instance from '../../../../src/http/axios';
import LandingPageFooterOrganism from '../../organisms/LandingPageOrganisms/LandingPageFooterOrganism';
const InterviewPageTemplate = (props: object) => {
  const [stack, setStack] = useState([]);
  const [info, setInfo] = useState({});

useEffect(()=>{
  if(userInfo){
  setInfo(userInfo)
}
},[])





  useEffect(() => {
    if(info) {
    const fetchData = async () => {
      const result = await instance
        .get(`${baseURL}/interviews/categories?userId=${userInfo._id}`)
        .then(response => {
          setStack(response.data.rounds);
        });
    };
    fetchData();}
  }, []);

  //instace로 교체
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get(
  //       // 'https://testapi.mockterview.shop/practice/categories?category=node',
  //       `https://testapi.mockterview.shop/interviews/categories?userId=${userInfo._id}`,
  //     );
  //     // console.log('result', result.data);

  //     setStack(result.data.rounds);
  //   };
  //   fetchData();문
  // }, []);

  return (
    <>
      <>
        <InterviewNavOrganisms />
        <InterviewPageHeaderOrganisms />
        <InterviewPageSubBodyOrganisms />
        <S.Container>
          <S.Wrap>
            <S.MaintitleWrap>
              <S.Title>문제집을 고르고 모의면접을 시작하세요.</S.Title>
            </S.MaintitleWrap>

            <S.CardWrap>
              {stack?.map((stack, i) => (
                <InterviewPageCategoryOrganisms key={i} stack={stack} />
              ))}
            </S.CardWrap>
          </S.Wrap>
        </S.Container>
        <InterviewResultsOrganisms />
        <LandingPageFooterOrganism></LandingPageFooterOrganism>
      </>
    </>
  );
};

export default InterviewPageTemplate;
