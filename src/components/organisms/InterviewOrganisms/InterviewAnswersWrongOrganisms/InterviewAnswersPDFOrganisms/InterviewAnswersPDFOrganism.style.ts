import styled from '@emotion/styled';
import e from 'cors';

export const Container = styled.div`
  width: 595px;
  height: 842px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrap = styled.div`
  // width: 1230px;
  width: 100%;
  height: 200px;
  background-color: #f1f6fb;
  border-radius: 10px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Pretendard500;
  overflow: hidden;
  display: flex;
`;

export const Text = styled.div`
  width: 1079px;
  margin: 0 auto;
`;
export const Title = styled.div`
  font-weight: 1200;
  font-size: 28px;
`;

export const Description = styled.div`
  font-size: 1rem;
  font-family: Pretendard400;

  font-weight: 400;
  margin-top: 1rem;
`;

export const Input = styled.div`
  width: 1070px;
  height: 160px;
  padding: 30px;
  align-self: center;
  border: none;
  border-radius: 10px;
  word-wrap: break-word;
  overflow-x: scroll;
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
  margin-top: 14px;
  font-size: 18px;
  margin-bottom: 10px;
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
  border-radius: 10px;
  font-family: Pretendard400;
  color: white;
  cursor: pointer;
`;

export const PageNum = styled.div`
  margin: 0 51px;
  font-size: 18px;
  font-family: Pretendard400;
  line-height: 150%;
`;
