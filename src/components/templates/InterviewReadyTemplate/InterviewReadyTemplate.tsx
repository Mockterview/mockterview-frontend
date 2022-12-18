import * as S from './InterviewReadyTemplate.style';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LoginHeader from '../../organisms/LoginPageOrganisms/Header/LoginHeader';
import { isLogin } from '../../../http/userInfo';
import styled from '@emotion/styled';
import CompoundedSpace from 'antd/es/space';

const InterviewReadyTemplate = (props: any) => {
  const [volume, setVolume] = useState(0);
  const [volumeArray, setVolumeArray] = useState([]);
  const [audioRecord, setAudioRecord] = useState('');
  const [recordedChunks, setRecordedChunks] = useState<Array<Blob>>([]);
  let [audioUrl, setAudioUrl] = useState<string>();
  const [mediaRecorder, setMediaRecoder] = useState<MediaRecorder>();
  const [changeButton, setChangeButton] = useState<number>(0);
  let recordedMediaURL = '';

  const [audioChunk, setAudioChunk] = useState<Array<Blob>>([]);

  const { category, round } = useRouter().query;

  const callMic = () => {
    navigator.mediaDevices.getUserMedia({
      audio: true,
    });
  };

  useEffect(() => {
    if (!isLogin) {
      window.location.href = '/login';
    }
  }, []);

  useEffect(() => {
    callMic();
  }, []);

  const startRecording =async() => {
    setChangeButton(1)
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      // volumeCheck()
      volumeCheck()
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      const audioChunks :BlobPart[]= [];
      mediaRecorder.addEventListener("dataavailable", event => {
        setAudioChunk([...audioChunk, event.data])
        audioChunks.push(event.data);
      });

  
      mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
      });
  
      setTimeout(() => {
        setChangeButton(2)
        mediaRecorder.stop();
        setVolume(0)
      }, 3000)
    }
    )
    
    setTimeout(()=> {
      setChangeButton(0)
    },6000)
  }


async function volumeCheck() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  const audioContext = new AudioContext();
  const mediaStreamAudioSourceNode = audioContext.createMediaStreamSource(stream);
  const analyserNode = audioContext.createAnalyser();
  mediaStreamAudioSourceNode.connect(analyserNode);
  
  const pcmData = new Float32Array(Math.floor(analyserNode.fftSize));
  let myReq: number
  const onFrame = () => {
      analyserNode.getFloatTimeDomainData(pcmData);
      let sumSquares = 0.0;
       for (let i =0 ; i < pcmData.length; i++){
        sumSquares += pcmData[i] * pcmData[i]
       }
       let value  = Math.sqrt(sumSquares / pcmData.length);
       setVolume(Math.ceil(value*3500))
       myReq = window.requestAnimationFrame(onFrame);
       setTimeout(() => {
        cancelAnimationFrame(myReq);
        setVolume(0)
      }, 6000)
       return
      };
      myReq = window.requestAnimationFrame(onFrame);
  return
 }


  return (
    <>
      <LoginHeader></LoginHeader>
      <S.wrap>
        <S.InterviewHeader>
          <S.InterviewWrapper>
            <S.Title>
              <div>곧 면접이 시작됩니다.</div>
              <div>준비되면 아래 시작 버튼을 눌러주세요!</div>
            </S.Title>
            <S.Notice>
              <div>
                더욱 실전같은 모의면접을 위해 다음 사항들을 체크해주세요.
              </div>
            </S.Notice>
            <S.NoticeBox>
              <S.Text>
                <div>
                  총 10문제입니다. 시작하면 중단할 수 없으니 시간을
                  확보해주세요.
                </div>
              </S.Text>
            </S.NoticeBox>
            <S.VoiceRecordBox>
              <S.Text>
                <div>
                  원활한 모의면접 진행을 위해 스피커와 마이크 환경을
                  점검해주세요.
                </div>
              </S.Text>
              <S.BottomWrapper>
                <S.SoundBar>
                  {/* <canvas id="meter" width="292" height="6">
                  </canvas> */}

                  {/* <S.processWrap>
                    </S.processWrap> */}
                  <S.processBar>
                    <S.processBarProcess process={volume} />
                  </S.processBar>
                </S.SoundBar>
                {changeButton === 0 ? (
                  <>
                    <S.TestRecordButton
                      onClick={() => {
                        startRecording();
                        // volumeCheck()
                      }}
                                       >
                      테스트 녹음하기
                    </S.TestRecordButton>
                  </>
                ) : changeButton === 1 ? (
                  <>
                    <S.OnRecord
                    >녹음중</S.OnRecord>
                  </>
                ) : changeButton === 2 ? (
                  <>
                    <S.OnPlay>재생중</S.OnPlay>
                  </>
                ) : null}
              </S.BottomWrapper>
            </S.VoiceRecordBox>
            <></>
            <S.StartButtonWrapper>
              <audio controls hidden autoPlay src={`${audioUrl}`}></audio>

              <Link
                href={{
                  pathname: `/interview/countdown`,
                  query: { category: category, round: round },
                }}
              >
                <S.StartButton>시작</S.StartButton>
              </Link>
            </S.StartButtonWrapper>
          </S.InterviewWrapper>
        </S.InterviewHeader>
      </S.wrap>
    </>
  );
};

export default InterviewReadyTemplate;
function colorPids(average: number) {
  throw new Error('Function not implemented.');
}
