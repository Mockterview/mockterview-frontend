import React, { ReactNode, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { baseURL } from '../../src/http/url';

import LoginPageTemplate from '../../src/components/templates/LoginPageTemplate';
import instance from '../../src/http/axios';
import { checkPlatform } from '../../src/checkPlatform';

export default function Login() {
  useEffect(() => {
    async function fetchLog() {
      const result = await instance.post(`${baseURL}/logs/tracking`, {
        deviceId:
          localStorage.getItem('deviceId') !== null
            ? localStorage.getItem('deviceId')
            : (localStorage.setItem('deviceId', uuidv4()),
              localStorage.getItem('deviceId')),
        pageName: 'LogIn',
        referrer: document.referrer,
        url: window.location.href,
        agaents: checkPlatform(),
      });
    }
    fetchLog();
  }, []);

  return <LoginPageTemplate></LoginPageTemplate>;
}
