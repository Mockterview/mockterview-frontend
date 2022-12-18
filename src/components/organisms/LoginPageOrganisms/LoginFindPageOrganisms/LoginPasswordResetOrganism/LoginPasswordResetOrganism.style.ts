import styled from '@emotion/styled';

const LoginTitle = styled.div`
  font-size: 28px;
`;
const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  display: flex;
  margin: auto;
  margin-top: 15%;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
`;
const InputWrapper = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const LoginText = styled.div`
  font-size: 16px;
  margin: 30px;
`;

const LoginButton = styled.button`
  width: 350px;
  height: 60px;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #177dff;
  cursor: pointer;
`;
const Input = styled.input`
  width: 350px;
  height: 50px;
  border: 1px solid lightgray;
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
  &::placeholder {
    font-size: 15px;
    color: #8e8e8e;
  }
`;

const Label = styled.div`
  font-size: 16px;
  width: 350px;
  padding-left: 10px;
`;

const WarningMessage = styled.div`
  font-size: 13px;
  color: red;
`;

const ActiveBtn = styled.button`
  background-color: #177dff;
  border: none;
  color: white;
  transition: transform 3ms ease-in;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  margin-top: 7px;
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
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  margin-top: 7px;
  width: 350px;
  height: 60px;
  transition: transform 3ms ease-in;
  text-transform: uppercase;
  align-self: center;
`;

export {
  LoginTitle,
  LoginWrapper,
  InputWrapper,
  LoginText,
  LoginButton,
  Input,
  Label,
  WarningMessage,
  ActiveBtn,
  UnactiveBtn,
};
