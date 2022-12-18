import styled from '@emotion/styled';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo_blue from '/public/images/item/logo_blue.svg';

const LoginHeader = () => {
  return (
    <Container>
      <Wrap>
        <Logo>
          <Link href="/">
            <Image src={logo_blue} alt="logo" width={111} height={15} />
          </Link>
        </Logo>
      </Wrap>
    </Container>
  );
};

export default LoginHeader;

export const Container = styled.div`
  width: 100%;
  background-color: white;
  /* position: fixed; */

`;

export const Wrap = styled.div`
  width: 1230px;
  display: flex;
  height: 60px;
  margin: auto;
  padding: 0 80px;
  align-items: center;
  

  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
    margin: 0;
  }
`;

export const Logo = styled.div``;

export const Buttons = styled.div`
  display: flex;
  margin-left: auto;
`;

export const WorkBook = styled.div`
  font-size: 16px;
`;

export const Interview = styled.div`
  font-size: 16px;
  margin-left: 40px;
  color: #177dff;
`;
