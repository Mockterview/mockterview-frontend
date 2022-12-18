import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 181px;
  padding-bottom: 238px;
  background-image: url('images/Landing/prepare/bg.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 76px 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 310px;
  word-break: keep-all;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 35px;
    margin-right: 0;
  }
`;

export const Title = styled.div`
  font-family: Pretendard500;
  font-weight: 700;
  font-size: 48px;
  line-height: 140%;
  letter-spacing: -1.25%;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Pretendard500;
    font-size: 2rem;
    padding-top: 30px;
  }

  @media screen and (max-width: 400px) {
    font-family: Pretendard500;
    font-size: 1.63rem;
    padding-top: 30px;
  }
`;

export const Desc = styled.div`
  margin-top: 36px;
  font-weight: 400;
  font-size: 22px;
  line-height: 140%;
  letter-spacing: -0.0125em;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.2rem;
    padding: 40px;
  }

  @media screen and (max-width: 400px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1rem;
    padding: 40px;
  }
`;

export const Link = styled.a`
  display: block;
  width: 240px;
  margin-top: 100px;
  padding: 18px 70px;
  white-space: nowrap;
  user-select: none;

  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
  }

  @media screen and (max-width: 1024px) {
    display: block;
    margin: 15px auto;
    width: 240px;
    padding: 15px;
  }
`;
