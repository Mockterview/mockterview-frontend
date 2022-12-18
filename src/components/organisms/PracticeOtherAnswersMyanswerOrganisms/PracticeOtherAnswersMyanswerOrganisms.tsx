import react, { useEffect, useState } from 'react';
import axios from 'axios';
import { userInfo } from '../../../http/userInfo';
import { useRouter } from 'next/router';

import { baseURL } from '../../../../src/http/url';

import * as S from './PracticeOtherAnswersMyanswerOrganisms.style';
import { socket } from '../PracticeWorkBookOrganisms/PracticeWorkBookBodyOrganisms/PracticeWorkBookBodyOrganisms';

import instance from '../../../http/axios';

export default function PracticeOtherAnswersMyanswerOrganisms() {
  const [count, setCount] = useState(0);
  const [contents, setContents] = useState('');
  const [likesCount, setLikesCount] = useState(0);
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

  const router = useRouter();

  useEffect((): any => {
    if (!router.isReady) return;

    const fetchAnswers = async () => {
      const result = await instance.get(
        `${baseURL}/practice/answers/other?practiceId=${router.query.practiceId}&userId=${userInfo._id}&sort=new`,
      );
      setAnswers(result.data);
      setCount(result.data.myAnswer.description?.length);
    };

    fetchAnswers();
  }, [router.isReady]);

  // console.log('name', name);

  const fetchLikes = async (id: string) => {
    const result = await instance.patch(`${baseURL}/practice/answers/like`, {
      practiceId: router.query.practiceId,
      myUserId: userInfo._id,
      userId: { id },
    });
    setLikesCount(result.data);
    // console.log('서버에 있는 like', result.data);
    // console.log('로컬 개별 like', likesCount);
  };

  // console.log('answers.myAnswer.description', answers);

  if (answers) {
    return (
      <>
        <S.Wrap>
          <S.OtherAwnserWrap>
            <S.answer
              placeholder="답안을 입력하세요"
              defaultValue={answers?.myAnswer?.description}
              maxLength={500}
              onChange={e => {
                setCount(e.target.value.length);
                setContents(e.target.value);
                setContents(e.target.value);
                if (e.target.value.length >= 50) {
                  socket.emit('submit', {
                    practiceId: router.query.practiceId,
                    author: userInfo._id,
                    name: userInfo.name,
                    description: e.target.value,
                    category: router.query.language,
                  });
                }

                // console.log('contents:', contents);
              }}
            ></S.answer>
            <S.counterbox>
              <S.counter>{count || 0}/ 500 자</S.counter>
            </S.counterbox>
          </S.OtherAwnserWrap>
        </S.Wrap>
      </>
    );
  }
}
