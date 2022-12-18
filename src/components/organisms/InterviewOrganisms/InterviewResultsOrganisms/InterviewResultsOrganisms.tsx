import React, { useEffect, useCallback, useState } from 'react';
import { userInfo } from '../../../../http/userInfo';
import instance from '../../../../http/axios';
import { baseURL } from '../../../../http/url';
import { useRouter } from 'next/router';
// import InterviewWrongAnswersSoonOrganism from '../InterviewWrongAnswersSoonOrganism';

import Image from 'next/image';
import * as S from './InterviewResultsOrganisms.style';
import react from '/public/images/category/react-logo.svg';
import node from '/public/images/category/node-logo.svg';
import spring from '/public/images/category/spring-logo.svg';
import line from '/public/images/category/line.svg';
import arrow from '/public/images/category/arrowright.svg';
import previous from 'public/images/icon/leftplay.svg'
import next from '/public/images/icon/rightplay.svg'
import Link from 'next/link'

const InterviewPageResultsOrganisms = () => {
  const [userId, setUserId] = useState('');
  const router = useRouter();
  const [rounds, setRounds] = useState([]);
  const [reports, setReports] = useState([]);
  const [isData, setIsData] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1)
  const pageNum: number[] = [1]
  const limit = 8;
  const [total, setTotal] = useState(0)
  const offset = (page-1)*limit;
  // let response = [t -
  //   {
  //       rounds : [
  //           {
  //               category : 'node',
  //               round : 1,
  //               completed: true
  //           },
  //       ],
  //       reports : [
  //           {
  //               category : 'react',
  //               interviews : [
  //                   {
  //                       interviewId : 1,
  //                       round : 1,
  //                       scored : 10,
  //                       createdAt : '2022.11.29',
  //                   },
  //                   {
  //                     interviewId : 2,
  //                     round : 2,
  //                     scored : 1,
  //                     createdAt : '2022.11.30',
  //                 },
  //                 {
  //                   interviewId : 3,
  //                   round : 3,
  //                   scored : 6,
  //                   createdAt : '2022.12.01',
  //               },

  //               ],
  //           },
  //           {
  //             category : 'node',
  //             interviews : [
  //                 {
  //                     interviewId : 1,
  //                     round : 1,
  //                     scored : 9,
  //                     createdAt : '2022.11.29',
  //                 },
  //                 {
  //                   interviewId : 2,
  //                   round : 2,
  //                   scored : 8,
  //                   createdAt : '2022.11.30',
  //               },

  //             ],
  //         },
  //       ],
  //     },
  //   ];

  useEffect(() => {
    if (userInfo) {
      setUserId(userInfo._id);
    }
  }, []);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const getData = async () => {
      const response = await instance
        .get(`${baseURL}/interviews/categories?userId=${userId}`)
        .then(response => {
          if(response.data.rounds){
          setRounds(response.data.rounds);
          setReports(response.data.reports);
          setTotal(response.data.reports.interviews?.length)
          setPageNum(response.data.reports.interviews?.length)
          if (
            response.data.reports[0].interviews.length == 0 &&
            response.data.reports[1].interviews.length == 0 &&
            response.data.reports[2].interviews.length == 0
          ) {
            setIsData(false);
          }
        }}
        );
    };
    getData();
  }, [userId]);

