import styled from '@emotion/styled';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 96px 0;
  background-color: #020d1d;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-top: 46px;
    padding-bottom: 53px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 960px;
  padding-left: 130px;
  padding-right: 90px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Title = styled.div`
  font-family: Pretendard500;
  font-weight: 700;
  font-size: 48px;
  line-height: 140%;
  font-weight: 700;
  color: #edff1c;

  text-align: center;
  letter-spacing: -0.0125em;

  @media screen and (max-width: 1024px) {
    font-family: Pretendard500;
    text-align: center;
    font-size: 2em;
  }

  @media screen and (max-width: 400px) {
    font-family: Pretendard500;
    font-size: 1.8em;
  }
`;

export const Desc = styled.div`
  font-weight: 500;
  font-size: 25px;
  line-height: 140%;
  letter-spacing: -0.0125em;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    padding-top: 20px;
    text-align: center;
    font-size: 1.15em;
  }

  @media screen and (max-width: 400px) {
    font-size: 1em;
  }
`;
