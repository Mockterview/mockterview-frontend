import styled from '@emotion/styled';

export const Container = styled.div`
  // width: 1230px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const Wrap = styled.div`
  height: 169px;
  background-color: #c7daf2;
  padding-top: 80px;
  font-family: Pretendard500;
  display: flex;
  justify-content: center;
  margin-bottom: 68px;
`;

export const CorrectImageWrap = styled.div`
  position: absolute;
  z-index: -2;
  margin: -45px -40px;
`;

export const WrongImageWrap = styled.div`
  position: absolute;
  z-index: -2;
  margin: -55px -35px;
`;

export const Title = styled.div`
  font-size: 28px;
  width: 1230px;
  padding: 0 80px 50px;
  font-family: Pretendard600;
`;

export const Description = styled.div`
  font-size: 1rem;
  font-family: Pretendard500;
  margin-top: 1rem;
`;

export const Input = styled.div`
  width: 1070px;
  height: 160px;
  padding: 24px;
  align-self: center;
  border: none;
  border-radius: 10px;
  word-wrap: break-word;
  overflow-x: scroll;
  font-size: 14px;
  line-height: 150%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Pretendard500;
`;

export const QuestionWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 1070px;
`;

export const QuestionTitle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 150%;
  letter-spacing: -0.0125em;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 1070px;
  height: 160px;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 15px;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  width: 116px;
  height: 48px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: #177dff;
  font-family: Pretendard600;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: center;
  width: 1070px;
  /* width: 1070px; */
  margin: 30px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 26px;
  align-items: center;
`;

export const BeforeButton = styled.button`
  width: 110px;
  height: 48px;
  border: 1px solid #177dff;
  font-size: 16px;
  color: #177dff;
  background-color: white;
  border-radius: 10px;
  font-family: Pretendard600;
`;

export const PageButton = styled.button`
  width: 110px;
  height: 48px;
  border: 1px solid #177dff;
  font-size: 16px;
  background-color: #177dff;
  padding: 16px, 14px;
  border-radius: 10px;
  font-family: Pretendard600;
  color: white;
  cursor: pointer;
`;

export const PageNum = styled.div`
  margin: 0 51px;
  font-size: 18px;
  line-height: 150%;
`;
