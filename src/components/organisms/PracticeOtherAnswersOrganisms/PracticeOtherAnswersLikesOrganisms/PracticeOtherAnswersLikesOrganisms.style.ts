import styled from '@emotion/styled';

export const Wrap = styled.div`
  justify-content: center;
  background-color: #f1f6fb;
  align-items: center;
  height: 230px;
  display: flex;
  width: 100%;

  // position: fixed;
`;

export const OtherWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Test = styled.div``;
export const OthersWrap = styled.div`
  width: 1070px;
`;

export const OtherAwnserWrap = styled.div`
  justify-content: center;
`;

export const answer = styled.textarea`
  // margin-left: 12rem;
  font: inherit;
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
  // margin-left: 12rem;
  padding-right: 0.5rem;
`;
export const counter = styled.div`
  width: 1079px;
  padding-right: 0.5rem;
`;

export const OthersAnswer = styled.textarea`
  font: inherit;
  resize: none;
  width: 1070px;
  height: 160px;
  font-size: 14px;
  border-radius: 10px;
  border: bold;
  padding: 1.2rem;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 25px;
  line-height: 140%;
  letter-spacing: -0.0125em;
  margin-bottom: 1rem;
`;
export const TitleWrap = styled.div`
  // margin-left: 12rem;
  margin-bottom: 5rem;
  margin-top: 3rem;
`;

export const AnswerCount = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
`;

export const AnswerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  font-family: Pretendard400;
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const LikedInfo = styled.div`
  width: 103px;
  height: 31px;

  font-size: 15px;
  background: #177dff;
  color: #ffffff;

  border: 1px solid #c7daf2;
  border-radius: 999px;
  // padding: 1px 15px 5px 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Pretendard500;

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 100%;
  cursor: pointer;

  &:hover {
    width: 103px;
    height: 31px;
    font-size: 15px;
    border: 1px solid #c7daf2;
    border-radius: 999px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Pretendard500;

    cursor: pointer;
  }
`;

export const LikeInfo = styled.div`
  width: 103px;
  height: 31px;

  font-size: 15px;
  background: #ffffff;

  border: 1px solid #c7daf2;
  border-radius: 999px;
  // padding: 1px 15px 5px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard500;

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 100%;

  cursor: pointer;
  &:hover {
    &:hover {
      background-color: #c7daf2;
      color: #177dff;
      border: 1px solid #177dff;
      font-family: Pretendard500;

      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 100%;
    }
  }
`;
