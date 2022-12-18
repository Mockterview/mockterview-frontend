import Image from 'next/image';
import * as S from './LandingPagePracticeOrganism.style';
import practice from '/public/images/Landing/practice/practice.svg';
import arrow from '/public/images/Landing/practice/arrow.svg';
import react_logo from '/public/images/Landing/practice/react_logo.svg';
import node_logo from '/public/images/Landing/practice/node_logo.svg';
import spring_logo from '/public/images/Landing/practice/spring_logo.svg';

const LandingPagePracticeOrganism = () => {
  return (
    <>
      <S.Background>
        <S.Wrap>
          <S.Title>
            개발자의 <span>기초 체력</span>을 확인하는 <br />
            문제는 <span>정해져 있습니다.</span>
          </S.Title>
          <S.MidWrap>
            <S.TextWrap>
              <S.SubTitle>
                <span>많은 문제를 무작정 연습하는 것보다</span> <br />
                엄선된 문제를 확실하게 대비해야 합니다.
              </S.SubTitle>
              <S.MobileImg>
                <Image
                  src={practice}
                  alt="practice"
                  unoptimized
                  loading="lazy"
                  width={330}
                  height={184}
                />
              </S.MobileImg>
              <S.DescTitle>WHY?</S.DescTitle>
              <S.Desc>
                기술 인터뷰 문항은 전형적으로 80:20의 법칙을 따릅니다. <br />
                검증된 문제를 확실히 준비했다면 그 어떤 문제를 마주하더라도
                <br />
                답변이 가능합니다. 믿을 수 있는 문제로 효율적으로 대비하세요.
              </S.Desc>
            </S.TextWrap>
            <S.DesktopImg>
              <Image src={practice} alt="practice" loading="lazy" unoptimized />
            </S.DesktopImg>
          </S.MidWrap>
          <S.Arrow>
            <Image src={arrow} alt="arrow" />
          </S.Arrow>
          <S.BoxWrap>
            <S.Box>
              <S.BoxContents>
                <S.BoxTitle>딱 50문제에만 집중하세요.</S.BoxTitle>
                <S.BoxBottomWrap>
                  <S.IconWrap>
                    <S.ReactIcon>
                      <Image
                        src={react_logo}
                        alt="react_logo"
                        loading="lazy"
                        unoptimized
                      />
                    </S.ReactIcon>
                    <S.NodeIcon>
                      <Image
                        src={node_logo}
                        alt="node_logo"
                        loading="lazy"
                        unoptimized
                      />
                    </S.NodeIcon>
                    <S.SpringIcon>
                      <Image
                        src={spring_logo}
                        alt="spring_logo"
                        loading="lazy"
                        unoptimized
                      />
                    </S.SpringIcon>
                  </S.IconWrap>
                  <S.BoxDesc>
                    React, Spring, Node.js 포지션 별로 인성, CS기초 <br />
                    주특기를 모두 포함하여 50문제를 엄선하였습니다. <br />
                    50문제만 풀면 인터뷰 준비를 끝낼 수 있습니다.
                  </S.BoxDesc>
                </S.BoxBottomWrap>
              </S.BoxContents>
            </S.Box>
          </S.BoxWrap>
        </S.Wrap>
      </S.Background>
    </>
  );
};

export default LandingPagePracticeOrganism;
