import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const modal = styled.div``;
export const modalBox = styled.div``;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 700px;
  // margin: 0 auto;
  background: #c7daf2;
`;

export const MaintitleWrap = styled.div`
  display: flex;
`;

export const Title = styled.div`
  // width: 1160px;
  margin: 0 auto;
  font-size: 28px;
  font-weight: 700;
  font-family: Pretendard600;
  padding-top: 70px;
`;

export const CardWrap = styled.div`
  display: flex;
  direction: column;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 16px;
  width: 177px;
  height: 48px;
  font-family: Pretendard600;
  border-radius: 8px;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 14px;
  margin: 0 auto;
  margin-top: 35px;
  text-align: center;
  display: flex;
  justify-content: center;
  padding-left: 16px;
  font-family: Pretendard600;
`;

export const ButtonWrap = styled.div`
  display: flex;
  background-color: #177dff;
  width: 100%;
  padding-top: 56px;
  padding-bottom: 56px;
  /* height: 195px; */
`;

export const images = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

export const animation = styled.div`
  tranjanimation: 800ms;
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
