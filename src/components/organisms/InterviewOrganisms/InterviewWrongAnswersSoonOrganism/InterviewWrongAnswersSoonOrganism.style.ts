import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 185px 362px 362px 332px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 25px;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.0125em;

  span {
    font-family: Pretendard500;
  }
`;

export const Desc = styled.div`
  padding: 37px 99px 99px 0;
  padding-left: 99px;
  padding-right: 99px;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.0125em;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const CarrotBG = styled.div`
  align-self: center;
  width: 120px;
  height: 120px;
  user-select: none;

  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.07), 0px 4px 20px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  transition: transform 0.13s;

  &:hover {
    transform: translateY(-3px);
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Carrot = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  user-select: none;

  cursor: pointer;
  transition: transform 0.13s ease;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  user-select: none;

  width: 240px;
  height: 48px;
  margin-top: 90px;
  padding-top: 16px;

  background: #177dff;
  border-radius: 10px;

  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.0125em;
  color: #ffffff;

  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