function setPageNum(k:number){
  for(let i =2 ; i <=k ; i++){
    pageNum.push(i)
  }
  // console.log(pageNum)
}
  if (!isData) {
    return (
      <S.Wrap>
        <S.HeaderCenter>
          <S.TitleCenter>나의 모의면접</S.TitleCenter>
          <S.Text>아직 시작한 모의면접이 없어요!</S.Text>
        </S.HeaderCenter>
      </S.Wrap>
    );
  }

  return (
    <>
      <S.Wrap>
        <>
          <S.Header>
            <S.Title>나의 모의면접</S.Title>
          </S.Header>

          {reports?.map((report, idx) => {
            if (report.interviews.length) {
              return (
                <>
                  <S.Body>
                    <S.CategoryWrap>
                      <S.CategoryContainer>
                        <S.CategoryLogo>
                          <Image
                            src={`/images/category/${report.category}-logo.svg`}
                            width={60}
                            height={60}
                            alt="react"
                          />
                        </S.CategoryLogo>
                        <S.CategoryDesc>
                          <S.CategoryDescText>
                            
                          {report.category === 'react'
            ? 'React'
            : report.category === 'node'
            ? 'Node.js'
            : report.category === 'spring'
            ? 'Spring'
            : null} 문제집
                          </S.CategoryDescText>
                          <S.CategoryDescSubText>
                            Frontend Engineer
                          </S.CategoryDescSubText>
                        </S.CategoryDesc>
                      </S.CategoryContainer>
                    <S.Line></S.Line>
                      {/* <Image
                        key={idx + 'Image'}
                        src={line}
                        alt="react"
                        height={80}
                      /> */}
                      <S.CategoryContainer
                        key={idx + 'CategoryContainer2'}
                        // 오답노트 준비중 화면으로 redirect하기 위해 잠시 주석처리
                        onClick={() => {
                          router.push(
                            {
                              pathname: '/interview/result/wrong',
                              query: {
                                category: report.category,
                                userId: userInfo._id
                              },
                            },
                            '/interview/review',
                          );
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        <S.CategoryDescSubText
                          key={idx + 'CategoryDescSubText2'}
                        >
                          {' '}
                          자주 틀리는 문제를 모아보는
                        </S.CategoryDescSubText>
                        <S.CategoryDescText
                          // key={idx + 'CategoryDescText2'}
                          // onClick={() => {
                          //   router.push('/interview/result/soon');
                          // }}
                          // style={{ cursor: 'pointer' }}
                        >
                          오답노트
                        </S.CategoryDescText>

                        <S.Icon key={idx + 'Icon'}>
                          <Image src={arrow} alt="arrow" />
                        </S.Icon>
                      </S.CategoryContainer>
                    </S.CategoryWrap>

                    <S.Table>
                      <S.Th>
                        <S.Tr>회차</S.Tr>
                        <S.Tr>응시 날짜</S.Tr>
                        <S.Tr>총점</S.Tr>
                        <S.Tr>결과 보기</S.Tr>
                      </S.Th>

                      {
                        // report.interviews? <S.Text>아직 시작한 모의면접이 없어요!</S.Text>:
                        report.interviews.slice((page-1)*limit, (page-1)*limit+limit).map(
                          (
                            interview: {
                              round: string;
                              createdAt: string;
                              score: string;
                              interviewId: any;
                            },
                            id: string,
                          ) => {
                            return (
                              <S.Tb key={id + 'tb'}>
                                <S.Tr>{interview.round} 회차</S.Tr>
                                <S.Tr>{interview.createdAt}</S.Tr>
                                <S.Tr>{interview.score}/10</S.Tr>
                                <S.Tr>
                                  <S.Button
                                    onClick={() => {
                                      router.push(
                                        {
                                          pathname: '/interview/result/result',
                                          query: {
                                            interviewId: interview.interviewId,
                                            category: report.category,
                                            round: interview.round,
                                          },
                                        },
                                        '/interview/result',
                                      );
                                    }}
                                  >
                                    {interview.round}회차 결과 보기
                                  </S.Button>
                                </S.Tr>
                              </S.Tb>
                            );
                          },
                        )
                      }
                    </S.Table>

            {/* {report.interviews.length>limit &&    
                    <S.PageWrap>
                        <S.PageContainer>
                        {page <= Math.ceil(total/limit) && page>1?
                        <S.ImageWrap disabled={page === 1}> 
                        <Link  href={{pathname: `/interview`, query: {page: page-1},}}>
                        <Image src={previous} alt='right'  onClick={() => {setPage(page -1)}}></Image>
                        </Link>
                        </S.ImageWrap>
                        : 
                        <S.ImageWrap disabled={page === 1}> 
                        <Image src={previous} alt='right'  ></Image>
                        </S.ImageWrap>
                        }
                        {pageNum.map((num,idx:number)=> {
                          return (
                            <Link key={idx+1+'link'} href={{pathname: `/interview`, query: {page: num},}}>
                            <S.PageButton key={idx+1+'btn'} onClick={e => {setPage(Number(num))}} page={page} num={num} >{num}</S.PageButton>
                            </Link>
                          )
                        })}
                        {page < Math.ceil(total/limit) && page>=1?
                        <S.ImageWrap disabled={page === 6} > 
                        <Link  href={{pathname: `/interview`, query: {page: page+1},}}>
                        <Image src={next} alt='right'  onClick={() => {setPage(page +1)}} ></Image>
                        </Link>
                        </S.ImageWrap>
                         : 
                        <S.ImageWrap > 
                        <Image src={next} alt='right'  ></Image>
                        </S.ImageWrap>
                        } 
                          </S.PageContainer>
                      </S.PageWrap>} */}
                  </S.Body>
                </>
              );
            }
          })}
        </>
      </S.Wrap>
    </>
  );
};

export default InterviewPageResultsOrganisms;
