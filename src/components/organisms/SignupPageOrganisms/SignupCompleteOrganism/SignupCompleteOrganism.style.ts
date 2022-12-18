import styled from '@emotion/styled';

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  display: flex;
  margin: auto;
  margin-top: 10%;
  flex-direction: column;
  font-weight: 700;
`;

const LoginTitle = styled.div`
  margin-top: 25px;
  font-size: 28px;
  font-family: Pretendard600;
`;
const LoginText = styled.div`
  font-family: Pretendard400;
  font-size: 16px;
  margin: 50px;
`;

const LoginButton = styled.button`
  width: 350px;
  height: 60px;
  font-size: 18px;
  font-family: Pretendard600;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #177dff;
  cursor: pointer;
`;
export { LoginWrapper, LoginTitle, LoginText, LoginButton };
