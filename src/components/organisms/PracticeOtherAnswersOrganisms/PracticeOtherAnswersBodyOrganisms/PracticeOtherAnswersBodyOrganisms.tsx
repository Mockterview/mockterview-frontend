import react, { useEffect, useState } from 'react';
import axios from 'axios';
import { userInfo } from '../../../../http/userInfo';
import { useRouter } from 'next/router';
import { baseURL } from '../../../../../src/http/url';

import PracticeOtherAnswersLikesOrganisms from '../PracticeOtherAnswersLikesOrganisms';
import * as S from './PracticeOtherAnswersBodyOrganisms.style';
import downArrow from '/public/images/icon/downarrow.svg'
import Image from 'next/image'
import instance from '../../../../http/axios';

const PracticeOtherAnswersBodyOrganisms = (props: any) => {

  const [filter, setFilter] = useState('like');
  const [count, setCount] = useState(0);
  const [contents, setContents] = useState('');
  // const [likecheck, setLikecheck] = useState(false);
  const [countCheck, setCountCheck] = useState(false);
  const [handleMouseOver, setHandleMouseOver] = useState(false);
  const [name, setName] = useState('');
  const [sortChange, setSortChange] = useState(false);
  const [description, setDescription ] = useState('');
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
      likeCheck: boolean;
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

  let maskingFunc = {
    checkNull: function (str: string) {
      if (typeof str == 'undefined' || str == null || str == '') {
        return true;
      } else {
        return false;
      }
    },

    name: function (str: string) {
      let originStr = str;
      let maskingStr;
      let strLength;

      if (this.checkNull(originStr) == true) {
        return originStr;
      }

      strLength = originStr.length;

      if (strLength < 3) {
        maskingStr = originStr.replace(/(?<=.{1})./gi, '*');
      } else {
        maskingStr = originStr.replace(/(?<=.{2})./gi, '*');
      }

      return maskingStr;
    },
  };

  // const fetchAnswersNew = async () => {
  //   const result = await instance.get(
  //     `${baseURL}/practice/answers/other?practiceId=${router.query.practiceId}&userId=${userInfo._id}&sort=new`,
  //   );
  //   setAnswers(result.data);
  //   // console.log('sort new');
  //   // console.log('answers', answers);
  // };

  const router = useRouter();

  useEffect((): any => {
    if (!router.isReady) return;

    const fetchAnswers = async () => {
      const result = await instance.get(
        `${baseURL}/practice/answers/other?practiceId=${router.query.practiceId}&userId=${userInfo._id}&sort=${filter}`,
      );

      setAnswers(result.data);
      // console.log("answers",answers)
      setCount(result.data.myAnswer.description?.length);
    };

    fetchAnswers();
  }, [router.isReady,filter]);

  if (answers) {
    return (
      <>
        <S.OtherWrap>
          <S.Test>
            <S.TitleWrap>
              <S.Title>
                <>
                  {answers.order}. {answers.title}
                </>
              </S.Title>
              <S.AnswerCount>
                <>{answers.answerCount} 개의 답안</>
                {filter=='like'?
                <S.FilterWrap onClick={()=>setFilter('new')}>
                <Image src={downArrow} alt="화살표 이미지"></Image>
              <S.Filter >추천순</S.Filter> 
              </S.FilterWrap>

               :
               <S.FilterWrap onClick={()=>setFilter('like')}>
                <Image src={downArrow} alt="화살표 이미지"></Image>
              <S.Filter >최신순</S.Filter>  
              </S.FilterWrap>
              } 
              </S.AnswerCount>
            </S.TitleWrap>
            {answers?.answers.map((answers, index) => {
              // setDescription(answers.description)
              return (
                <S.OthersWrap key={index}>
                  <S.Info>
                    <S.LikeInfo>
                      <PracticeOtherAnswersLikesOrganisms
                        count={answers.likes.length}
                        author={answers.author}
                        likeCheck={answers.likeCheck}
                        filter ={filter}
                      />
                    </S.LikeInfo> 
                    <S.AnswerInfo>
                      <>
                        {maskingFunc.name(answers.name)}님, {answers.createdAt}
                      </>
                    </S.AnswerInfo>
                  </S.Info>
                  <S.OthersAnswer
                    // readOnly
                  //  defaultValue={answers.description}
                  >{answers.description}</S.OthersAnswer>
                </S.OthersWrap>
              );
            })}
          </S.Test>
        </S.OtherWrap>
      </>
    );
  }
};

export default PracticeOtherAnswersBodyOrganisms;

export const getServerSideProps = async (context: any) => {
  const { practiceId } = context.query;

  const result = await axios.get(
    `${baseURL}/practice/answers/other?practiceId=${practiceId}&userId=${userInfo._id}&sort=like`,
  );

  return {
    props: {
      answers: result.data,
    },
  };
};
