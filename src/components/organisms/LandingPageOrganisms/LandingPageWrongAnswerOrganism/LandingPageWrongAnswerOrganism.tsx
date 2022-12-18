import Image from 'next/image';

import * as S from './LandingPageWrongAnswerOrganism.style';
import wronganswer from '/public/images/Landing/wronganswer/wronganswer.svg';

const LandingPageWrongAnswerOrganism = () => {
  return (
    <>
      <S.Background>
        <S.Wrap>
          <S.TextWrap>
            <S.Subject>오답노트</S.Subject>
            <S.Title>
              면접 5분 전, 실력을 완성하는
              <br />
              나만의 필살기
            </S.Title>
            <S.ImgMobile>
              <Image
                src={wronganswer}
                alt="wronganswer"
                loading="lazy"
                unoptimized
                width={330}
                height={194}
              />
            </S.ImgMobile>
            <S.ImgMobileDesc>
              PDF로 다운받아 볼 수 있는 오답노트
            </S.ImgMobileDesc>
            <S.Desc>
              모의면접 결과를 스스로 채점하실 수 있습니다.
              <br />
              틀린 문제는 자동으로 취합하여 오답노트를 만들어드립니다.
            </S.Desc>
          </S.TextWrap>
          <S.ImgWrap>
            <S.Img>
              <Image
                src={wronganswer}
                alt="wronganswer"
                loading="lazy"
                unoptimized
              />
            </S.Img>
            <S.ImgDesc>PDF로 다운받아 볼 수 있는 오답노트</S.ImgDesc>
          </S.ImgWrap>
        </S.Wrap>
      </S.Background>
    </>
  );
};

export default LandingPageWrongAnswerOrganism;
