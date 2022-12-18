import SignupPageTemplate from '../../src/components/templates/SignupPageTemplate';
import React, { ReactNode, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { baseURL } from '../../src/http/url';
import instance from '../../src/http/axios';
import { checkPlatform } from '../../src/checkPlatform';

export default function Signup() {
  useEffect(() => {
    async function fetchLog() {
      const result = await instance.post(`${baseURL}/logs/tracking`, {
        deviceId:
          localStorage.getItem('deviceId') !== null
            ? localStorage.getItem('deviceId')
            : (localStorage.setItem('deviceId', uuidv4()),
              localStorage.getItem('deviceId')),
        pageName: 'SignUp',
        referrer: document.referrer,
        url: window.location.href,
        agent: checkPlatform(),
      });
    }
    fetchLog();
  }, []);
  return <SignupPageTemplate></SignupPageTemplate>;
}
