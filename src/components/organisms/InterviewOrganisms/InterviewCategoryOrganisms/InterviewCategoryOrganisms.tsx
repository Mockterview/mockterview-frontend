import { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import * as S from './InterviewCategoryOrganisms.style';

import { baseURL } from '../../../../../src/http/url';

import react from '../../../../../public/images/category/react.png';
import node from '../../../../../public/images/category/node.png';
import spring from '../../../../../public/images/category/spring.png';
import { userInfo } from '../../../../http/userInfo';
import instance from '../../../../http/axios';

import InterviewAlertModalOrganism from '../InterviewAlertModal/InterviewAlertModal';
import { PropertySafetyFilled } from '@ant-design/icons';
import { useRouter } from 'next/router';

const InterviewPageCategoryOrganisms = (props: {
  stack: {
    category: string;
    round: string;
    isCompleted: boolean;
  };
}) => {
  const [stackProcess, setStackProcess] = useState([]);
  const [userId, setUserId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (userInfo) {
      setUserId(userInfo._id);
    }
  }, [userInfo]);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      const result = await instance
        .get(`${baseURL}/practice/categories?userId=${userId}`)
        .then(response => {
          setStackProcess(response.data.rounds);
        });
    };
    fetchData();
  }, []);

  //axios 붙이기
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get(
  //       `https://testapi.mockterview.shop/practice/categories?userId=${userId}`,
  //     );
  //     setStackProcess(result.data.rounds);
  //   };
  //   fetchData();
  // }, []);

  function handleClick(category: string) {
    if (props.stack.isCompleted == false) {
      setShowModal(true);
      return;
    }
    router.push({
      pathname: `/interview/ready/${props.stack.category}`,
      query: { category: props.stack.category, round: props.stack.round },
    });
  }

  return (
    <>
      {showModal && (
        <InterviewAlertModalOrganism
          setShowModal={setShowModal}
        ></InterviewAlertModalOrganism>
      )}
      <S.CardWrap>
        <S.cardList>
          <S.card>
            <S.titleWrap>
              <S.imgWrap>
                <Image
                  src={require(`../../../../../public/images/category/${props.stack.category}.png`)}
                  alt="reactlogo"
                  width={45}
                  height={39}
                />
              </S.imgWrap>
              <S.cardTitle>
                {props.stack.category === 'react'
                  ? 'React'
                  : props.stack.category === 'node'
                  ? 'Node.js'
                  : props.stack.category === 'spring'
                  ? 'Spring'
                  : null}{' '}
                문제집
              </S.cardTitle>
              <S.cardSubTitle>
                {props.stack.category === 'react'
                  ? 'Frontend Engineer'
                  : props.stack.category === 'node'
                  ? 'Backend Engineer'
                  : props.stack.category === 'spring'
                  ? 'Backend Engineer'
                  : null}
              </S.cardSubTitle>
            </S.titleWrap>
            <S.line />
            <S.cardContent>
              {props.stack.category === 'react'
                ? 'React'
                : props.stack.category === 'node'
                ? 'Node.js'
                : props.stack.category === 'spring'
                ? 'Spring'
                : null}
              에 관한 2022년 최신 트렌드를 반영하였습니다. 초급, 중급, 고급의
              모든 문제들을 풀고 실력을 갈고닦으세요.
            </S.cardContent>

            {/* <Link href={`/interview/${props.language}`}> */}
            {/* <Link
              href={{
                pathname: `/interview/ready/${props.stack.category}`,
                query: {
                  category: props.stack.category,
                  round: props.stack.round,
                },
              }}
            > */}
            <S.btn
              onClick={() => {
                handleClick(props.stack.category);
              }}
            >
              {props.stack.round}회차 면접보기
            </S.btn>
            {/* </Link> */}
          </S.card>
        </S.cardList>
      </S.CardWrap>
    </>
  );
};

export default InterviewPageCategoryOrganisms;
