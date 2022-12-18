import Image from 'next/image';

import * as S from './LandingPageMockOrganism.style';
import repeat from '/public/images/Landing/mock/repeat.svg';

const LandingPageMockOrganism = () => {
  return (
    <>
      <S.Background>
        <S.Wrapper>
          <S.TextWrapper>
            <S.Subject>모의면접</S.Subject>
            <S.Title>
              답안을 녹음하고 비교하고
              <br />
              발전시키세요.
            </S.Title>
            <S.ImgMobile>
              <Image
                src={repeat}
                alt="repeat"
                loading="lazy"
                unoptimized
                width={323}
                height={174}
              />
            </S.ImgMobile>
            <S.ImgMobileDesc>반복 연습으로 향상되는 나의 실력</S.ImgMobileDesc>
            <S.Desc>
              글로 써보는 것만으로는 부족합니다. 긴장된 상황에서도
              <br />
              역량을 충분히 발휘하려면 단련한 지식을 입으로 내뱉어
              <br />
              보는 연습이 반드시 필요합니다.
            </S.Desc>
          </S.TextWrapper>
          <S.ImgWrap>
            <S.Img>
              <Image src={repeat} alt="repeat" loading="lazy" unoptimized />
            </S.Img>
            <S.ImgDesc>반복 연습으로 향상되는 나의 실력</S.ImgDesc>
          </S.ImgWrap>
        </S.Wrapper>
      </S.Background>
    </>
  );
};

export default LandingPageMockOrganism;
