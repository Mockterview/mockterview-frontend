import React, { useEffect } from 'react';

import InterviewPageTemplate from '../src/components/templates/InterviewPageTemplate';
import instance from '../src/http/axios';

import { isLogin, userInfo } from '../src/http/userInfo';

import { v4 as uuidv4 } from 'uuid';
import { baseURL } from '../src/http/url';
import { checkPlatform } from '../src/checkPlatform';

// const [isLoggedIn, setIsLoggedIn] = useState(false);

// useEffect(() => {
//   setIsLoggedIn(isLogin);
// }, [isLoggedIn]);

const InterviewPage = () => {
  useEffect(() => {
    async function fetchLog() {
      const result = await instance.post(`${baseURL}/logs/tracking`, {
        deviceId:
          localStorage.getItem('deviceId') !== null
            ? localStorage.getItem('deviceId')
            : (localStorage.setItem('deviceId', uuidv4()),
              localStorage.getItem('deviceId')),
        pageName: 'Interview',
        referrer: document.referrer,
        url: window.location.href,
        arguments: checkPlatform(),
      });
      const date = await instance.patch(`${baseURL}/users/studyDate`, {
        userId: userInfo._id,
      });
      // console.log('date', date);
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
      <InterviewPageTemplate />
    </>
  );
};

export default InterviewPage;
