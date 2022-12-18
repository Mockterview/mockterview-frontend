import React, { useEffect } from 'react';

import PracticePageTemplate from '../src/components/templates/PracticePageTemplate';
import { isLogin, userInfo } from '../src/http/userInfo';
import instance from '../src/http/axios';

import { v4 as uuidv4 } from 'uuid';
import { baseURL } from '../src/http/url';

import { checkPlatform } from '../src/checkPlatform';

const PracticePage = () => {
  
  useEffect(() => {
    async function fetchLog() {
      const result = await instance.post(`${baseURL}/logs/tracking`, {
        deviceId:
          localStorage.getItem('deviceId') !== null
            ? localStorage.getItem('deviceId')
            : (localStorage.setItem('deviceId', uuidv4()),
              localStorage.getItem('deviceId')),
        pageName: 'Practice',
        referrer: document.referrer,
        url: window.location.href,
        agent: checkPlatform(),
      });
      const date = await instance.patch(`${baseURL}/users/studyDate`, {
        userId: userInfo._id,
      });
    }
    fetchLog();
  }, []);

  useEffect(() => {
    if (!isLogin) {
      window.location.href = '/login';
    }
    return;
  }, [isLogin]);

  return (
    <>
      <PracticePageTemplate />
    </>
  );
};

export default PracticePage;
