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
    padding-top: 62px;
    padding-bottom: 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 960px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
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
  padding-top: 4px;
  font-family: Pretendard500;
  font-weight: 600;
  font-size: 38px;
  line-height: 140%;
  letter-spacing: -0.0125em;
  color: #000000;

  @media screen and (max-width: 1024px) {
    margin-top: 4px;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 400px) {
    font-family: Pretendard500;
  }
`;

export const ImgMobile = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    padding-top: 35px;
  }
`;

export const ImgMobileDesc = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    padding-top: 41.5px;

    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    letter-spacing: -0.0125em;
    color: #8e8e8e;
  }
`;

export const Desc = styled.div`
  padding-top: 60px;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.0125em;
  color: #000000;

  @media screen and (max-width: 1024px) {
    padding-top: 14px;
    font-size: 0.9rem;
  }
`;

export const ImgWrap = styled.div`
  padding-top: 40px;
  @media screen and (max-width: 1024px) {
    padding-top: 0;
  }
`;

export const Img = styled.div`
  display: flex;
  justify-content: end;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ImgDesc = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 18px;

  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.0125em;
  color: #8e8e8e;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
