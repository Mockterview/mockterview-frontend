import react, { useState } from 'react';
import * as S from './NPSMainOrganisms.stlye';
import Image from 'next/image';
import link from '../../../../../public/images/icon/link.png';
import { userInfo } from '../../../../http/userInfo';
import instance from '../../../../http/axios';
import { baseURL } from '../../../../http/url';

const NPSOrganisms = (props: { modalOpen: boolean }) => {
  const [clicked, setClicked] = useState(0);
  const [comment, setComment] = useState('');
  const [subcomment, setSubcomment] = useState(null);

  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  baseURL;
  async function fetchNPS(comment: string, subcomment: any) {
    instance.post(`${baseURL}/surveys/submit`, {
      userId: userInfo._id,
      grade: clicked,
      comment: comment,
      subComment: subcomment,
    });
  }
  console.log('modal', props.modalOpen);

  return (
    <>
      {props.modalOpen === true ? (
        <S.Background>
          <S.Wrap>
            <S.TitleWrap>
              <S.Title>목터뷰와 함께하는 면접준비 어떠신가요?</S.Title>
              <S.SubTitle>
                소중한 의견을 남겨주시면 서비스 개선에 큰 도움이 됩니다 :D
              </S.SubTitle>
            </S.TitleWrap>
            <S.QuestionWrap>
              <S.QuestionTitle>
                1. 목터뷰를 주변에 얼마나 추천하고 싶으신가요?
              </S.QuestionTitle>
              <S.Line></S.Line>
              <S.PointWrap>
                {array.map((item, index) => {
                  return (
                    <>
                      {item === clicked ? (
                        <S.ClickedPoint onClick={() => setClicked(item)}>
                          <S.ClickedSpot></S.ClickedSpot>
                          <S.Score>{item}점</S.Score>
                        </S.ClickedPoint>
                      ) : (
                        <S.Point onClick={() => setClicked(item)}>
                          <S.Spot></S.Spot>
                          {item}점
                        </S.Point>
                      )}
                    </>
                  );
                })}
              </S.PointWrap>
            </S.QuestionWrap>
            {clicked === 1 ||
            clicked === 2 ||
            clicked === 3 ||
            clicked === 4 ||
            clicked === 5 ||
            clicked === 6 ? (
              <>
                <S.QuestionTitle>
                  1-1. 해당 점수를 준 이유를 자유롭게 남겨주세요.
                </S.QuestionTitle>
                <S.Answer
                  placeholder="작성해주세요."
                  onChange={e => {
                    setSubcomment(e.target.value);
                  }}
                ></S.Answer>
              </>
            ) : clicked === 9 || clicked === 10 ? (
              <>
                <S.ShareWrap>
                  <S.ShareTitle>목터뷰를 소문내주세요!</S.ShareTitle>
                  <S.ShareBtn
                    // 공유하기 구현
                    onClick={() => {
                      let dummy = document.createElement('input');
                      let text =
                        `mockterview.xyz/?femail=` +
                        encodeURIComponent(userInfo.email);

                      document.body.appendChild(dummy);
                      dummy.value = text;
                      dummy.select();
                      document.execCommand('copy');
                      document.body.removeChild(dummy);
                    }}
                  >
                    <Image src={link} alt="logo" width={15} height={15} />
                    공유하기
                  </S.ShareBtn>
                </S.ShareWrap>
                <S.QuestionTitle>
                  1-1. 어떻게 말씀하시면서 추천하실 것 같은지 자유롭게
                  남겨주세요.
                </S.QuestionTitle>
                <S.Answer
                  placeholder="작성해주세요."
                  onChange={e => {
                    setSubcomment(e.target.value);
                  }}
                ></S.Answer>
              </>
            ) : (
              ''
            )}
            <S.QuestionTitle>
              2. 목터뷰를 주변에 얼마나 추천하고 싶으신가요?
            </S.QuestionTitle>
            <S.Answer
              placeholder="작성해주세요."
              onChange={e => {
                setComment(e.target.value);
              }}
            ></S.Answer>

            <S.SubmitWrap>
              <S.Submit
                onClick={() => {
                  fetchNPS(comment, subcomment);
                }}
              >
                제출
              </S.Submit>
            </S.SubmitWrap>
          </S.Wrap>
        </S.Background>
      ) : (
        ''
      )}
    </>
  );
};

export default NPSOrganisms;
