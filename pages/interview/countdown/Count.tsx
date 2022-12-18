import React, { useEffect } from 'react';
import { useState } from 'react';
import Router, { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { isLogin } from '../../../src/http/userInfo'

interface Countdown {
  seconds: number;
  // language: string;
}



const CountDownTimer = ({ seconds = 3 }: Countdown) => {
  useEffect(()=> {
    if(!isLogin){
      window.location.href = '/login'
    }return 
  },[])
  
  const [time, setTime] = useState<Countdown>({
    seconds,
  });
  const router = useRouter();
  const { category, round } = router.query;
  const { isReady, query } = useRouter();


  const tick = () => {
    if (time.seconds === 1) {
      router.push({
        pathname: `/interview/type`,
        query: { category: category, round: round },
      });

      // location.replace(`/interview/node`);
    } else if (time.seconds === 0) {
      setTime({ seconds: 3 });
    } else {
      setTime({
        seconds: time.seconds - 1,
      });
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => tick(), 1000);
    return () => clearTimeout(timerId);
  });

  return (
    <CountDown>
      <div>{`${time.seconds.toString()}`}</div>
    </CountDown>
  );
};

export default CountDownTimer;

const CountDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  font-family: Pretendard500;


  font-style: normal;
  font-weight: 700;
  font-size: 40px;

  color: #177dff;
`;
