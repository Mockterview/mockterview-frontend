import styled from '@emotion/styled';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 98px;
  background-color: #f1f6fb;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-top: 60px;
    padding-bottom: 42px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 960px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TextWrap = styled.div`
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

export const Subject = styled.div`
  font-family: Pretendard500;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.0125em;
  color: #177dff;

  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 400px) {
    font-family: Pretendard500;
  }
`;

export const Title = styled.div`
  padding-top: 8px;
  font-family: Pretendard500;
  font-weight: 600;
  font-size: 38px;
  line-height: 140%;
  letter-spacing: -0.0125em;
  color: #000000;

  @media screen and (max-width: 1024px) {
    padding-top: 4px;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 400px) {
    font-family: Pretendard500;
  }
`;

export const GlassWrap = styled.div`
  display: flex;
  padding-top: 60px;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;
  }
`;

export const Circle = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50px;
  background: #c7daf2;

  @media screen and (max-width: 1024px) {
    width: 32px;
    height: 32px;
  }
`;

export const Glass = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 7px;

  @media screen and (max-width: 1024px) {
    padding-top: 4px;
  }
`;

export const GlassDesc = styled.div`
  padding-left: 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: -0.0125em;
  color: #000000;

  @media screen and (max-width: 1024px) {
    padding-top: 10px;
    font-size: 1rem;
  }
`;

export const ThumbsUpWrap = styled.div`
  display: flex;
  padding-top: 21px;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
  }
`;

export const ThumbsUp = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 7px;

  @media screen and (max-width: 1024px) {
    padding-top: 4px;
  }
`;

export const ThumbsUpDesc = styled.div`
  padding-left: 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: -0.0125em;
  color: #000000;

  @media screen and (max-width: 1024px) {
    padding-top: 10px;
    font-size: 1rem;
  }
`;

export const RecommendWrap = styled.div`
  padding-top: 14px;

  @media screen and (max-width: 1024px) {
    padding-top: 30px;
  }
`;

export const RecommendDeskTop = styled.div`
  display: flex;
  justify-content: end;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const RecommendMobile = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

export const RecommendDesc = styled.div`
  padding-top: 18px;

  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.0125em;
  color: #8e8e8e;

  @media screen and (max-width: 1024px) {
    padding-top: 8.7px;
    font-size: 16px;
  }
`;
