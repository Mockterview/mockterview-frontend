import styled from '@emotion/styled';

const LoginTitle = styled.div`
  font-size: 28px;
  padding-bottom: 48px;
`;

const LoginForm = styled.div`
  position: absolute;
  display: flex;
  width: 360px;
  flex-direction: column;
  height: 450px;
  top: 221px;
  border-radius: 8px;
  background-color: white;
`;

// const LoginWrapper = styled.div`
//   display: flex;
//   height: 100vh;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   flex-direction: column;
//   font-family: Pretendard600;
// `;
const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  display: flex;
  margin: auto;
  /* margin-top: 10%; */
  flex-direction: column;
  font-family: Pretendard600;
`;

const InputWrapper = styled.div`
  display: flex;
  height: 110px;
  width: 350px;
  flex-direction: column;
  text-align: left;
`;

const LoginText = styled.div`
  font-size: 16px;
`;

const LoginDesc = styled.div`
  font-size: 20px;
`;
const LoginButton = styled.button`
  width: 350px;
  height: 60px;
  font-size: 18px;
  color: white;
  border: none;
  padding: 21px 20px;
  margin-top: 28px;
  border-radius: 10px;
  background-color: #177dff;
  font-family: Pretendard600;
  cursor: pointer;
  line-height: 100%;
`;

const LoginButtonInactive = styled.button`
  width: 350px;
  height: 60px;
  font-size: 18px;
  color: white;
  border: none;
  padding: 21px 20px;
  margin-top: 28px;
  border-radius: 10px;
  background-color: #c7daf2;
  font-family: Pretendard600;
  line-height: 100%;
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
  line-height: 2.5rem;
  font-size: 15px;
  padding: 24px;
  /* font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem; */
  border-radius: 10px;
  border: ${(props: InputProps) =>
    props.isError ? '1px solid red' : '1px solid black'};
  &::placeholder {
    font-size: 15px;
    color: #8e8e8e;
  }
`;

const Label = styled.div`
  font-family: Pretendard400;
  font-size: 16px;
  width: 350px;
  /* padding-top: 10px; */
  margin: 8px 0;
`;

const WarningMessage = styled.div`
  font-size: 12px;
  color: #f24147;
  opacity: 0.8;
  font-family: Pretendard400;

  margin-top: 7px;
  text-align: left;
`;

const SpinWrap = styled.div`
  margin-left: 5px;
`;
const ActiveBtn = styled.button`
  background-color: #177dff;
  border: none;
  color: white;
  transition: transform 3ms ease-in;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  /* margin-top: 7px; */
  margin-top: 32px;
  width: 350px;
  height: 60px;
  transition: transform 3ms ease-in;
  text-transform: uppercase;
  align-self: center;
  cursor: pointer;
`;

const UnactiveBtn = styled.button`
  background-color: #c7daf2;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  margin-top: 32px;
  width: 350px;
  height: 60px;
  transition: transform 3ms ease-in;
  text-transform: uppercase;
  align-self: center;
`;

export {
  LoginTitle,
  LoginForm,
  LoginWrapper,
  InputWrapper,
  LoginText,
  LoginButton,
  Input,
  Label,
  WarningMessage,
  LoginDesc,
  ActiveBtn,
  UnactiveBtn,
  LoginButtonInactive,
  SpinWrap,
};
