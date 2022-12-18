// import usestate
import React, { useState, useEffect, useCallback, useMemo } from 'react';

import * as S from './InterviewAnswersScoreOrganisms.style';
import instance from '../../../../http/axios';
import { baseURL } from '../../../../http/url';
import Lottie from 'react-lottie';

import correctLottie from '../../../../lotties/correctLottie.json';
import checkLottie from '../../../../lotties/checklottie.json';
import correctLottie2 from '../../../../lotties/correctLottie2.json'
import checkLottie2 from '../../../../lotties/checkLottie2.json'

import InterviewAnswersHeaderOrganism from '../InterviewAnswersResultOrganism/InterviewAnswersHeaderOrganism';

import InterviewAnswersScoreOrganismModal from './InterviewAnswersScoreOrganismModal';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { useAtom } from 'jotai';
import { userInfo } from '../../../../http/userInfo'
import { useRouter } from 'next/router';
import InterviewHeader from '../../Header/InterviewHeader'
import { isLogin } from '../../../../http/userInfo'
import InterviewScoreHeader from '../../Header/InterviewScoreHeader'



function InterviewAnswersScoreOrganism() {
  const router = useRouter();
  const { isReady, query } = useRouter()

  useEffect(()=> {

    if(!isLogin){
      window.location.href = '/login'
    }
  },[])  // const results: any = {
  //   interviewId: 1,
  //   questions: [
  //     {
  //       practiceId: 1,
  //       questionTitle: '문제1',
  //       answer:
  //         'Lorem ipsum dolor sit amet. Aut voluptas sint cum velit dolorem et distinctio nihil qui voluptatem natus qui assumenda perspiciatis aut galisum magnam quo obcaecati doloremque. 33 rerum facilis sed illum omnis ut sapiente nihil et perspiciatis corporis qui dolor obcaecati sed voluptatibus rerum. Est asperiores galisum et vitae nihil et rerum consequatur aut unde dignissimos sed quaerat quia.Sit voluptas voluptatem ea aliquid necessitatibus non ipsam voluptas. Est nobis illo sit assumenda temporibus qui tempore aliquam. Eos modi excepturi At optio omnis et repudiandae voluptatum.Ut eligendi velit sit asperiores similique et nostrum inventore eos dolorem magnam hic repudiandae similique At dolorem dignissimos. Et laboriosam internos vel fugit nisi et nesciunt rerum sit atque cupiditate sit facilis nostrum ut voluptatem harum qui recusandae iure. Vel animi commodi eum atque sunt vel autem quasi aut galisum sint. Rem repellat dolor sed maiores necessitatibus et quis quidem.',
  //       audioUrl:
  //         'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  //       correct: null,
  //     },
  //     {
  //       practiceId: 2,
  //       questionTitle: '문제2',
  //       answer:
  //         '정식 명칭은 가나 공화국(Republic of Ghana)이다. 동쪽은 토고, 서쪽은 코트디부아르, 북쪽은 부르키나파소와 국경을 접하며 남쪽은 기니만에 면해 있다. 독립 이후 수차례 쿠데타로 정권이 바뀌었고 2000년에 치러진 선거에서 1981년부터 쿠데타로 장기 집권한 제리 존 롤링스 정권이 패배하여 독립 이후 최초로 민선 정권에서 민선 정권으로의 교체가 이루어졌다. 영국 연방의 구성국으로 아프리카 통일기구(OAU)와 국제연합(UN)에 가입해 있다. 행정구역은 10개 구(region)로 되어 있다.',
  //       audioUrl:
  //         'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  //       correct: null,
  //     },
  //     {
  //       practiceId: 3,
  //       questionTitle: '문제3',
  //       answer: '문제3 답변입니다',
  //       audioUrl:
  //         'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  //       correct: null,
  //     },
  //     {
  //       practiceId: 4,
  //       questionTitle: '문제4',
  //       answer: '문제4 답변입니다',
  //       audioUrl: 'audio4.url',
  //       correct: null,
  //     },
  //     {
  //       practiceId: 5,
  //       questionTitle: '문제5',
  //       answer: '문제5 답변입니다',
  //       audioUrl: 'audio5.url',
  //       correct: null,
  //     },
  //     {
  //       practiceId: 6,
  //       questionTitle: '문제6',
  //       answer: '문제6 답변입니다',
  //       audioUrl: 'audio6.url',
  //       correct: null,
  //     },
  //   ],
  // };

  /////////// mock data 

 

  const circletOptions = {
    loop: false,
    autoplay: true,
    animationData: correctLottie2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const checkOptions = {
    loop: false,
    autoplay: true,
    animationData: checkLottie2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [data, setData] = useState([]);
  const [num, setNum] = useState(0);
  const [id, setId] = useState(1);
  // const state = ([{}])
  const [state, setState] = useState([{}]);
  const [clicked, setClicked] = useState([{}]);
  const [modal, showModal] = useState(false);
  const [length, setDataLength] = useState(0);
  const [name, setName] = useState('');
  
  //   const setState = useMemoOne(() => ({
  //     state: ([{}])
  // }), [state])

  // useEffect(()=>{
  // },[modal])
  // var GifPlayer = require('react-gif-player');


  useEffect(() => {
    if (userInfo) {
      const name = userInfo.name;
      if (name != null && name != undefined) {
        setName(name);
        return;
      }
    }
  }, [userInfo]);

  useEffect(() => {
  
    if(!userInfo){
      return
    }
    setTimeout(()=> (finishInterview()),5000)

  async function finishInterview() {
    await instance
    .get(`${baseURL}/interviews/result?interviewId=${query.interviewId}`)
    . then (response => {
      setNum(response.data.practiceId);
      setDataLength(response.data.questions.length);
      setData(response.data.questions);
    })
  
  }


      finishInterview()

    // const getData = async() => {
    //  await instance
    // .get(`${baseURL}/interviews/result?interviewId=${query.interviewId}`)
    // . then (response => {
    //   setNum(response.data.practiceId);
    //   setDataLength(response.data.questions.length);
    //   setData(response.data.questions);
    //     setData(response.data.questions);
    // })

  }, [userInfo])



//   useEffect(() => {
//     const getData = async() => {
//      await instance
//     .get(`${baseURL}/interviews/result?interviewId=${query.interviewId}`)
//     . then (response => {
//       setNum(response.data.practiceId);
//       setDataLength(response.data.questions.length);
//       setData(response.data.questions);
//         // setData(response.data.questions);
//     })
// }
// getData()
//   }, [isReady])




  const setCorrect = useCallback(
    (id: {}) => {
      setClicked([...clicked, id]);
      setState([...state, id]);
    },
    [state],
  );

  const setWrong = useCallback(
    (id: {}) => {
      setClicked([...clicked, id]);
      setState(state.filter(el => el !== id));
    },
    [state],
  );

  //api 논의 필요

  const sendCorrectionResult = useCallback(
    async (resultNum: string, practiceNum: string, e: any) => {
      let correction:boolean
      if(e.target.id == "true"){
        correction = true
      } else {
        correction = false
      }
      // const correction = e.target.id;
      const practiceId = practiceNum;
      const correctResult = {
        interviewId: query.interviewId,
        practiceId: practiceId,
        correct: correction,
      };
      const sendCorrect = await instance
        .patch(`${baseURL}/interviews/answers/score`,correctResult)
        .then(response => {
          if (response.status == 200 || response.status == 201) {
            return;
          }
        });
    },
    [],
  );


    async function handleSubmit() {
      let result = true;

      data.forEach(data=> {
        if(!clicked.includes(data.practiceId))
        result = false;
      })
      if(result == true){
        submitResult()   
        return 
      }
      showModal(true)

    }


    async function submitResult() {
      const result = await instance.patch(
        `${baseURL}/interviews/answers/score/submit`,
        {
          interviewId: query.interviewId,
        },)
        .then(response => {
          if (response.status == 200 || response.status == 201) {
            window.location.href = '/interview'
            return
          }
        });
    }

    // if(modal){
    //   return (        <InterviewAnswersScoreOrganismModal showModal={showModal} />
    //   )
    // }

  return (
    <>        

          <S.Wrap>


            <S.Text>
              <S.Title>
              {query.category === 'react'
            ? 'React'
            : query.category === 'node'
            ? 'Node.js'
            : query.category === 'spring'
            ? 'Spring'
            : null} 모의면접 {query.round}회차 결과</S.Title>
              <S.Line>___</S.Line>
              <S.Description>
                {name} 님이 제출하신 음성과 작성하신 답안을 대조해보실
                수 있습니다.
              </S.Description>
              <S.Description>
                각 문항마다 O/X 채점을 해두세요. 틀린문제는 오답노트에 자동
                저장됩니다.
              </S.Description>
            </S.Text>
          </S.Wrap>
          <S.QuestionContainer>
          {/* data.map((data: any,idx)  */}
            {data.map((data: any, idx:number) => {
            return (
                <S.QuestionWrap key={data['practiceId']}>
                  <S.QuestionNum>{idx+1}. {data['questionTitle']}</S.QuestionNum>

                  {clicked.includes(data['practiceId']) == true ? (
                    state.includes(data['practiceId']) == true ? (
                      // <S.QuestionNumWrap>
                      //             <Image src={correct} alt="correct"></Image>
                      //         </S.QuestionNumWrap>

                      <S.LottiCorrectWrapper>
                        <Lottie
                          options={circletOptions}
                          height={100}
                          width={100}
                        />
                      </S.LottiCorrectWrapper>
                    ) : (
                      //     <S.QuestionNumWrap>
                      //     <Image src={wrong} alt="wrong"></Image>
                      // </S.QuestionNumWrap>
                      <S.LottiWrongWrapper>
                        <Lottie
                          options={checkOptions}
                          height={100}
                          width={100}
                        />
                      </S.LottiWrongWrapper>
                    )
                  ) : (
                    ''
                  )}

                  <audio
                    className="audio-player"
                    // controls="true"
                    controls={true}
                    src={data['audioUrl']}
                  ></audio>
                  {/* // src="https://file-examples.com/storage/feb4cfce85637d3e69df67e/2017/11/file_example_MP3_5MG.mp3"> */}
                  {/* <S.InputContainer> */}
                  <S.InputContainer>
                    <S.Input>{data['answer']} </S.Input>
                  </S.InputContainer>

                  {clicked.includes(data['practiceId']) == true ? (
                    state.includes(data['practiceId']) == true ? (
                      <S.ButtonContainer>
                        <S.ButtonWrap>
                          <S.CorrectButtonBlue
                            id="true"
                            onClick={e => {
                              setCorrect(data['practiceId']);
                              sendCorrectionResult(
                                String(num),
                                data['practiceId'],
                                e,
                              );
                            }}
                          >
                            O
                          </S.CorrectButtonBlue>
                          <S.WrongButton
                            id="false"
                            onClick={e => {
                              setWrong(data['practiceId']);
                              sendCorrectionResult(
                                String(num),
                                data['practiceId'],
                                e,
                              );
                            }}
                          >
                            X
                          </S.WrongButton>
                        </S.ButtonWrap>
                      </S.ButtonContainer>
                    ) : (
                      <S.ButtonContainer>
                        <S.ButtonWrap>
                          <S.CorrectButton
                            id="true"
                            onClick={e => {
                              setCorrect(data['practiceId']);
                              sendCorrectionResult(
                                String(num),
                                data['practiceId'],
                                e,
                              );
                            }}
                          >
                            O
                          </S.CorrectButton>
                          <S.WrongButtonBlue
                            id="false"
                            onClick={e => {
                              setWrong(data['practiceId']);
                              sendCorrectionResult(
                                String(num),
                                data['practiceId'],
                                e,
                              );
                            }}
                          >
                            X
                          </S.WrongButtonBlue>
                        </S.ButtonWrap>
                      </S.ButtonContainer>
                    )
                  ) : (
                    <S.ButtonContainer>
                      <S.ButtonWrap>
                        <S.CorrectButton
                          id="true"
                          onClick={e => {
                            setCorrect(data['practiceId']);
                            sendCorrectionResult(
                              String(num),
                              data['practiceId'],
                              e,
                            );
                          }}
                        >
                          O
                        </S.CorrectButton>
                        <S.WrongButton
                          id="false"
                          onClick={e => {
                            setWrong(data['practiceId']);
                            sendCorrectionResult(
                              String(num),
                              data['practiceId'],
                              e,
                            );
                          }}
                        >
                          X
                        </S.WrongButton>
                      </S.ButtonWrap>
                    </S.ButtonContainer>
                  )}
                </S.QuestionWrap>
              );
            })}
            <S.SubmitButton
              onClick={() => {
                handleSubmit();
              }}
            >
              채점 완료
            </S.SubmitButton>
            {modal &&    <InterviewAnswersScoreOrganismModal showModal={showModal} />}
          </S.QuestionContainer>
          

     
    </>
  );
}

export default InterviewAnswersScoreOrganism;
