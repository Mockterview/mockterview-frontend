import Image from 'next/image';

import * as S from './LandingPageFooterOrganism.style';
import footer_logo from '/public/images/Landing/footer/footer_logo.svg';

const LandingPageFooterOrganism = () => {
  return (
    <>
      <S.Background>
        <S.Wrapper>
          <S.Logo>
            <Image
              src={footer_logo}
              alt="footer_logo"
              loading="lazy"
              unoptimized
            />
          </S.Logo>
          <S.Desc>Copyright @2022 Mockterview. All rights reserved.</S.Desc>
        </S.Wrapper>
      </S.Background>
    </>
  );
};

export default LandingPageFooterOrganism;
