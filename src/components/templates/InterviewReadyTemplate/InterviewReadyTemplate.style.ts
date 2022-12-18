import styled from '@emotion/styled';
import exp from 'constants';

export const wrap = styled.div`
  font-family: Pretendard500;
`;

export const InterviewHeader = styled.div`
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard500;
`;

export const InterviewWrapper = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 780px;
  margin-top: 100px;
  /* border-radius: 8px; */
  font-family: Pretendard500;
`;

export const Title = styled.div`
  width: 442px;
  height: 78px;

  font-family: Pretendard500;

  font-weight: 700;
  font-size: 28px;
  line-height: 140%;
`;

export const Notice = styled.div`
  width: 493px;
  height: 26px;
  font-family: Pretendard500;

  font-weight: 500px;
  font-size: 20px;
  margin-top: 84px;
`;

export const NoticeBox = styled.div`
  width: 500px;
  height: 65px;
  margin: 20px;
  background: #f1f6fb;
  border-radius: 10px;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  font-family: Pretendard400;
  font-size: 16px;
`;

export const VoiceRecordBox = styled.div`
  width: 500px;
  height: 120px;
  left: 369px;
  top: 492px;
  background: #f1f6fb;
  border-radius: 10px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
`;

export const SoundCheck = styled.div`
  margin-left: 0.5rem;
`;

export const TestRecordButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 30px;
  margin-left: 16px;
  padding: 8px 16px;
  background: #ffffff;
  color: #000000;
  border: 1px solid #c7daf2;
  border-radius: 999px;
  transition: transform 3ms ease-in;
  cursor: pointer;
  font-family: Pretendard500;
  font-size: 14px;
`;

export const StartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

export const StartButton = styled.button`
  width: 300px;
  height: 49px;

  background: #177dff;
  border-radius: 10px;
  border: none;
  transition: transform 3ms ease-in;
  cursor: pointer;

  color: #ffffff;
  font-family: Pretendard500;

  font-size: 20px;
  font-weight: 400;
`;

export const OnRecord = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 30px;
  margin-left: 16px;
  padding: 8px 16px;
  background: #177dff;
  color: white;
  border: 1px solid #c7daf2;
  border-radius: 999px;
  transition: transform 3ms ease-in;
  cursor: pointer;
  font-family: Pretendard500;
  font-size: 14px;
  border: none;
`;

export const OnPlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 30px;
  margin-left: 16px;
  padding: 8px 16px;
  background: #177dff;
  color: white;
  border: 1px solid #c7daf2;
  border-radius: 999px;
  transition: transform 3ms ease-in;
  cursor: pointer;
  font-family: Pretendard500;
  font-size: 14px;
  border: none;
`;

export const SoundBar = styled.div`
  width: 292px;
`;

export const processNum = styled.div`
  margin-left: 0.5rem;
  color: #177dff;
`;

export const processBar = styled.div`
  margin: 0 auto;
  border-radius: 10px;
  /* margin-top: 1.5rem; */
  background-color: #c7daf2;
  display: flex;
  align-items: center;
`;

export const processWrap = styled.div`
  width: 100%;
  height: 10px;
  font-size: 12px;
  padding-left: 1.5rem;
  display: flex;
  margin-top: 1rem;
`;

export const processBarProcess = styled.div<{ process: number | string }>`
  width: ${({ process }) => process}%;
  height: 6px;
  transition: 0.5s all;
  background-color: #177dff;
  /* border-radius: ${({ process }) =>
    process === '100%' ? '10px 10px 10px 10px' : '10px 10px 10px 10px'}; */
`;
