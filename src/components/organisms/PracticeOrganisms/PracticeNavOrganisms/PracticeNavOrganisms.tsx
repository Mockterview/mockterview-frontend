import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import * as S from './PracticeNavOrganisms.style';
import logo_blue from '../../../../../public/images/item/logo_blue.svg';

const PracticeWorkBookNavOragnims = () => {
  const router = useRouter();

  return (
    <>
      <S.Container>
        <S.Wrap>
          <Link href="/">
            <S.Logo>
              <Image src={logo_blue} alt="logo" width={111} height={15} />
            </S.Logo>
          </Link>
          <S.Buttons>
            <Link href="/practice">
              <S.WorkBook>문제집</S.WorkBook>
            </Link>
            <Link href="/interview">
              <S.Interview>모의면접</S.Interview>
            </Link>
            {/* <Link href="/mypage">
              <S.Interview>MY</S.Interview>
            </Link> */}
          </S.Buttons>
        </S.Wrap>
      </S.Container>
    </>
  );
};

export default PracticeWorkBookNavOragnims;
