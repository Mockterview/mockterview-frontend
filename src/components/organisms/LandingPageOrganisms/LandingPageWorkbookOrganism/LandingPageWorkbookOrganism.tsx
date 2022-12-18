import Image from 'next/image';

import * as S from './LandingPageWorkbookOrganism.style';
import shape from '/public/images/Landing/workbook/shape.svg';
import thumbsup from '/public/images/Landing/workbook/thumbsup.svg';
import recommend from '/public/images/Landing/workbook/recommend.svg';

const LandingPageWorkbookOrganism = () => {
  return (
    <>
      <S.Background>
        <S.Wrap>
          <S.TextWrap>
            <S.Subject>문제집</S.Subject>
            <S.Title>
              나의 답안을 다른 지원자들의
              <br />
              답안과 비교해보세요.
            </S.Title>
            <S.GlassWrap>
              <S.Circle>
                <S.Glass>
                  <Image src={shape} alt="shape" loading="lazy" unoptimized />
                </S.Glass>
              </S.Circle>
              <S.GlassDesc>
                다른 사람들이 작성한 답변을 살펴보고
                <br />
                나의 답변을 발전시켜보세요.
              </S.GlassDesc>
            </S.GlassWrap>
            <S.ThumbsUpWrap>
              <S.Circle>
                <S.ThumbsUp>
                  <Image
                    src={thumbsup}
                    alt="thumbsup"
                    loading="lazy"
                    unoptimized
                  />
                </S.ThumbsUp>
              </S.Circle>
              <S.ThumbsUpDesc>
                나만의 독창적인 답변으로 커뮤니티에
                <br />
                기여할 수도 있습니다.
              </S.ThumbsUpDesc>
            </S.ThumbsUpWrap>
          </S.TextWrap>
          <S.RecommendWrap>
            <S.RecommendDeskTop>
              <Image
                src={recommend}
                alt="recommend"
                loading="lazy"
                unoptimized
              />
            </S.RecommendDeskTop>
            <S.RecommendMobile>
              <Image
                src={recommend}
                alt="recommend"
                loading="lazy"
                unoptimized
                width={330}
                height={194}
              />
            </S.RecommendMobile>
            <S.RecommendDesc>
              완벽한 답안을 찾는 가장 효율적인 방법
            </S.RecommendDesc>
          </S.RecommendWrap>
        </S.Wrap>
      </S.Background>
    </>
  );
};

export default LandingPageWorkbookOrganism;
