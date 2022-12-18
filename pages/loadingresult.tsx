import styled from '@emotion/styled';

export default function LoadingResult() {
  return <LoadingResultText>결과 준비 중입니다...</LoadingResultText>;
}

const LoadingResultText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  font-family: Pretendard500;

  font-style: normal;
  font-weight: 700;
  font-size: 28px;
`;
