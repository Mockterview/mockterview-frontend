import { useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from './PracticeCategoryOrganisms.style';
import axios from 'axios';
import instance from '../../../../http/axios';

import { baseURL } from '../../../../../src/http/url';

// import react from '../../../../../public/images/category/react.png';
// import node from '../../../../../public/images/category/node.png';
// import spring from '../../../../../public/images/category/spring.png';

import { landingCategoryData } from '../../../../models/category/category.model';
import Link from 'next/link';
import { userInfo } from '../../../../http/userInfo';

const PracticePageCategoryOrganisms = (props: { language: string }) => {
  const [stack, setStack] = useState(null);
  useEffect(() => {
    const fetchStack = async () => {
      try {
        const response = await instance.get(
          `${baseURL}/practice/categories?userId=${userInfo._id}`,
          // `https://testapi.mockterview.shop/practice/categories?userId=6386e2d20f83183d87351c18`,
        );
        setStack(response.data);
      } catch (err) {
      }
    };

    fetchStack();
  }, []);

  if (stack)
    return (
      <>
        <S.CardWrap>
          <S.cardList>
            <S.card>
              <S.titleWrap>
                <S.tagsWrap>
                  <S.tag1>50문제</S.tag1>
                  <S.tag2>5시간 소요</S.tag2>
                  <S.tag3>현업 개발자 검증완료</S.tag3>
                </S.tagsWrap>
                <S.imgWrap>
                  <Image
                    src={require(`../../../../../public/images/category/${props.language}.png`)}
                    alt="reactlogo"
                    width={45}
                    height={39}
                  />
                </S.imgWrap>
                <S.cardTitle>
                  {props.language === 'react'
                    ? 'React'
                    : props.language === 'node'
                    ? 'Node.js'
                    : props.language === 'spring'
                    ? 'Spring'
                    : null}{' '}
                  문제집
                </S.cardTitle>
                <S.cardSubTitle>
                  {props.language === 'react'
                    ? 'Frontend Engineer'
                    : props.language === 'node'
                    ? 'Backend Engineer'
                    : props.language === 'spring'
                    ? 'Backend Engineer'
                    : null}
                </S.cardSubTitle>
              </S.titleWrap>
              <S.line />
              <S.cardContent>
              {props.language === 'react'
                    ? 'React'
                    : props.language === 'node'
                    ? 'Node'
                    : props.language === 'spring'
                    ? 'Spring'
                    : null}에 관한 2022년 최신 트렌드를 반영하였습니다.
                초급, 중급, 고급의 모든 문제들을 풀고 실력을 갈고닦으세요.
              </S.cardContent>
              <S.processWrap>
                진행률 <S.processNum>{stack[props.language]}</S.processNum> %
              </S.processWrap>
              <S.processBar>
                <S.processBarProcess process={stack[props.language]} />
              </S.processBar>
              <Link href={{pathname: `/workbook/${props.language}`, query:{page: 1}}}>
                <S.btn>
                  {stack[props.language] === 0 ? <>시작하기</> : <>계속하기</>}
                </S.btn>
              </Link>
            </S.card>
          </S.cardList>
        </S.CardWrap>
      </>
    );
};
export default PracticePageCategoryOrganisms;
