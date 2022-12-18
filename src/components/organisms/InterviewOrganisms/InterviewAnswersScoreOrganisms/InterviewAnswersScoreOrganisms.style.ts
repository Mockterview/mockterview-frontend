import styled from '@emotion/styled';

export const Wrap = styled.div`
  // width: 1230px;
  width: 100%;
  height: 233px;
  background-color: #c7daf2;
  margin: 0 auto;
  padding: 62px;
  font-family: Pretendard500;
  overflow: hidden;
  display: flex;
`;

export const Text = styled.div`
  width: 1079px;
  margin: 0 auto;
`;
export const Title = styled.div`
  font-family: Pretendard600;
  font-size: 28px;
`;

export const Description = styled.div`
  font-size: 1rem;
  font-family: Pretendard400;
  font-weight: 400;
  line-height: 150%;
`;

export const Strong = styled.strong`
  // font-weight: 900;
`;

export const QuestionNum = styled.div`
  /* margin: 20px; */
  /* padding: -60px 0; */
  /* padding: 0 -40px; */
  font-family: Pretendard500;
  /* padding: 40px 0; */
  margin-bottom: 30px;
  z-index: 1;
  line-height: 140%;
  /* z-index: 5; */
  /* position: absolute; */
  /* margin: 20px 60px; */
  /* position: absolute; */
`;
export const LottiCorrectWrapper = styled.div`
  position: absolute;
  margin: -35px -40px;
  z-index: -2;
  display: flex;
  justify-content: flex-start;
`;

export const LottiWrongWrapper = styled.div`
  position: absolute;
  margin: -55px -35px;
  z-index: -2;
  display: flex;
  justify-content: flex-start;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Pretendard500;
  margin-top: 92px;
`;
export const QuestionWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 1070px;
`;

export const Line = styled.div`
  line-height: 140%;
  margin-bottom: 16px;
  font-family: Pretendard700;
  font-style: normal;
  font-size: 20px;
`;
export const Input = styled.div`
  width: 1070px;
  height: 160px;
  padding: 24px;
  font-size: 14px;
  align-self: center;
  border: none;
  border-radius: 10px;
  word-wrap: break-word;
  overflow-x: scroll;
  line-height: 150%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 1070px;
  height: 160px;
  overflow: hidden;
  margin-top: 40px;
  border: 1px solid black;
  border-radius: 15px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  width: 105px;
  height: 44px;
  margin: 10px 0;
  border-radius: 4px;

  /* justify-content: center; */
  /* width: 100vw; */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1070px;
  margin-bottom: 30px;
  /* margin: 5px -5px; */
`;
export const CorrectButton = styled.button`
  display: flex;
  color: #177dff;
  font-family: Pretendard600;
  flex-direction: column;
  width: 52.5px;
  padding: 13px 20px;
  border-radius: 4px 0 0 4px;
  background-color: white;
  border: 1px solid #177dff;
  cursor: pointer;
  /* &:hover {
    background: #177dff;
    color: white;
  } */
`;

export const CorrectButtonBlue = styled.button`
  display: flex;
  color: white;
  font-family: Pretendard600;
  flex-direction: column;
  width: 52.5px;
  padding: 13px 20px;
  border-radius: 4px 0 0 4px;
  background-color: #177dff;
  border: 1px solid #177dff;
  cursor: pointer;
  /* &:hover {
    background: white;
    color: #177dff;
  } */
`;

export const WrongButton = styled.button`
  display: flex;
  flex-direction: column;
  width: 52.5px;
  font-family: Pretendard600;
  color: #177dff;
  border-top: 1px solid #177dff;
  border-bottom: 1px solid #177dff;
  border-right: 1px solid #177dff;
  border-left: none;
  background-color: white;
  border-radius: 0 4px 4px 0;
  padding: 13px 20px;
  cursor: pointer;
  /* &:hover {
    background: #177dff;
    color: white;
  } */
`;

export const WrongButtonBlue = styled.button`
  display: flex;
  color: white;
  font-family: Pretendard600;
  flex-direction: column;
  width: 52.5px;
  padding: 13px 20px;
  border-radius: 0 4px 4px 0;
  background-color: #177dff;
  border: 1px solid #177dff;
  cursor: pointer;
  /* &:hover {
    background: white;
    color: #177dff;
  } */
`;
export const SubmitButton = styled.button`
  width: 110px;
  height: 48px;
  margin-bottom: 50px;
  align-self: center;
  background: #177dff;
  border-radius: 10px;
  color: white;
  border: none;
  font-family: Pretendard600;
  cursor: pointer;
`;

export const QuestionNumWrap = styled.div`
  /* display: flex; */
  position: absolute;
  margin: 0 -30px;
`;
