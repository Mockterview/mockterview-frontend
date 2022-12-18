import instance from '../../../src/http/axios';
import { baseURL } from '../../../src/http/url';

import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { useEffect } from 'react';
import LoginTest from '../../../src/components/organisms/LoginPageOrganisms/LoginTest'
import { useState} from 'react'
import { check } from 'prettier';

export default function Test() {

const [num, setNum] = useState(0)

useEffect(()=> {
    check()
},[])
check()
  async function check() {
    const result = await instance.get(`${baseURL}/auth/test`).then(response => {
    });
  }
  
    return(
        <div>
        <div> {num} </div>
        <button onClick={()=> {setNum(num+1)}}>하이 </button>
        <LoginTest></LoginTest>
        </div>
    )
    }
