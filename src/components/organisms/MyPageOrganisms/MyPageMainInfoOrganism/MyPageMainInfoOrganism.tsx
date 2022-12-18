import React, { useEffect, useState } from 'react';
import { userInfo } from '../../../../http/userInfo';
import instance from '../../../../http/axios';
import { baseURL } from '../../../../http/url';
import * as S from './MyPageMainInfoOrganism.style';

const MyPageMainInfoOrganism = () => {
  // console.log('userInfo', userInfo);

  // if (userInfo)
  return (
    <>
      <S.Wrap>
        <S.Name>
          안녕하세요,
          <br />
          {} 님
        </S.Name>
        <S.Email>{}</S.Email>
      </S.Wrap>
    </>
  );
};

export default MyPageMainInfoOrganism;
