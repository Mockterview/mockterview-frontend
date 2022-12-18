import styled from '@emotion/styled';

export const wrap = styled.div`
  width: 100%;
  height: 661px;
  border-radius: 10px;
  // margin: 0 auto;
  background-color: #c7daf2;
`;

export const CardWrap = styled.div`
  // width: 100%;
  display: flex;
`;
export const cardList = styled.div`
  // width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const card = styled.div`
  width: 340px;
  height: 446px;
  background-color: #ffffff;

  justify-content: center;
  border-radius: 10px;
  margin: 52px 12.5px;
  /* margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem; */
  // margin-right: 2rem;
`;

export const cardTitle = styled.div`
  width: 100%;
  border-radius: 15px 15px 0 0;
  // display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 0.5rem;
  font-family: Pretendard600;
`;

export const cardSubTitle = styled.div`
  width: 100%;
  font-size: 14px;
  color: #177dff;
  margin-top: 0.5rem;
  font-family: Pretendard500;

  // margin-left: 4.5rem;
  // height: 60px;
  // border-radius: 15px 15px 0 0;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // font-size: 1.5rem;
  // font-weight: bold;
`;

export const cardContent = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem;
  margin-top: -1.5rem;
  line-height: 165%;
  letter-spacing: -0.0125em;
  color: #5a5a5a;
  font-size: 12px;
  font-family: Pretendard500;

  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
`;

export const processWrap = styled.div`
  width: 100%;
  height: 10px;
  font-size: 12px;
  padding-left: 1.5rem;
  display: flex;
  margin-top: 1rem;
`;

export const imgWrap = styled.div`
  margin-right: 0.5rem;
  margin-top: 0.5rem;
`;

export const titleWrap = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  margin-left: 1.5rem;
  width: 100%;
`;
export const testDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  font-size: 1rem;
  margin-left: 1.5rem;
  line-height: 30px;
`;

export const maintitleWrap = styled.div`
  display: flex;
`;

export const title = styled.div`
  width: 1160px;
  margin: 0 auto;

  fontweight: 900;
  font-size: 28px;
  font-weight: 700;

  padding-top: 3rem;
`;

export const description = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 1rem;
`;

export const strong = styled.div`
  font-weight: 900;
`;

export const btn = styled.div`
  width: 280px;
  height: 48px;
  font-family: Pretendard700;
  display: flex;
  margin: 0 auto;
  margin-top: 2rem;
  padding-top: 0.9rem;
  padding-bottom: 0.5rem;
  border: none;
  border-radius: 10px;

  text-align: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 400;

  color: #ffffff;
  background-color: #177dff;

  align-self: center;
  cursor: pointer;
  transition: 0.2s all;
`;

export const line = styled.hr`
  width: 85%;
  justify-content: center;
  margin-top: 2rem;
  border: 1px solid #c7daf2;
`;

export const tagsWrap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
`;

export const tag1 = styled.div`
  background-color: #c7daf2;
  border-radius: 10px;
  width: 59px;
  height: 24px;
  font-size: 12px;

  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: 24px;
  margin-right: 0.5rem;
`;
export const tag2 = styled.div`
  background-color: #c7daf2;
  border-radius: 10px;
  width: 75px;
  height: 24px;
  font-size: 12px;

  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: 24px;
  margin-right: 0.5rem;
`;
export const tag3 = styled.div`
  background-color: #c7daf2;
  border-radius: 10px;
  width: 122px;
  height: 24px;
  font-size: 12px;

  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: 24px;
  margin-right: 1rem;
`;

export const processNum = styled.div`
  margin-left: 0.5rem;
  color: #177dff;
`;

export const processBar = styled.div`
  width: 85%;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 1.5rem;
  background-color: #c7daf2;
`;

export const processBarProcess = styled.div<{ process: number | string }>`
  width: ${({ process }) => process}%;
  height: 6px;
  transition: 0.5s all;

  background-color: #177dff;

  border-radius: ${({ process }) =>
    process === '100%' ? '10px 10px 10px 10px' : '10px 10px 10px 10px'};
`;
