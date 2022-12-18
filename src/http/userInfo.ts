import { setCookie, getCookie, deleteCookie } from 'cookies-next';

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

function getUserInfo() {
  const userInfo = getCookie('userInfo');
  if (!userInfo) {
    return undefined;
  }
  const parsedUserInfo = parseCookie(String(userInfo));
  const _id = parsedUserInfo._id;
  const name = parsedUserInfo.name;
  const email = parsedUserInfo.email;

  return parsedUserInfo;
}

export const userInfo = getUserInfo();

function getRefreshToken() {
  const refreshToken = getCookie('refreshToken');
  if (refreshToken) {
    return refreshToken;
  }
  return false;
}

function getLogin() {
  const refreshToken = getCookie('refreshToken');
  if (refreshToken) {
    return true;
  }
  return false;
}

export const refreshToken = getRefreshToken();

export const isLogin = getLogin();
