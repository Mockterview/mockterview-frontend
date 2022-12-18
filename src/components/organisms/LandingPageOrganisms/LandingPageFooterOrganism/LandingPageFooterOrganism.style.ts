import styled from '@emotion/styled';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 56px;
  padding-bottom: 56px;

  background: #1b2634;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-top: 40px;
    padding-bottom: 32px;
  }
`;

export const Wrapper = styled.div`
  width: 960px;

  @media screen and (max-width: 1024px) {
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
  }
`;

export const Desc = styled.div`
  padding-top: 17px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.0125em;
  color: #5f6771;

  @media screen and (max-width: 1024px) {
    padding-top: 13px;
  }
`;
