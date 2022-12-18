import styled from '@emotion/styled';

const SignupWrapper = styled.div`
  font-family: Pretendard500;
  text-align: center;
  margin: auto;
  margin-top: 100px;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 780px;
  padding-top: 30px;
  padding-bottom: 20px;
  border-radius: 8px;
  background-color: white;
`;

const SignupHeader = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;

const SignupDesc = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
  line-height: 140%;
  font-family: Pretendard600;
`;
const InputWrapper = styled.div`
  /* margin:10px; */
  display: flex;
  height: 100px;
  flex-direction: column;
  text-align: left;
  margin-bottom: 12px;
  /* padding: 10px; */
`;

type InputProps = {
  isError: string;
};

const Input = styled.input`
  width: 350px;
  height: 52px;
  align-self: center;
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 0px;
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

const ActiveBtn = styled.div`
  background-color: #177dff;
  border: none;
  color: white;
  transition: transform 3ms ease-in;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  padding: 21px 20px;
  letter-spacing: 1px;
  margin-top: 7px;
  width: 350px;
  height: 60px;
  transition: transform 3ms ease-in;
  text-transform: uppercase;
  align-self: center;
  cursor: pointer;
  line-height: 100%;
`;

const UnactiveBtn = styled.div`
  background-color: #c7daf2;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  padding: 21px 20px;
  letter-spacing: 1px;
  margin-top: 7px;
  width: 350px;
  height: 60px;
  transition: transform 3ms ease-in;
  text-transform: uppercase;
  align-self: center;
  line-height: 100%;
`;

const Label = styled.div`
  font-family: Pretendard400;
  font-size: 16px;
  margin-bottom: 5px;
  width: 350px;
`;

const WarningMessage = styled.div`
  font-size: 12px;
  color: #f24147;
  opacity: 0.8;
  margin-top: 7px;
  /* margin-top: 7px; */
`;

export {
  SignupWrapper,
  SignupForm,
  SignupHeader,
  SignupDesc,
  InputWrapper,
  Input,
  ActiveBtn,
  UnactiveBtn,
  Label,
  WarningMessage,
};
