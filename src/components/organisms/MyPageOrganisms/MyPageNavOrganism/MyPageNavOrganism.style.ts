import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
`;

export const Wrap = styled.div`
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
  user-select: none;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  user-select: none;
  cursor: pointer;
  /* margin-left: auto; */
`;

export const WorkBook = styled.div`
  font-size: 16px;
`;

export const Interview = styled.div`
  font-size: 16px;
  margin-left: 40px;
`;

export const MY = styled.div`
  color: #177dff;
  font-size: 16px;
  margin-left: 40px;
`;
