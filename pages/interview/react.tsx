import Image from 'next/image';
import react, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import styled from '@emotion/styled';
import mic from '../../public/images/item/mic.png';
import micOff from '../../public/images/item/micOff.png';
import { useS3Upload } from 'next-s3-upload';
import Link from 'next/link';
import { userInfo } from '../../src/http/userInfo';
import { useRouter } from 'next/router';
import instance from '../../src/http/axios';
import { baseURL } from '../../src/http/url';

export default function Mockterview() {
  const router = useRouter();
  const { category, round } = router.query;
  const [mediaRecorder, setMediaRecoder] = useState<MediaRecorder>();
  const [media, setMedia] = useState<Array<MediaRecorder>>();
  const [recordedChunks, setRecordedChunks] = useState<Array<Blob>>([]);
  let recordedMediaURL = '';
  const audioRef = useRef<HTMLAudioElement>(null);

  let [audioUrl, setAudioUrl] = useState<string>();
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  const [questions, setQuestions] =
    // useState<Array<{ practiceId: string; questionTitle: string }>>([]);
    // useState<Object<{interviewId: Number, score: Number, questions{practiceId: string; questionTitle: string}>>}>>();
    useState<{
      interviewId: string;
      score: Number;
      questions: Array<{ practiceId: string; questionTitle: string }>;
    }>();
  const [count, setCount] = useState(0);

  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  // const [countdownControl, setCountdownControl] = useState(3);

  const [user, setUser] = useState('');
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  let questionsUpdated;

  async function fetchContents(url: string, practiceId: string) {
    // console.log('userInfo', userInfo._id);
    // console.log('practiceId', questions[questionIndex]?.practiceId);
    // console.log('audioUrl', url);

    const result = await instance
      .patch(
        `${baseURL}/interviews/answers/submit`,

        {
          interviewId: `${questions.interviewId}`,
          practiceId: `${practiceId}`,
          // practiceId: `${questions[questionIndex].practiceId}`,
          audioUrl: `${url}`,
        },
      )
      .then(response => {
      });
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countdown);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  useEffect(() => {
    if (userInfo) {
      const fetchData = async () => {
        const result = await instance.get(
          `${baseURL}/interviews/questions?userId=${userInfo._id}&category=react`,
        );
        setQuestions(result.data);
      };
      fetchData();
    }
    // console.log('questions in', questions);
  }, [userInfo]);

  let handleFileChange = async (recordFile: File) => {
    let { url } = await uploadToS3(recordFile);
    // console.log('amazon url address', url);
    // console.log('execute handlefilechanged');
    // console.log(questions);
    // console.log(questionIndex);
    // setAudioUrl(url);
    // console.log('audioUrl', audioUrl);

    fetchContents(url, questions.questions[questionIndex].practiceId);
  };

  const startRecording = () => {
    // console.log('1', recordedChunks);
    let mediaData: BlobPart[] = [];

    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = e => {
        // setRecordedChunks([e.data]);
        if (e.data && e.data.size > 0) {
          mediaData.push(e.data);
          // console.log(e.data);

          const fileName = uuidv4();
          const recordFile = new File([e.data], fileName + '.mp3', {
            type: 'video/webm',
          });
          handleFileChange(recordFile);
          // console.log('recordFile', recordFile);
          // console.log('filename', fileName);
        }
      };

      mediaRecorder.onstop = function () {
        const blob = new Blob(mediaData, { type: 'video/webm' });
        recordedMediaURL = URL.createObjectURL(blob);

        // console.log('blob', blob);
        // console.log('recordedMediaURL', recordedMediaURL);
        // console.log('audioUrl', audioUrl);
      };

      mediaRecorder.start();

      setMediaRecoder(mediaRecorder);
    });
  };
  const stopRecording = () => {
    // console.log('3', recordedChunks);
    setRecordedChunks([]);
    mediaRecorder.stop();
  };

  useEffect(() => {
    startRecording();
    setMinutes(1);
    setSeconds(0);
  }, [questions]);

  useEffect(() => {
    startRecording();
    setMinutes(1);
    setSeconds(0);
  }, [questionIndex]);

  // if (minutes === 0 && seconds === 0) {
  //   setQuestionIndex(questionIndex + 1), stopRecording();
  // }

  // console.log('question', questions[questionIndex]);

  // console.log(
  //   'questions[questionIndex]?.questionTitle',
  //   questions[questionIndex]?.questionTitle,
  // );

  if (true) {
    return (
      <>
        <Wrap>
          <MockterviewWrapper>
            <QuestionNum>문제 {questionIndex + 1}번</QuestionNum>
            <MockterviewQuestion>
              {questions?.questions[questionIndex]?.questionTitle}
            </MockterviewQuestion>

            <>
              <RecordImgWrapper>
                <Image src={mic} alt="record" width={70} height={70} />
              </RecordImgWrapper>
              <CountDown>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </CountDown>
            </>

            <FileInput onChange={handleFileChange} />
            {questionIndex === 9 ? (
              <Link href="/interview/wait">
                <NextButton
                  onClick={() => {
                    stopRecording();
                    router.push(
                      {
                        pathname: '/interview/result/score',
                        query: {
                          interviewId: questions.interviewId,
                          practiceId:
                            questions.questions[questionIndex].practiceId,
                          category: category,
                          round: round,
                        },
                      },
                      '/interview/result',
                    );
                  }}
                >
                  제출
                </NextButton>
              </Link>
            ) : (
              <NextButton
                onClick={() => {
                  setQuestionIndex(questionIndex + 1), stopRecording();
                }}
              >
                다음 문제
              </NextButton>
            )}
          </MockterviewWrapper>
        </Wrap>
      </>
    );
  }
}
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MockterviewWrapper = styled.div`
  width: 800px;

  font-family: Pretendard500;

  text-align: center;

  margin-top: 12rem;
`;

const MockterviewQuestion = styled.div`
  height: 67px;
  font-weight: 700;
  font-size: 28px;

  margin-top: 3rem;
`;

const RecordImgWrapper = styled.div`
  margin-top: 4rem;
`;

const CountDown = styled.div`
  margin-top: 2rem;
  font-size: 25px;
`;
const CountDownOff = styled.div`
  margin-top: 2rem;
  font-size: 25px;
  color: #dad7dd;
`;
const UnNextButton = styled.button`
  margin-top: 6rem;
  width: 250px;
  height: 48px;

  background: #c7daf2;
  color: #ffffff;
  border: none;
  border-radius: 10px;

  font-weight: 500;
  font-size: 14px;
`;

const NextButton = styled.button`
  margin-top: 6rem;
  width: 250px;
  height: 48px;

  background: #177dff;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  transition: transform 3ms ease-in;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
`;

const QuestionNum = styled.div`
  color: #8e8e8e;
  font-weight: 700;
  font-size: 25px;
`;
