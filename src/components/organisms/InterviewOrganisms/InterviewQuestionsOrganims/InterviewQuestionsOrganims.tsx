import react, { useEffect, useState, useRef } from 'react';
import * as S from './InterviewQuestionsOrganims.style';
import { baseURL } from '../../../../../src/http/url';

import { userInfo } from '../../../../http/userInfo';
import instance from '../../../../http/axios';
import axios from 'axios';
import SocketIOClient from 'socket.io-client';
import { socket } from '../../PracticeWorkBookOrganisms/PracticeWorkBookBodyOrganisms/PracticeWorkBookBodyOrganisms';

import tooltip from '../../../../../public/images/item/tooltip.png';
import Image from 'next/image';

import Link from 'next/link';
import { useRouter } from 'next/router';

import toast, { Toaster } from 'react-hot-toast';

import { EditorView, basicSetup } from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorState, Compartment } from '@codemirror/state';
import { htmlLanguage, html } from '@codemirror/lang-html';
import { language as mirrorlanguage } from '@codemirror/language';
import NPSMainOrganisms from '../../NPSOrganisms/NPSMainOrganisms';

type Prop = {
  id: number | any;
  level: string;
  title: string;
  order: number;
  language: string;
  page: number;
  parentCallback: (childData: number) => void;
  tooltipCheckArray: Array<number>;
  process: number;
  code: any;
};

const InterviewQuestionsOrganims = (question: Prop) => {
  const [count, setCount] = useState(0);
  const [contents, setContents] = useState('');
  const [answers, setAnswers] = useState([] as any);

  const [submitCheck, setSubmitCheck] = useState(false);
  const [AnswerCheck, SetAnswerCheck] = useState(0);
  const [tooltipCheck, setTooltipCheck] = useState<number>();

  // const [tooltipCheckCount, setTooltipCheckCount] = useState<number>(0);

  const [checkCount, setCheckCount] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>(false);
  const [firstsubmit, setFirstsubmit] = useState<boolean>(false);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    // console.log('modalOpen');
  };
  const closeModal = () => {
    setModalOpen(false);
    // console.log('modalClose');
  };

  const router = useRouter();

  const { practiceId, language } = router.query;

  // console.log('code', code);

  useEffect((): any => {
    const fetchAnswers = async () => {
      const result = await instance.get(
        `${baseURL}/practice/questions?category=${question.language}&userId=${userInfo._id}`,
        // `https://testapi.mockterview.shop/practice/questions?category=${question.language}&userId=6386e2d20f83183d87351c18`,
      );

      setAnswers(result.data);
      setCount(result.data[question.order - 1]?.answers.description?.length);

      // 최초 제출 유무 판단
      if (result.data[question.order - 1]?.answers) {
        SetAnswerCheck(1);
      }
      // if (result.data[question.order - 1]?.answers.description) {
      //   SetAnswerCheck(1);
      // }
    };
    fetchAnswers();
  }, []);

  // console.log('AnswerCheck', AnswerCheck);

  const SuccessNotify = () =>
    toast.success('답변은 자동으로 저장되니 안심하셔도 됩니다!');
  // console.log('process', question.process);

  if (answers.length === 50)
    return (
      <>
        <S.Modal>
          <NPSMainOrganisms modalOpen={modalOpen}></NPSMainOrganisms>
        </S.Modal>
        <S.wrap key={question.id}>
          <S.level>{question.level}</S.level>
          <S.TitleWrap>
            {question.order}. {question.title}
          </S.TitleWrap>
          <S.Code id="editor"></S.Code>
          <S.answer
            // placeholder="답안을 입력하세요. (50자 이상 입력해 주세요.)"
            placeholder="답안을 50자 이상 입력해주세요."
            defaultValue={answers[question.order - 1]?.answers.description}
            maxLength={500}
            // defaultValue={contents}
            onChange={e => {
              setCount(e.target.value.length);
              // setContents(e.target.value);
              // setContents(e.target.value);
              setTooltipCheck(question.order);
              question.parentCallback(question.order);
              // question.parentCallback(tooltipCheck);

              if (e.target.value.length > 50 || AnswerCheck === 1) {
                socket.emit('submit', {
                  practiceId: question.id,
                  author: userInfo._id,
                  name: userInfo.name,
                  category: question.language,
                  description: e.target.value,
                }),
                  socket.on('submit', (data: any) => {
                    // console.log('data', data.answeredCount);
                    // nps 띄우기
                    // data.answeredCount -> 현재 완료한 문제

                    if (data.answeredCount === null) {
                      openModal();
                      console.log('modalOpen');
                    }
                    // 모의고사 풀러가기 모달
                    // if (data.answeredCount === 20) {
                    //   openModal();
                    // }
                  });
              }
            }}
          ></S.answer>
          <S.counterbox>
            <S.counter>{count || 0}/ 500 자</S.counter>
            {count > 50 || AnswerCheck === 1 ? (
              <S.OthersAnswers>
                <Link
                  href={{
                    pathname: `/workbook/others`,
                    query: {
                      category: question.language,
                      page: question.page,
                      practiceId: question.id,
                    },
                  }}
                >
                  <S.OtherAnswerBtn>답안비교</S.OtherAnswerBtn>
                </Link>
              </S.OthersAnswers>
            ) : (
              <S.submit>답안비교</S.submit>
            )}
          </S.counterbox>
        </S.wrap>

        {/* <Toaster
          toastOptions={{
            className: '',
            style: {
              boxShadow: 'None',
              marginTop: '-8px',
            },
          }}
          position="top-right"
        /> */}
      </>
    );
};

export default InterviewQuestionsOrganims;
