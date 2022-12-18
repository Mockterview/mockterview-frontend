import styled from '@emotion/styled';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #1b2634;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Wrap = styled.div`
  width: 960px;
  display: flex;
  justify-content: space-between;
  padding-top: 120px;
  padding-bottom: 108px;

  @media screen and (max-width: 1024px) {
    width: 350px;
    display: flex;
    flex-direction: column;
    padding-top: 65px;
    padding-bottom: 55px;
  }
`;

export const TextWrap = styled.div``;

export const Subject = styled.div`
  font-family: Pretendard500;
  font-weight: 700;
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
  margin-top: 8px;
  font-family: Pretendard500;
  font-weight: 700;
  font-size: 38px;
  line-height: 140%;
  letter-spacing: -0.0125em;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
    margin-top: 4px;
  }

  @media screen and (max-width: 400px) {
    font-family: Pretendard500;
  }
`;

export const Desc = styled.div`
  margin-top: 74px;
  font-weight: 400;
  font-size: 26px;
  line-height: 140%;
  letter-spacing: -0.0125em;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    width: 100%;
    font-size: 1rem;
    margin-top: 30px;
  }
`;

export const BottomWrap = styled.div`
  padding-top: 18px;
  @media screen and (max-width: 1024px) {
    padding-top: 0px;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (max-width: 1024px) {
    padding: 50px 0 0;
  }
`;

export const SpartaBox = styled.div`
  width: 200px;
  height: 70px;
  align-self: flex-start;
  background: #0f3668;
  box-shadow: 2px 2px 50px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 50px;
  }
`;

export const Sparta = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 14px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const SpartaMobile = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    padding-top: 9px;
  }
`;

export const CoupangBox = styled.div`
  width: 200px;
  height: 70px;
  align-self: flex-end;
  margin-top: 25px;
  background: #0f3668;
  box-shadow: 2px 2px 50px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 50px;
    margin-top: 10px;
  }
`;

export const Coupang = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 23px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const CoupangMobile = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    padding-top: 18px;
  }
`;

export const KakaoBox = styled.div`
  width: 200px;
  height: 70px;
  margin-left: 27px;
  margin-top: 24px;
  background: #0f3668;
  box-shadow: 2px 2px 50px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    margin-left: 0;
  }
`;

export const Kakao = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const KakaoMobile = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    padding-top: 15px;
  }
`;

export const BottomDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.0125em;
  color: #bbbec2;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-size: 0.9rem;
  }
`;
