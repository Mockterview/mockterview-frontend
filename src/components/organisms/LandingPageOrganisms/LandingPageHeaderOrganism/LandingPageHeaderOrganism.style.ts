import styled from '@emotion/styled';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  background-color: #031834;
  z-index: 999;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 400px) {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1230px;
  height: 60px;
  padding: 0 80px;

  @media screen and (max-width: 1024px) {
    padding: 0;
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const Logo = styled.div`
  color: #ffffff;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: 60px;
    padding-top: 21px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 400px) {
  }
`;

export const LinkWrapper = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    padding-right: 0px;
    padding-top: 0px;
  }
`;

export const Link = styled.a`
  display: block;
  user-select: none;
  margin-left: 40px;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: -0.0125em;
  cursor: pointer;

  // burgermenu 적용 시 display: none 적용
  @media (max-width: 1024px) {
    display: none;
  }
`;

type BurgerProps = {
  open: boolean;
};

export const BurgerBtn = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: end;
  margin-right: 24px;
  color: ${(props: BurgerProps) => (props.open ? '#FFFFFF' : '#FFFFFF')};
  z-index: 20;
  display: none;
  user-select: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 30px;
    height: 30px;
    background-color: ${(props: BurgerProps) =>
      props.open ? '#FFFFFF' : '#FFFFFF'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 400px) {
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 30px;
    height: 2px;
  }
`;

export const BurgerMenu = styled.ul`
  display: none;
  list-style: none;
  user-select: none;

  background-color: ${(props: BurgerProps) =>
    props.open ? '#FFFFFF' : '#FFFFFF'};
  flex-flow: row nowrap;
  li {
    display: none;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #177dff;
    margin: 0 auto;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100%;
    width: 220px;
    padding-top: 70px;
    transition: transform 0.3s ease-in-out;
    li {
      display: flex;
      justify-content: end;
      padding-right: 60px;
      font-family: Pretendard500;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: -0.0125em;
      color: #ffffff;
      cursor: pointer;
      padding: 10px 32px 10px 0;
    }
  }
`;
