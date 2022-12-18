import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrap = styled.div`
  position: fixed;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #c7daf2;
  align-items: center;
  height: 60px;
  // position: fixed;
`;

export const BtnWrap = styled.div`
  background-color: #c7daf2;
  display: flex;
  padding: 0 80px;
  width: 1230px;
`;

export const Description = styled.div`
  font-family: 'Pretendard400';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  display: flex;
  align-items: center;
`;
export const Button = styled.div`
  font-size: 16px;
  color: #5a5a5a;
  font-family: Pretendard400;
  margin-left: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #177dff;
  border-radius: 10px;

  color: #ffffff;

  width: 121px;
  height: 35px;
  cursor: pointer;
`;
export const Button1 = styled.div`
  font-family: Pretendard600;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;

  margin-left: auto;

  color: #177dff;

  width: 121px;
  height: 35px;

  background: #f1f6fb;

  border: 1px solid #177dff;
  border-radius: 10px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const fadeIn = keyframes`
from {
height: 0px;

}
to {
height: 60px;  
}
`;

export const fadeOut = keyframes`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
  // visibility: hidden;
}
`;

export const loadWrap = styled.div`
  margin-top: 60px;
  width: 100%;
  position: fixed;
  justify-content: center;

  background-color: #c7daf2;
  display: flex;
  padding: 0 80px;
`;

export const load = styled.div`
  animation: ${fadeIn} 0.5s ease-in;
  // z-index: 100;
`;

export const unload = styled.div`
  animation: ${fadeOut} 3s ease-in;
`;

export const HeaderWrap = styled.div`
  // animation: ${fadeIn} 0.5s ease-in;

  position: fixed;
  width: 100%;
`;

export const OtherAnswerWrap = styled.div`
  // margin-top: 260px;
  z-index: 1;
`;

export const MyanswerWrap = styled.div``;
