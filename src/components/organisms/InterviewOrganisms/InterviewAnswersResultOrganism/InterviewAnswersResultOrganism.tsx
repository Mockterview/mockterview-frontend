import * as S from './InterviewAnswersResultOrganism.style';
import instance from '../../../../http/axios';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import check from '../../../../lotties/check2.png';
import correct from '../../../../lotties/correct2.png';

import correctimage from '../../../../lotties/correctimage.jpg';
import wrongimage from '../../../../lotties/wrongimage.jpg';
import { useRouter } from 'next/router';
import InterviewHeader from '../../Header/InterviewHeader';
import { baseURL } from '../../../../http/url';
import { isLogin } from '../../../../http/userInfo'
import InterviewAnswersHeader from '../InterviewAnswersResultOrganism/InterviewAnswersHeaderOrganism';
//props로 react , 몇회차정보인지 필요
//interviewID 받아오기
export default function InterviewAnswersResultOrganism() {
  const [data, setData] = useState([]);
  const { query, isReady } = useRouter();

  useEffect(()=> {

    if(!isLogin){
      window.location.href = '/login'
    }
  },[])
  // const results = {
  //     interviewId : 1,
  //     questions : [
  //         {
  //             practiceId : 1,
  //             questionTitle : '1.React가 무엇인가요?',
  //             answer: 'Lorem ipsum dolor sit amet. Aut voluptas sint cum velit dolorem et distinctio nihil qui voluptatem natus qui assumenda perspiciatis aut galisum magnam quo obcaecati doloremque. 33 rerum facilis sed illum omnis ut sapiente nihil et perspiciatis corporis qui dolor obcaecati sed voluptatibus rerum. Est asperiores galisum et vitae nihil et rerum consequatur aut unde dignissimos sed quaerat quia.Sit voluptas voluptatem ea aliquid necessitatibus non ipsam voluptas. Est nobis illo sit assumenda temporibus qui tempore aliquam. Eos modi excepturi At optio omnis et repudiandae voluptatum.Ut eligendi velit sit asperiores similique et nostrum inventore eos dolorem magnam hic repudiandae similique At dolorem dignissimos. Et laboriosam internos vel fugit nisi et nesciunt rerum sit atque cupiditate sit facilis nostrum ut voluptatem harum qui recusandae iure. Vel animi commodi eum atque sunt vel autem quasi aut galisum sint. Rem repellat dolor sed maiores necessitatibus et quis quidem.',
  //             audioUrl: 'audio1.url',
  //             correct : true
  //         },
  //         {
  //             practiceId : 2,
  //             questionTitle : '1.React가 무엇인가요?',
  //             answer: 'Lorem ipsum dolor sit amet. Aut voluptas sint cum velit dolorem et distinctio nihil qui voluptatem natus qui assumenda perspiciatis aut galisum magnam quo obcaecati doloremque. 33 rerum facilis sed illum omnis ut sapiente nihil et perspiciatis corporis qui dolor obcaecati sed voluptatibus rerum. Est asperiores galisum et vitae nihil et rerum consequatur aut unde dignissimos sed quaerat quia.Sit voluptas voluptatem ea aliquid necessitatibus non ipsam voluptas. Est nobis illo sit assumenda temporibus qui tempore aliquam. Eos modi excepturi At optio omnis et repudiandae voluptatum.Ut eligendi velit sit asperiores similique et nostrum inventore eos dolorem magnam hic repudiandae similique At dolorem dignissimos. Et laboriosam internos vel fugit nisi et nesciunt rerum sit atque cupiditate sit facilis nostrum ut voluptatem harum qui recusandae iure. Vel animi commodi eum atque sunt vel autem quasi aut galisum sint. Rem repellat dolor sed maiores necessitatibus et quis quidem.',
  //             audioUrl: 'audio1.url',
  //             correct : false
  //         },
  //         {
  //             practiceId : 3,
  //             questionTitle : '1.React가 무엇인가요?',
  //             answer: 'Lorem ipsum dolor sit amet. Aut voluptas sint cum velit dolorem et distinctio nihil qui voluptatem natus qui assumenda perspiciatis aut galisum magnam quo obcaecati doloremque. 33 rerum facilis sed illum omnis ut sapiente nihil et perspiciatis corporis qui dolor obcaecati sed voluptatibus rerum. Est asperiores galisum et vitae nihil et rerum consequatur aut unde dignissimos sed quaerat quia.Sit voluptas voluptatem ea aliquid necessitatibus non ipsam voluptas. Est nobis illo sit assumenda temporibus qui tempore aliquam. Eos modi excepturi At optio omnis et repudiandae voluptatum.Ut eligendi velit sit asperiores similique et nostrum inventore eos dolorem magnam hic repudiandae similique At dolorem dignissimos. Et laboriosam internos vel fugit nisi et nesciunt rerum sit atque cupiditate sit facilis nostrum ut voluptatem harum qui recusandae iure. Vel animi commodi eum atque sunt vel autem quasi aut galisum sint. Rem repellat dolor sed maiores necessitatibus et quis quidem.',
  //             audioUrl: 'audio1.url',
  //             correct : true
  //         },
  //         {
  //             practiceId : 4,
  //             questionTitle : '1.React가 무엇인가요?',
  //             answer: 'Lorem ipsum dolor sit amet. Aut voluptas sint cum velit dolorem et distinctio nihil qui voluptatem natus qui assumenda perspiciatis aut galisum magnam quo obcaecati doloremque. 33 rerum facilis sed illum omnis ut sapiente nihil et perspiciatis corporis qui dolor obcaecati sed voluptatibus rerum. Est asperiores galisum et vitae nihil et rerum consequatur aut unde dignissimos sed quaerat quia.Sit voluptas voluptatem ea aliquid necessitatibus non ipsam voluptas. Est nobis illo sit assumenda temporibus qui tempore aliquam. Eos modi excepturi At optio omnis et repudiandae voluptatum.Ut eligendi velit sit asperiores similique et nostrum inventore eos dolorem magnam hic repudiandae similique At dolorem dignissimos. Et laboriosam internos vel fugit nisi et nesciunt rerum sit atque cupiditate sit facilis nostrum ut voluptatem harum qui recusandae iure. Vel animi commodi eum atque sunt vel autem quasi aut galisum sint. Rem repellat dolor sed maiores necessitatibus et quis quidem.',
  //             audioUrl: 'audio1.url',
  //             correct : false
  //         },
  //         {
  //             practiceId : 5,
  //             questionTitle : '1.React가 무엇인가요?',
  //             answer: 'Lorem ipsum dolor sit amet. Aut voluptas sint cum velit dolorem et distinctio nihil qui voluptatem natus qui assumenda perspiciatis aut galisum magnam quo obcaecati doloremque. 33 rerum facilis sed illum omnis ut sapiente nihil et perspiciatis corporis qui dolor obcaecati sed voluptatibus rerum. Est asperiores galisum et vitae nihil et rerum consequatur aut unde dignissimos sed quaerat quia.Sit voluptas voluptatem ea aliquid necessitatibus non ipsam voluptas. Est nobis illo sit assumenda temporibus qui tempore aliquam. Eos modi excepturi At optio omnis et repudiandae voluptatum.Ut eligendi velit sit asperiores similique et nostrum inventore eos dolorem magnam hic repudiandae similique At dolorem dignissimos. Et laboriosam internos vel fugit nisi et nesciunt rerum sit atque cupiditate sit facilis nostrum ut voluptatem harum qui recusandae iure. Vel animi commodi eum atque sunt vel autem quasi aut galisum sint. Rem repellat dolor sed maiores necessitatibus et quis quidem.',
  //             audioUrl: 'audio1.url',
  //             correct : true
  //         },
  //     ]
  // }

  useEffect(() => {
    if (!isReady) return;
    const getData = async () => {
      await instance
        .get(`${baseURL}/interviews/result?interviewId=${query.interviewId}`)
        .then(response => {
          if(response.data.questions){
          setData(response.data.questions);
        }
          // setData(response.data.questions);
        });
    };
    getData();
  }, [isReady]);

  // if (!data) {
  //   return;
  // }

  //     const getData = async () => {
  //       const response = await instance
  //     //   .post(`${baseURL}/interview/score`, {})
  //         .get(`${baseURL}/interview/result?interviewId=${interviewId}`)
  //         .then(response => {
  //             // setInterviewId(String(router.query.interviewId))

  //             // console.log("interview",interviewId)
  //         //   setData(response.data.questions);
  //         //   setTotal(response.data.length)
  //           //email 받아서 set 하고 password 받아서 셋 해서 보내준다.

  //         });
  //     };
  //     getData();
  //   }, [router.isReady]);

  //             // console.log("interview",interviewId)
  //         //   setData(response.data.questions);
  //         //   setTotal(response.data.length)
  //           //email 받아서 set 하고 password 받아서 셋 해서 보내준다.

  //         });
  //     };
  //     getData();
  //   }, [router.isReady]);

  return (
    <>
      <InterviewHeader></InterviewHeader>
      {/* <InterviewAnswersHeader></InterviewAnswersHeader> */}
      <S.Container>
        <S.Wrap>
          <S.Title>
            {query.category === 'react'
              ? 'React'
              : query.category === 'node'
              ? 'Node.js'
              : query.category === 'spring'
              ? 'Spring'
              : null}{' '}
            모의면접 {query.round}회차 결과
          </S.Title>
        </S.Wrap>

        {/* //results-> data로 변경 */}
        {data?.map((data, idx) => {
          return (
            <S.QuestionContainer key={idx + 'container'}>
              <S.QuestionWrap key={idx + 'wrap'}>
                {data.correct == true ? (
                  <S.CorrectImageWrap>
                    <Image src={correct} alt="correct" width={100}></Image>
                  </S.CorrectImageWrap>
                ) : (
                  <S.WrongImageWrap>
                    {' '}
                    <Image src={check} alt="wrong" width={100}></Image>
                  </S.WrongImageWrap>
                )}
                <S.QuestionTitle key={idx + 'title'}>
                  {idx + 1}. {data['questionTitle']}{' '}
                </S.QuestionTitle>
                <S.InputContainer key={idx + 'inputcontainer'}>
                  <S.Input key={idx + 'input'}>{data['answer']} </S.Input>
                </S.InputContainer>
              </S.QuestionWrap>
            </S.QuestionContainer>
          );
        })}

        <S.PaginationWrapper>
          <Link href="/interview">
            <S.PageButton>닫기</S.PageButton>
          </Link>
        </S.PaginationWrapper>
      </S.Container>
    </>
  );
}
