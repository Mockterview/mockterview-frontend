import { users } from './signup';
import Cookies from 'cookies';

const jwt = require('jsonwebtoken');

export default function handler(req, res) {
  const cookies = new Cookies(req, res);

  if (req.method == 'GET') {
    res.status(200).json(users);
  }

  const loginInfo = req.body;

  let name = '';
  let email = '';
  let emailValid = false;
  let passwordValid = false;
  users.forEach(user => {
    if (
      user['email'] == loginInfo['email'] &&
      user['password'] == loginInfo['password']
    ) {
      emailValid = true;
      passwordValid = true;
      name = user['name'];
      email = user['email'];
    } else if (user['email'] == loginInfo['email']) {
      emailValid = true;
    }
  }); //hash 사용해서 비밀번호 확인과정을 거침.
  //register 할때 hash해서 보관하고, 비교할때도 hash

  if (emailValid && passwordValid) {
    //
    const accessToken = generateAccessToken(loginInfo);
    const refreshToken = jwt.sign(loginInfo, process.env.REFRESH_TOKEN_SECRET);
    cookies.set('accessToken', accessToken);
    cookies.set('refreshToken', refreshToken);

    // let a = getCookie('accessToken');
    //cookie token + http only 설정해줌
    return res.status(200).send({
      email: email,
      name: name,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } else if (emailValid) {
    return res.status(400).send({});
  }

  res.status(401).send({});
}
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
}
