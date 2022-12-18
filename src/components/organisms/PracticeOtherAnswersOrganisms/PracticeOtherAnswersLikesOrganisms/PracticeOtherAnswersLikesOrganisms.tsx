import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { baseURL } from '../../../../../src/http/url';

import * as S from './PracticeOtherAnswersLikesOrganisms.style';
import { userInfo } from '../../../../http/userInfo';

import instance from '../../../../http/axios';

const PracticeOtherAnswersLikesOrganisms = (props: {
  author: string;
  count: number;
  likeCheck: boolean;
  filter: string;

}) => {

  const [count, setCount] = useState(0);
  const [contents, setContents] = useState('');
  const [likesCount, setLikesCount] = useState(props.count);
  const [countCheck, setCountCheck] = useState(false);
  const [handleMouseOver, setHandleMouseOver] = useState(false);
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState<{
    practice: String;
    title: String;
    answerCount: Number;
    order: Number;
    answers: Array<{
      author: string;
      name: string;
      description: string;
      likes: Array<{ userId: string }>;
      createdAt: Date;
      updatedAt: Date;
      likecheck: boolean;
      audioUrl: string;
    }>;
    myAnswer: {
      author: string;
      name: string;
      description: string;
      createdAt: Date;
      updatedAt: Date;
      likecheck: boolean;
      audioUrl: string;
    };
  }>();

  const [questions, setQuestions] = useState<{
    interviewId: Number;
    score: Number;
    questions: Array<{ practiceId: string; questionTitle: string }>;
  }>();

  const router = useRouter();


  useEffect((): any => {
    if (!router.isReady) return;
    const fetchAnswers = async () => {
      const result = await instance.get(
        `${baseURL}/practice/answers/other?practiceId=${router.query.practiceId}&userId=${userInfo._id}&sort=${props.filter}`,
      );
      setAnswers(result.data);
      setCount(result.data.myAnswer.description?.length);

    };
    setCountCheck(false);
    fetchAnswers();
    setLikesCount(props.count)

  }, [router.isReady,props.filter,props.count]);

  const fetchLikes = async (id: string) => {
    const result = await instance.patch(
      `${baseURL}/practice/answers/like`,
      {
        practiceId: router.query.practiceId,
        myUserId: userInfo._id,
        userId: { id },
      },
    );
    // console.log('id',id)
    // console.log('fetchLikes');
  };
  // console.log("likecount", props.count,likesCount)

  if (answers) {
    return (
      <>
        <S.Info>
          {props.likeCheck === false && countCheck === false ? (
            <S.LikeInfo
              onClick={() => {
                // console.log('like check', props.likeCheck);
                fetchLikes(props.author);
                setCountCheck(true);
                setLikesCount(likesCount + 1);
              }}
              onMouseOver={() => {
                setHandleMouseOver(true);
              }}
              onMouseOut={() => {
                setHandleMouseOver(false);
              }}
            >
              <>👍 추천 {likesCount}</>
              <>{/* 👍 추천 {answers.likes.length} */}</>
            </S.LikeInfo>
          ) : props.likeCheck === true && countCheck === false ? (
            <S.LikedInfo
              onClick={() => {
                fetchLikes(props.author);
                setCountCheck(true);
                setLikesCount(likesCount - 1);
              }}
              onMouseOver={() => {
                setHandleMouseOver(true);
              }}
              onMouseOut={() => {
                setHandleMouseOver(false);
              }}
            >
              <>👍 추천 {likesCount}</>
              {/* 👍 추천 {answers.likes.length} */}
            </S.LikedInfo>
          ) : props.likeCheck === false && countCheck === true ? (
            <S.LikedInfo
              onClick={() => {
                fetchLikes(props.author);
                setCountCheck(false);
                setLikesCount(likesCount - 1);
              }}
              onMouseOver={() => {
                setHandleMouseOver(true);
              }}
              onMouseOut={() => {
                setHandleMouseOver(false);
              }}
            >
              <>👍 추천 {likesCount}</>
              {/* 👍 추천 {answers.likes.length} */}
            </S.LikedInfo>
          ) : (
            <S.LikeInfo
              onClick={() => {
                fetchLikes(props.author);
                setCountCheck(false);
                setLikesCount(likesCount + 1);
              }}
              onMouseOver={() => {
                setHandleMouseOver(true);
              }}
              onMouseOut={() => {
                setHandleMouseOver(false);
              }}
            >
              <>👍 추천 {likesCount}</>
              {/* 👍 추천 {answers.likes.length} */}
            </S.LikeInfo>
          )}
        </S.Info>
      </>
    );
  }
};

export default PracticeOtherAnswersLikesOrganisms;
