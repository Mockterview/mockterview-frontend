// import usestate
import React, { useState, useEffect } from 'react';
import * as S from './PracticeWorkBookBodyOrganisms.style';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import previous from 'public/images/icon/leftplay.svg';
import next from '/public/images/icon/rightplay.svg';
import { Router, useRouter } from 'next/router';
import { baseURL } from '../../../../http/url';
import { userInfo } from '../../../../http/userInfo';
import SocketIOClient from 'socket.io-client';

import instance from '../../../../../src/http/axios';

import InterviewQuestionsOrganims from '../../InterviewOrganisms/InterviewQuestionsOrganims/InterviewQuestionsOrganims';

type Prop = {
  code: any;
  _id: React.Key | any;
  level: string;
  title: string;
  order: number;
  language: string;
};

export const socket = SocketIOClient(`${baseURL}`);
socket.on('connect', () => {
  // setConnected(true);
  // console.log('SOCKET CONNECTED!', socket.id);
});

const PracticeWorkBookBodyOrganisms = (props: { language: string }) => {
  const [questions, setQuestions] = useState<Array<object>>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [connected, setConnected] = useState<boolean>(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [tooltipCheckArray, setTooltipCheckArray] = useState<Array<number>>([]);
  // const [tooltipCheckCount, setTooltipCheckCount] = useState<number>(0);
  const [stack, setStack] = useState(null);
  const [process, setProcess] = useState(0);
  const { query, isReady } = useRouter();
  const router = useRouter();
  const [pageNum, setPageNum] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    setPage(Number(query.page));
  }, [router]);

  useEffect(() => {
    if (!userInfo) return;
    const fetchQuestions = async () => {
      const result = await instance.get(
        // `https://testapi.mockterview.shop/practice/questions?category=${props.language}&userId=6386e2d20f83183d87351c18`,
        `${baseURL}/practice/questions?category=${props.language}&userId=${userInfo._id}`,
      );
      // console.log(result.data);
      setQuestions(result.data);

      const fetchStack = async () => {
        try {
          const response = await instance.get(
            `${baseURL}/practice/categories?userId=${userInfo._id}`,
            // `https://testapi.mockterview.shop/practice/categories?userId=6386e2d20f83183d87351c18`,
          );
          setStack(response.data);
        } catch (err) {}
      };

      fetchStack();
    };
    fetchQuestions();
  }, [userInfo]);

  function getTooltipCheckCount(props: number) {
    // setTooltipCheckCount(props);
    // let copyTooltipCheckArray = [...tooltipCheckArray];

    if (tooltipCheckArray.length < 2) {
      setTooltipCheckArray([...tooltipCheckArray, props]);
    }
  }
  setInterval(() => {
    console.log('hello');
  }, 10000);
  if (stack && questions)
    return (
      <>
        <div>
          {questions
            ?.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
            .map((question: Prop) => {
              return (
                <>
                  <InterviewQuestionsOrganims
                    key={question._id}
                    id={question._id}
                    level={question.level}
                    title={question.title}
                    order={question.order}
                    language={props.language}
                    page={page}
                    parentCallback={getTooltipCheckCount}
                    tooltipCheckArray={tooltipCheckArray}
                    process={stack[props.language]}
                    code={question.code}
                  />
                </>
              );
            })}
        </div>

        <S.PageWrap>
          <S.PageContainer>
            {page <= 6 && page > 1 ? (
              <S.ImageWrap disabled={page === 1}>
                <Link
                  href={{
                    pathname: `/workbook/${props.language}`,
                    query: { page: page - 1 },
                  }}
                >
                  <Image
                    src={previous}
                    alt="right"
                    onClick={() => {
                      setPage(page - 1);
                    }}
                  ></Image>
                </Link>
              </S.ImageWrap>
            ) : (
              <S.ImageWrap disabled={page === 1}>
                <Image src={previous} alt="right"></Image>
              </S.ImageWrap>
            )}
            {pageNum.map((num, idx: number) => {
              return (
                <Link
                  key={idx + 1 + 'link'}
                  href={{
                    pathname: `/workbook/${props.language}`,
                    query: { page: num },
                  }}
                >
                  <S.PageButton
                    key={idx + 1 + 'btn'}
                    onClick={e => {
                      setPage(Number(num));
                    }}
                    page={page}
                    num={num}
                  >
                    {num}
                  </S.PageButton>
                </Link>
              );
            })}
            {page < 6 && page >= 1 ? (
              <S.ImageWrap disabled={page === 6}>
                <Link
                  href={{
                    pathname: `/workbook/${props.language}`,
                    query: { page: page + 1 },
                  }}
                >
                  <Image
                    src={next}
                    alt="right"
                    onClick={() => {
                      setPage(page + 1);
                    }}
                  ></Image>
                </Link>
              </S.ImageWrap>
            ) : (
              <S.ImageWrap>
                <Image src={next} alt="right"></Image>
              </S.ImageWrap>
            )}
          </S.PageContainer>
        </S.PageWrap>
      </>
    );
};

export default PracticeWorkBookBodyOrganisms;
