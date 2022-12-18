import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';

export const wrap = styled.div`
  width: 1079px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 2rem;
`;
export const title = styled.div`
  font-weight: 800;
  font-size: 18px;
  margin-top: 1rem;
`;

export const strong = styled.strong`
  font-weight: 900;
`;
export const level = styled.div`
  width: 49px;
  background-color: #e7e7e7;
  text-align: center;
  padding: 0.3rem 0;

  font-size: 14px;
  border-radius: 10px;

  margin-bottom: 1rem;
`;

export const answer = styled.textarea`
  margin-top: 1rem;
  resize: none;
  width: 1070px;
  height: 160px;
  font-size: 14px;
  border-radius: 10px;
  border: bold;
  padding: 1.2rem;
`;

export const counterbox = styled.div`
  width: 1079px;
  font-size: 12px;
  text-align: right;
  padding-right: 0.5rem;
`;
export const counter = styled.div`
  width: 1079px;
  padding-right: 0.5rem;
  margin-bottom: 1rem;
`;
export const submit = styled.div`
  display: flex;

  width: 140px;
  height: 49px;

  background-color: #c7daf2;
  color: #ffffff;
  margin: 0 0 0 auto;
  border: none;
  border-radius: 10px;
  margin-top: 0.5rem;

  text-align: center;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-weight: 400;

  align-self: center;
  cursor: pointer;
  transition: 0.2s all;
`;

export const submited = styled.div`
  display: flex;

  width: 140px;
  height: 49px;

  background-color: #177dff;
  color: #ffffff;
  margin: 0 0 0 auto;
  border: none;
  border-radius: 10px;
  margin-top: 0.5rem;

  text-align: center;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-weight: 400;

  align-self: center;
  cursor: pointer;
  transition: 0.2s all;
`;

export const textinput = styled.input`
  font-size: 18px;
`;

export const buttonWrap = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

export const pages = styled.div`
  text-align: center;
  align-self: center;
  font-size: 18px;
  margin-left: 3rem;
  margin-right: 3rem;
`;

export const pagesBtn = styled.div`
  width: 110px;
  height: 48px;
  color: #ffffff;
  background-color: #177dff;

  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 10px;

  transition: 0.2s all;
  cursor: pointer;
`;

export const emptyBtn = styled.div`
  width: 110px;
  height: 48px;

  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 10px;
`;

//pagination
export const PageWrap = styled.div`
  display: flex;
  height: 100px;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
`;
type pageProps = {
  page: Number;
  num: Number;
};
export const PageButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 14px;
  gap: 10px;
  width: 48px;
  height: 48px;
  margin: 5px;
  color: ${(props: pageProps) =>
    props.num == props.page ? 'white' : '#177DFF'};
  background-color: ${(props: pageProps) =>
    props.num == props.page ? '#177DFF' : 'white'};
  font-family: Pretendard700;
  border: 1px solid #177dff;
  border-radius: 10px;
  cursor: pointer;
`;

export const ImageWrap = styled.button`
  cursor: pointer;
  border: none;
`;
