import React from 'react';
import * as S from './PracticeWorkBookHeaderOrganisms.style';

const PracticeWorkBookHeaderOrganisms = (props: any) => {
  return (
    <>
      <S.Wrap>
        <S.Text>
          <S.Title>{props.title} 50제</S.Title>
          <S.Line>___</S.Line>
          <S.Description>
            모든 문제는 현업에서 기술인터뷰 면접관으로 활약하고 계신 검수자
            분들의 꼼꼼한 손길을 거친 문제들입니다. <br />
            많은 문제를 얕게 공부하기보다, 
            <strong>중요한 문제를 확실하게 공부하세요.</strong>
          </S.Description>
        </S.Text>
      </S.Wrap>
    </>
  );
};

export default PracticeWorkBookHeaderOrganisms;
