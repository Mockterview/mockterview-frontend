import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import instance from '../../../../http/axios';
import { baseURL } from '../../../../http/url';

import * as S from './InterviewWrongAnswersSoonOrganism.style';
import carrot from '/public/images/item/carrot.png';

export default function InterviewWrongAnswersSoonOrganism() {
  const router = useRouter();

  async function countCarrot() {
    const result = await instance
      .post(`${baseURL}/want-it`, { pageName: '오답노트' })
      .then(response => {
        // console.log('response : ', response.data);
        return;
      });
    onShakeCarrotHandler();
    setTimeout(() => {
      alert('빠른 시일 내로 찾아오겠습니다!');
    }, 400);
  }

  function handleClick() {
    router.push({ pathname: '/interview' });
  }

  const carrotBtn = useRef(null);
  const onShakeCarrotHandler = () => {
    carrotBtn.current.children[0].style.transform = 'rotate(-30deg)';
    setTimeout(() => {
      carrotBtn.current.children[0].style.transform = 'rotate(-30deg)';
    }, 50);
    setTimeout(() => {
      carrotBtn.current.children[0].style.transform = 'rotate(0deg)';
    }, 100);
    setTimeout(() => {
      carrotBtn.current.children[0].style.transform = 'rotate(-30deg)';
    }, 250);
    setTimeout(() => {
      carrotBtn.current.children[0].style.transform = 'rotate(0deg)';
    }, 300);
  };

  return (
    <>
      <S.Wrap>
        <S.Title>
          틀린문제를 모아볼 수 있는&nbsp;<span>오답노트</span>가 준비중입니다!
        </S.Title>
        <S.Desc>
          오답노트를 원하신다면 당근을 흔들어주세요.
          <br />더 열심히 빠르게 만들어보겠습니다!
        </S.Desc>
        <S.CarrotBG
          onClick={() => {
            countCarrot();
          }}
          ref={carrotBtn}
        >
          <S.Carrot>
            <Image src={carrot} alt="carrot" loading="lazy" unoptimized />
          </S.Carrot>
        </S.CarrotBG>
        <S.Btn
          onClick={() => {
            handleClick();
          }}
        >
          닫기
        </S.Btn>
      </S.Wrap>
    </>
  );
}
