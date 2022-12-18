import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const ResultWait = () => {
  return (
    <>
      <Wrap>
        <Description>
          <h1>결과 준비 중 입니다...</h1>
          <Link href="/interview/result/score">
            <div>임시버튼</div>
          </Link>
        </Description>
      </Wrap>
    </>
  );
};

export default ResultWait;

const Wrap = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
`;

const Description = styled.div`
  margin: 0 auto;
`;
