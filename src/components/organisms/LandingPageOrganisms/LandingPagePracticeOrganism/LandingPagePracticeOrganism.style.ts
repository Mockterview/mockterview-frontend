import styled from '@emotion/styled';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #177dff;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Wrap = styled.div`
  width: 960px;
  padding-top: 120px;
  padding-bottom: 100px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-top: 70px;
    padding-bottom: 50px;
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-family: Pretendard500;
  font-weight: 700;
  font-size: 38px;
  line-height: 140%;
  letter-spacing: -0.0125em;
  color: #ffffff;
  span {
    color: #edff1c;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 400px) {
    font-family: Pretendard500;
  }
`;

export const MidWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const TextWrap = styled.div`
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;

export const SubTitle = styled.div`
  width: 100%;
  padding-top: 72px;
  font-family: Pretendard500;
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -0.0125em;
  color: #ffffff;
  span {
    color: #84baff;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-top: 40px;
    text-align: center;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 400px) {
    font-family: Pretendard500;
  }
`;

export const MobileImg = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: block;
    margin: 0 auto;
    margin-top: 41px;
  }
`;

export const DescTitle = styled.div`
  padding-top: 46px;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.0125em;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    padding-top: 30.5px;
    text-align: center;
    font-size: 1rem;
  }
`;

export const Desc = styled.div`
  padding-top: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.0125em;
  color: #d1e5ff;

  @media screen and (max-width: 1024px) {
    padding-top: 7px;
    text-align: center;
    font-size: 0.9rem;
  }
`;

export const DesktopImg = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: end;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;

  @media screen and (max-width: 1024px) {
    padding-top: 35px;
  }
`;

export const BoxWrap = styled.div`
  width: 100%;
  padding-top: 37px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 33px;
  }
`;

export const Box = styled.div`
  width: 100%;
  padding-top: 39px;
  padding-bottom: 48px;
  background: linear-gradient(
    0deg,
    #1b2634 12.99%,
    rgba(27, 38, 52, 0) 188.74%
  );
  border-radius: 50px;

  @media screen and (max-width: 1024px) {
    width: 350px;
    padding-top: 31px;
    padding-bottom: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BoxContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BoxTitle = styled.div`
  text-align: center;
  font-family: Pretendard500;
  font-weight: 700;
  font-size: 34px;
  line-height: 140%;
  letter-spacing: -0.0125em;
  color: #edff1c;

  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 400px) {
    font-family: Pretendard500;
  }
`;

export const BoxBottomWrap = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 21px;
  padding-left: 20px;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-left: 0;
  }
`;

export const ReactIcon = styled.div`
  padding: 0 3px;
`;

export const NodeIcon = styled.div`
  padding: 0 3px;
`;

export const SpringIcon = styled.div`
  padding: 0 3px;
`;

export const BoxDesc = styled.div`
  margin-left: 10px;
  padding-top: 18px;
  padding-left: 25px;
  font-weight: 500;
  font-size: 16px;
  line-height: 165%;
  letter-spacing: -0.0125em;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    margin-left: 0;
    text-align: center;
    font-size: 0.8rem;
    padding-top: 19px;
    padding-left: 0;
  }
`;
