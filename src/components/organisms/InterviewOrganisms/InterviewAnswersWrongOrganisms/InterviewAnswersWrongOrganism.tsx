import * as S from './InterviewAnswersWrongOrganism.style'
import instance from '../../../../http/axios'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { baseURL } from '../../../../http/url'
import dynamic from 'next/dynamic';
import InterviewAnswersHeaderOrganism from '../InterviewAnswersResultOrganism/InterviewAnswersHeaderOrganism'
import { useRouter } from 'next/router'
import InterviewHeader from '../../Header/InterviewHeader'
import { isLogin } from '../../../../http/userInfo'
import { userInfo } from '../../../../http/userInfo'

const PdfViewer = dynamic(
    () => import('./InterviewAnswersPDFOrganisms'),
    { ssr: false }
  );
export default function InterviewAnswersWrongOrganism () {
    const [child, setChild] = useState(false);
    const [state, setState] = useState([{}]);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(0)
    const offset = (page-1)*limit;
    const { isReady, query } = useRouter()
    const numPages = Math.ceil(total/10)

    useEffect(()=> {
  
      if(!isLogin){
        window.location.href = '/login'
      }
    },[]) 
    // const numPages = Math.ceil(total / limit);
    const [pdf, setPdf]= useState(false);

    // const results = [
    //   {
    //     questionTitle: '1.React가 무엇인가요?',
    //     answer:
    //       'Lorem ipsum dolor sit amet. Aut voluptas sint cum velit dolorem et distinctio nihil qui voluptatem natus qui assumenda perspiciatis aut galisum magnam quo obcaecati doloremque. 33 rerum facilis sed illum omnis ut sapiente nihil et perspiciatis corporis qui dolor obcaecati sed voluptatibus rerum. Est asperiores galisum et vitae nihil et rerum consequatur aut unde dignissimos sed quaerat quia.Sit voluptas voluptatem ea aliquid necessitatibus non ipsam voluptas. Est nobis illo sit assumenda temporibus qui tempore aliquam. Eos modi excepturi At optio omnis et repudiandae voluptatum.Ut eligendi velit sit asperiores similique et nostrum inventore eos dolorem magnam hic repudiandae similique At dolorem dignissimos. Et laboriosam internos vel fugit nisi et nesciunt rerum sit atque cupiditate sit facilis nostrum ut voluptatem harum qui recusandae iure. Vel animi commodi eum atque sunt vel autem quasi aut galisum sint. Rem repellat dolor sed maiores necessitatibus et quis quidem.',
    //   },
    //   {
    //     questionTitle: '2.React가 무엇인가요?',
    //     answer:
    //       'Lorem ipsum dolor sit amet. Aut voluptas sint cum velit dolorem et distinctio nihil qui voluptatem natus qui assumenda perspiciatis aut galisum magnam quo obcaecati doloremque. 33 rerum facilis sed illum omnis ut sapiente nihil et perspiciatis corporis qui dolor obcaecati sed voluptatibus rerum. Est asperiores galisum et vitae nihil et rerum consequatur aut unde dignissimos sed quaerat quia.Sit voluptas voluptatem ea aliquid necessitatibus non ipsam voluptas. Est nobis illo sit assumenda temporibus qui tempore aliquam. Eos modi excepturi At optio omnis et repudiandae voluptatum.Ut eligendi velit sit asperiores similique et nostrum inventore eos dolorem magnam hic repudiandae similique At dolorem dignissimos. Et laboriosam internos vel fugit nisi et nesciunt rerum sit atque cupiditate sit facilis nostrum ut voluptatem harum qui recusandae iure. Vel animi commodi eum atque sunt vel autem quasi aut galisum sint. ',
    //   },
    //   {
    //     questionTitle: '3.React가 무엇인가요?',
    //     answer:
    //       'velit dolorem et distinctio nihil qui voluptatem natus qui assumenda perspiciatis aut galisum magnam quo obcaecati doloremque. 33 rerum facilis sed illum omnis ut sapiente nihil et perspiciatis corporis qui dolor obcaecati sed voluptatibus rerum. Est asperiores galisum et vitae nihil et rerum consequatur aut unde dignissimos sed quaerat quia.Sit voluptas voluptatem ea aliquid necessitatibus non ipsam voluptas. Est nobis illo sit assumenda temporibus qui tempore aliquam. Eos modi excepturi At optio omnis et repudiandae voluptatum.Ut eligendi velit sit asperiores similique et nostrum inventore eos dolorem magnam hic repudiandae similique At dolorem dignissimos. Et laboriosam internos vel fugit nisi et nesciunt rerum sit atque cupiditate sit facilis nostrum ut voluptatem harum qui recusandae iure. Vel animi commodi eum atque sunt vel autem quasi aut galisum sint.',
    //   },
    //   {
    //     questionTitle: '4.React가 무엇인가요?',
    //     answer:
    //       'velit dolorem et distinctio nihil qui voluptatem natus qui assumenda perspiciatis aut galisum magnam quo obcaecati doloremque. 33 rerum facilis sed illum omnis ut sapiente nihil et perspiciatis corporis qui dolor obcaecati sed voluptatibus rerum. Est asperiores galisum et vitae nihil et rerum consequatur aut unde dignissimos sed quaerat quia.Sit voluptas voluptatem ea aliquid necessitatibus non ipsam voluptas. Est nobis illo sit assumenda temporibus qui tempore aliquam. Eos modi excepturi At optio omnis et repudiandae voluptatum.Ut eligendi velit sit asperiores similique et nostrum inventore eos dolorem magnam hic repudiandae similique At dolorem dignissimos. Et laboriosam internos vel fugit nisi et nesciunt rerum sit atque cupiditate sit facilis nostrum ut voluptatem harum qui recusandae iure. Vel animi commodi eum atque sunt vel autem quasi aut galisum sint.',
    //   },
    //   {
    //     questionTitle: '5.React가 무엇인가요?',
    //     answer: '문제4 답변입니다',
    //   }]



    useEffect(() => {
        if (!data) {
          return;
        }
        const getData = async () => {
          const response = await instance
            .get(`${baseURL}/interviews/answers/wrong?userId=${query.userId}&category=${query.category}`)
            .then(response => {
              setData(response.data);
              setTotal(response.data.length)
              //email 받아서 set 하고 password 받아서 셋 해서 보내준다.

            });
        };
        getData();
      }, []);

    
  
      
      
    return (
      <>
     <InterviewHeader></InterviewHeader>
        <S.Container>
   {/* {child? <InterviewAnswersPDFOrganism ></InterviewAnswersPDFOrganism>:""} */}
        <S.Wrap>
            <S.Text>
              <S.Title>
              {query.category === 'react'
            ? 'React'
            : query.category === 'node'
            ? 'Node.js'
            : query.category === 'spring'
            ? 'Spring'
            : null} 50제 오답노트</S.Title>
              <S.Title>ᅳ</S.Title>
              <S.Description>
                 모의면접에서 자주 틀린 문제를 모아서 공부할 수 있는 오답노트 입니다. PDF로 다운로드하여 면접 전에 한번 더 점검하세요.
              </S.Description>
            </S.Text>
          </S.Wrap>

    <S.ButtonWrapper> 
    <S.Button onClick={()=>{setPdf(true)}}>
<a href="javascript:window.print()">PDF 다운로드</a>
</S.Button> 
    </S.ButtonWrapper>


          { data.slice(offset, offset+limit).map((data,idx) => {
            return(

<S.QuestionContainer key={idx + "container"}>
    <S.QuestionWrap key={idx + "wrap"}>
                <S.QuestionTitle key={idx + "title"}>{idx+1+(page-1)*limit}. {data['questionTitle']} </S.QuestionTitle>
                <S.InputContainer key={idx + "inputcontainer"}>
                <S.Input key={idx + "input"}>{data['answer']} </S.Input>
                </S.InputContainer>
                </S.QuestionWrap>
    </S.QuestionContainer>

            )
          })}

<S.PaginationWrapper>
<S.PageButton  onClick={()=>{setPage(page-1)}} disabled={page === 1} >이전</S.PageButton>
<S.PageNum>{page} / {numPages}</S.PageNum>

<S.PageButton  onClick={()=>{setPage(page+1)}} disabled={page === numPages} >다음</S.PageButton>
</S.PaginationWrapper>

          </S.Container>
          </>
    )

    
}

