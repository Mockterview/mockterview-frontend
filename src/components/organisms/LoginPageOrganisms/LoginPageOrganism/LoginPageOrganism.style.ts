import styled from '@emotion/styled';

const LoginWrapper = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Pretendard400;
`;

const LoginForm = styled.form`
  position: absolute;
  display: flex;
  width: 350px;
  flex-direction: column;
  height: 497px;
  top: 180px;
  border-radius: 8px;
  background-color: white;
`;

const InputWrapper = styled.div`
  display: flex;
  height: 112px;
  flex-direction: column;
  text-align: left;
`;

type InputProps = {
  isError: string;
};

const Input = styled.input`
  width: 350px;
  height: 50px;
  border: 1px solid #8e8e8e;
  align-self: center;
  outline: none;
  border-radius: 0px;
  /* line-height: 2.5rem; */
  font-size: 15px;
  padding: 24px;
  border-radius: 10px;
  border: ${(props: InputProps) =>
    props.isError ? '1px solid red' : '1px solid black'};

  &::placeholder {
    font-size: 15px;
    /* padding: 24px; */
    color: #8e8e8e;
  }
`;

const LoginButton = styled.button`
  padding: 10px;
  margin-top: 1rem;
  padding-top: 0.6rem;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  width: 350px;
  height: 60px;
  align-self: center;
  cursor: pointer;
  user-select: none;
  transition: 0.2s all;
`;

const Label = styled.div`
  font-size: 16px;
  width: 350px;
  margin-bottom: 8px;
  font-family: Pretendard400;
`;

const WarningMessage = styled.div`
  font-size: 12px;
  color: red;
  padding-top: 8px;
`;

const ActiveBtn = styled.button`
  width: 350px;
  margin: 28px 0 30px;
  padding: 21px 20px;
  align-self: center;
  height: 60px;
  color: white;
  border: none;
  font-size: 18px;
  border-radius: 10px;
  background-color: #177dff;
  cursor: pointer;
  font-weight: 700;
  line-height: 100%;
`;

const UnactiveBtn = styled.button`
  background-color: lightgrey;
  color: white;
  border: none;
  font-size: 18px;
  border-radius: 10px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  margin-top: 7px;
  width: 350px;
  height: 60px;
  transition: transform 3ms ease-in;
  text-transform: uppercase;
  align-self: center;
  line-height: 100%;
`;

const LoginTitle = styled.div`
  font-size: 18px;
`;

const LoginDesc = styled.div`
  font-size: 28px;
  font-family: Pretendard600;
  margin-bottom: 48px;
`;

const LoginForgot = styled.div`
  font-size: 14px;
  /* position: absolute; */
  /* position: fixed; */
  /* margin: 30px; */
  /* position: relative; */
`;

export {
  LoginWrapper,
  LoginForm,
  InputWrapper,
  Input,
  Label,
  WarningMessage,
  LoginButton,
  ActiveBtn,
  UnactiveBtn,
  LoginTitle,
  LoginDesc,
  LoginForgot,
};
