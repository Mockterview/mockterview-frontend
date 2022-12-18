import react, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useS3Upload } from 'next-s3-upload';

const AudioRecordTemplate = () => {
  const [mediaRecorder, setMediaRecoder] = useState<MediaRecorder>();
  const [media, setMedia] = useState<Array<MediaRecorder>>();
  const [recordedChunks, setRecordedChunks] = useState<Array<Blob>>([]);
  let recordedMediaURL = '';
  const audioRef = useRef<HTMLAudioElement>(null);

  let [audioUrl, setAudioUrl] = useState<string>();
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  let handleFileChange = async (recordFile: File) => {
    let { url } = await uploadToS3(recordFile);
    setAudioUrl(url);
    // console.log('amazon url address', url);
  };

  const callMic = () => {
    navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    // console.log('call mic');
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
          const recordFile = new File([e.data], fileName + '.mp4', {
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

        // audioRef.current.src = recordedMediaURL;

        // // 로컬다운로드
        // const link = document.createElement('a');
        // document.body.appendChild(link);
        // // 녹화된 영상의 URL을 href 속성으로 설정
        // link.href = recordedMediaURL;
        // // // 저장할 파일명 설정
        // link.download = uuidv4() + '.mp4';
        // link.click();
        // document.body.removeChild(link);
      };

      mediaRecorder.start();

      setMediaRecoder(mediaRecorder);
    });
  };

  const stopRecording = () => {
    // console.log('3', recordedChunks);
    // const blob = new Blob(recordedChunks, {
    //   type: 'video/webm; codecs=vp8',
    // });
    // const fileName = uuidv4();
    // const recordFile = new File([blob], fileName + '.mp4', {
    //   type: blob.type,
    // });

    // recordedMediaURL = URL.createObjectURL(blob);
    // console.log('recordFile', recordFile);
    setRecordedChunks([]);
    mediaRecorder.stop();
  };

  //   // audioRef.current.src = recordedMediaURL;
  //   const link = document.createElement('a');
  //   document.body.appendChild(link);
  //   // 녹화된 영상의 URL을 href 속성으로 설정
  //   link.href = recordedMediaURL;
  //   // 저장할 파일명 설정
  //   link.download = uuidv4() + '.mp4';
  //   link.click();
  //   document.body.removeChild(link);

  const downloadRecord = () => {};

  return (
    <>
      <div onClick={() => callMic()}>
        <h1>call</h1>
      </div>
      <div>
        <FileInput onChange={handleFileChange} />
        <div
          onClick={() => {
            startRecording(),
              openFileDialog;
              // console.log('audioUrl start', audioUrl);
          }}
        >
          <h1>시작</h1>
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            stopRecording();
          }}
        >
          <h1>종료</h1>
        </div>
      </div>
    </>
  );
};

export default AudioRecordTemplate;
