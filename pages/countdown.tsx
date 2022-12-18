import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';

interface Countdown {
  seconds: number;
  // language: string;
}
const CountDownTimer = ({ seconds = 3 }: Countdown) => {
  const [time, setTime] = useState<Countdown>({
    seconds,
  });
  const router = useRouter();
  const { isReady, query } = useRouter();

  const tick = () => {
    if (time.seconds === 1) {
      // router.push({
      //   pathname: `/interview/${query.category}`,
      //   query: { category: query.category, },}
      // )
      location.replace(`/interview/${query.category}}`);
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
