import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #177dff;
  // height: 375px;
  padding-top: 60px;
  /* margin-top: 60px; */
`;
export const Header = styled.div`
  color: white;
  width: 1230px;
  /* height: 171px; */
  border-radius: 10px;
  /* font-family: Pretendard500; */
  /* padding: 1rem;
  margin-left: 5rem; */
  background-color: #177dff;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  text-align: center;

  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
`;

export const Title = styled.div`
  font-size: 32px;
  margin: 66px 0 20px;
  font-weight: 700;
  /* margin: 126px 0 12px; */
`;

export const Description = styled.div`
  font-size: 16px;
  height: 48px;
  line-height: 150%;
  letter-spacing: -0.0125em;
  font-family: Pretendard400;
  /* padding-bottom: 40px */
`;
export const Button = styled.button`
  border-radius: 8px;
  width: 191px;
  height: 48px;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 16px;
  margin: 0 auto;
  /* margin-top: 40px; */
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  font-family: Pretendard600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrap = styled.div`
  display: flex;
  background-color: #177dff;
  width: 100%;
  margin: 40px 0 56px;
  flex-direction: row;
`;

export const ImageWrap = styled.div`
  padding-left: 5px;
  display: flex;
`;

export const fadeIn = keyframes`
from {
  // opacity: 0;
  height: 0;
  // transform: transsY(-100%);
  // transform: scaleY(0);
}
to {
  // transform: translateY(0%);
  // transform: scaleY(1);
  height: 375px;
  // opacity: 1;
}
`;

export const fadeOut = keyframes`
from {
  // transform: translateY(0%);
  // transform: scaleY(1);
  height: 375px;
  // opacity: 1;
}
to {
  // opacity: 0;
  height: 0;
  // transform: transsY(-100%);
  // transform: scaleY(0);
}
`;

export const Load = styled.div`
  animation: ${fadeIn} 0.3s ease-in;
  overflow-y: hidden;
  height: 375px;
`;

export const UnLoad = styled.div`
  animation: ${fadeOut} 0.3s ease-in;
  overflow-y: hidden;
  height: 0;
`;
