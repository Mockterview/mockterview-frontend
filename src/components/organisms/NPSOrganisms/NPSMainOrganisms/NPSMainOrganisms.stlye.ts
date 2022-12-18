import styled from '@emotion/styled';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;
export const Wrap = styled.div`
  padding-top: 75px;
  padding: 35px;
  width: 572px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // background: #e8e8e8;
  background: #ffffff;
`;
export const Title = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 140%;

  text-align: center;
  align-items: center;

  margin-top: 10px;
`;
export const SubTitle = styled.div`
  margin-top: 8px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  text-align: center;
  letter-spacing: -0.0125em;

  color: #5a5a5a;
`;

export const QuestionWrap = styled.div`
  margin-top: 40px;
`;
export const QuestionTitle = styled.div``;

export const TitleWrap = styled.div`
  //   margin-top: 30px;
`;
export const SubmitWrap = styled.div`
  display: flex;
  justify-content: center;
  //   margin-top: 30px;
`;
export const Submit = styled.div`
  width: 300px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  // margin-bottom: 0px;

  background: #177dff;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
`;

export const PointWrap = styled.div`
  display: flex;
`;

export const Point = styled.div`
  margin-top: 30px;
  color: #8e8e8e;
  margin-left: 13px;
  margin-right: 13px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  margin-bottom: 20px;
`;

export const Spot = styled.div`
  width: 20px;
  height: 20px;
  background: #c7daf2;
  margin-bottom: 9px;
  border-radius: 50%;
  z-index: 2;
`;

export const Score = styled.div``;

export const ClickedScore = styled.div`
  color: #177dff;
  z-index: 2;
`;
export const ClickedPoint = styled.div`
  margin-top: 30px;
  color: #177dff;
  margin-left: 13px;
  margin-right: 13px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  margin-bottom: 20px;
`;

export const ClickedSpot = styled.div`
  width: 20px;
  height: 20px;
  background: #177dff;
  margin-bottom: 9px;
  border-radius: 50%;
  z-index: 3;
  //   color: #177dff;
`;

export const Line = styled.div`
  position: absolute;
  margin-top: 38px;
  margin-left: 30px;
  width: 428px;
  border: 2px solid #c7daf2;
  z-index: 1;
`;

export const Answer = styled.textarea`
  font: inherit;
  margin-top: 1rem;
  resize: none;
  width: 480px;
  height: 72px;
  font-size: 14px;
  border-radius: 10px;
  border: 0px solid #c7daf2;
  padding-left: 1.2rem;
  padding-top: 0.85rem;
  line-height: 150%;
  background: #f1f6fb;
  margin-bottom: 40px;
`;

export const ShareWrap = styled.div`
  display: flex;
  margin-bottom: 30px;

  align-items: center;
  justify-content: flex-end;
`;
export const ShareBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 97px;
  height: 27px;
  color: #ffffff;
  background: #177dff;
  border-radius: 999px;
  font-size: 15px;
  cursor: pointer;
  margin-right: 15px;
`;

export const ShareTitle = styled.div`
  display: flex;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  letter-spacing: -0.0125em;
  margin-right: 15px;
  color: #177dff;
`;
