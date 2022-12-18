import Image from 'next/image';

import * as S from './LandingPageTopTierOrganism.style';
import sparta from '/public/images/Landing/toptier/sparta.svg';
import coupang from '/public/images/Landing/toptier/coupang.svg';
import kakao from '/public/images/Landing/toptier/kakao.svg';

const LandingPageTopTierOrganism = () => {
  return (
    <>
      <S.Background>
        <S.Wrap>
          <S.TextWrap>
            <S.Subject>검증된 문제</S.Subject>
            <S.Title>
              현업 Top-tier 개발자들이 <br />
              검수하였습니다.
            </S.Title>
            <S.Desc>
              일을 이끌고 있는 개발자 <br />
              현업 면접관으로 참석하고 있는 개발자 <br />
              이들보다 문제를 더 잘 아는 사람은 없습니다.
            </S.Desc>
          </S.TextWrap>
          <S.BottomWrap>
            <S.IconWrap>
              <S.SpartaBox>
                <S.Sparta>
                  <Image src={sparta} alt="sparta" loading="lazy" unoptimized />
                </S.Sparta>
                <S.SpartaMobile>
                  <Image
                    src={sparta}
                    alt="sparta"
                    loading="lazy"
                    unoptimized
                    width={62}
                    height={32}
                  />
                </S.SpartaMobile>
              </S.SpartaBox>
              <S.CoupangBox>
                <S.Coupang>
                  <Image
                    src={coupang}
                    alt="coupang"
                    loading="lazy"
                    unoptimized
                  />
                </S.Coupang>
                <S.CoupangMobile>
                  <Image
                    src={coupang}
                    alt="coupang"
                    loading="lazy"
                    unoptimized
                    width={76}
                    height={18}
                  />
                </S.CoupangMobile>
              </S.CoupangBox>
              <S.KakaoBox>
                <S.Kakao>
                  <Image src={kakao} alt="kakao" loading="lazy" unoptimized />
                </S.Kakao>
                <S.KakaoMobile>
                  <Image
                    src={kakao}
                    alt="kakao"
                    loading="lazy"
                    unoptimized
                    width={64}
                    height={20}
                  />
                </S.KakaoMobile>
              </S.KakaoBox>
            </S.IconWrap>

            <S.BottomDesc>
              대기업 테크리드부터 스타트업 CTO까지 현업에서 활약하고 <br />
              있는 자문 그룹이 문제의 퀄리티를 직접 검수하였습니다.
            </S.BottomDesc>
          </S.BottomWrap>
        </S.Wrap>
      </S.Background>
    </>
  );
};

export default LandingPageTopTierOrganism;
