import react, { useState, useEffect } from 'react';
import axios from 'axios';

import * as S from './MyPageTemplate.style';
import MyPageMainInfoOrganism from '../../organisms/MyPageOrganisms/MyPageMainInfoOrganism';
import MyPageNavOrganisms from '../../organisms/MyPageOrganisms/MyPageNavOrganism';

import MyPageDetailedInfoOrganism from '../../organisms/MyPageOrganisms/MyPageDetailedInfoOrganism';
import MyPageSideMenuOrganism from '../../organisms/MyPageOrganisms/MyPageSideMenuOrganism';
import { userInfo } from '../../../http/userInfo';
import instance from '../../../http/axios';
import { baseURL } from '../../../http/url';

const MyPageTemplate = (props: any) => {
  const [Info, setInfo] = useState<any>(null);

  useEffect(() => {
    const fetchInfo = async () => {
      const result = await instance.get(
        `${baseURL}/users/userinfo?userId=${userInfo._id}`,
      );
      setInfo(result.data);
    };
    fetchInfo();
  }, []);

  return (
    <>
      <S.Nav>
        <MyPageNavOrganisms />
      </S.Nav>
      <S.Wrap>
        <MyPageMainInfoOrganism />
      </S.Wrap>
      <S.MidWrap>
        <MyPageSideMenuOrganism />
        <MyPageDetailedInfoOrganism />
      </S.MidWrap>
    </>
  );
};

export default MyPageTemplate;
