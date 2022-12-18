import axios from 'axios';
import { baseURL } from './url';
// import User, { userInfo } from '../store/user'
import { useState, useEffect } from 'react';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { userInfo } from './userInfo';
import { result } from '../store/user';
type token = string;
import { isLogin } from '../http/userInfo';

// axios.defaults.withCredentials = true
const instance = axios.create({
  baseURL,
  // withCredentials: true,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

// interceptor
instance.interceptors.request.use(
  function (config) {
    // console.log("request",config)
    if (userInfo) {
      const accessToken = getCookie('accessToken');
      config.headers!.Authorization = accessToken
        ? `Bearer ${accessToken}`
        : '';
    }
    return config;
  },
  function (error) {
    return error;
  },
);

instance.interceptors.response.use(
  function (response: any) {
    const {
      config: { url, method },
      data,
      status,
    } = response;
    // console.log("response",response)

    //jotai 상태관리 필요?
    //최초 로그인시 userInfo 쿠키에 저장

    if (url == `${baseURL}/users/login` && status == 201) {
      const accessToken = data.accessToken;
      const refreshToken = data.refreshToken;
      const name = data.name;
      const email = data.email;
      const _id = data._id;
      const accessExpires = new Date(Date.now() + 1000 * 60 * 60 * 2);
      const refreshExpires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 14);

      const userInfo = `_id=${_id};name=${name};email=${email}`;

      setCookie('accessToken', accessToken, { expires: accessExpires });
      setCookie('refreshToken', refreshToken, { expires: refreshExpires });
      setCookie('userInfo', userInfo, { expires: refreshExpires });
      return response;
    }

    if (url == `${baseURL}/users/signup`) {
      return response;
    }

    return response;
  },
  async function (error) {
    // CORS

    if (!error.response) return;

    const {
      config: { url, method },
      status,
      data,
    } = error.response;

    if (status === 401) {
      deleteCookie('userData');
      deleteCookie('userInfo');
      deleteCookie('accessToken');
      deleteCookie('refreshToken');

      window.location.href = `/login`;
      return;
    }

    if (status === 403) {
      const originalRequest = error.config;
      originalRequest!.headers = { ...originalRequest!.headers };

      const userInfo = getCookie('userInfo');
      const parsedUserInfo = parseCookie(String(userInfo));
      const _id = parsedUserInfo._id;
      const name = parsedUserInfo.name;
      const email = parsedUserInfo.email;
      const refreshToken = getCookie('refreshToken');

      await instance
        .post(`${baseURL}/users/verify/refresh-token`, {
          _id: _id,
          refreshToken: refreshToken,
        })
        .then(response => {
          if (
            Number(response.status) == 200 ||
            Number(response.status) == 201
          ) {
            const accessExpires = new Date(Date.now() + 1000 * 60 * 60 * 2);
            const infoExpires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 14);
            const accessToken = response.data.accessToken;
            const userInfo = `_id=${_id};name=${name};email=${email}`;
            // setCookie('userInfo', userInfo, { expires: infoExpires });
            setCookie('accessToken', accessToken, { expires: accessExpires });
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return instance(originalRequest);
          } else if (Number(response.status) == 401) {
            deleteCookie('userData');
            deleteCookie('userInfo');
            deleteCookie('accessToken');
            deleteCookie('refreshToken');
            window.location.href = `/login`;
            return response;
          }
        });
      return instance(originalRequest);
    }
    return error.response;
  },
);

const parseCookie = (str: string) =>
  str
    .split(';')
    .map((v: string) => v.split('='))
    .reduce((acc: { [x: string]: string }, v: string[]) => {
      acc[decodeURIComponent(v[0]?.trim() || '')] = decodeURIComponent(
        v[1]?.trim() || '',
      );
      return acc;
    }, {});

export default instance;
