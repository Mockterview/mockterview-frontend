import styled from '@emotion/styled';
import Link from 'next/link';

export default function InterviewSubHeader() {
  return (
    <HeaderWrap>
      <Header>
        <Link href="/interview">
          <Button>문제집으로 돌아가기</Button>
        </Link>
      </Header>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  background-color: #c7daf2;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  position: fixed;
`;
const Header = styled.div`
  width: 1230px;
  height: 60px;
  background-color: #c7daf2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 80px;
`;

const Button = styled.div``;
