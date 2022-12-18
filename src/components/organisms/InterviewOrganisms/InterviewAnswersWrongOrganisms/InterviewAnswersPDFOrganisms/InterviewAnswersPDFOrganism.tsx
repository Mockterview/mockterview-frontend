import * as S from './InterviewAnswersPDFOrganism.style'
import instance from '../../../../../http/axios'
import { useState, useEffect, useCallback } from 'react'
import { baseURL } from '../../../../../http/url'
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// import { Document, Page } from 'react-pdf';


export default function InterviewAnswersPDFOrganism () {
    const [state, setState] = useState([{}]);
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1)
    const offset = (page-1)*limit;
    const [total, setTotal] = useState(0)
    const numPages = Math.ceil(total / limit);

    const results = [
      {
        questionTitle: '문제1',
        answer:
          'Lorem ipsum dolor sit amet. Aut voluptas sint cum velit dolorem et distinctio nihil qui voluptatem natus qui assumenda perspiciatis aut galisum magnam quo obcaecati doloremque. 33 rerum facilis sed illum omnis ut sapiente nihil et perspiciatis corporis qui dolor obcaecati sed voluptatibus rerum. Est asperiores galisum et vitae nihil et rerum consequatur aut unde dignissimos sed quaerat quia.Sit voluptas voluptatem ea aliquid necessitatibus non ipsam voluptas. Est nobis illo sit assumenda temporibus qui tempore aliquam. Eos modi excepturi At optio omnis et repudiandae voluptatum.Ut eligendi velit sit asperiores similique et nostrum inventore eos dolorem magnam hic repudiandae similique At dolorem dignissimos. Et laboriosam internos vel fugit nisi et nesciunt rerum sit atque cupiditate sit facilis nostrum ut voluptatem harum qui recusandae iure. Vel animi commodi eum atque sunt vel autem quasi aut galisum sint. Rem repellat dolor sed maiores necessitatibus et quis quidem.',
      },
      {
        questionTitle: '문제2',
        answer:
          'Lorem ipsum dolor sit amet. Aut voluptas sint cum velit dolorem et distinctio nihil qui voluptatem natus qui assumenda perspiciatis aut galisum magnam quo obcaecati doloremque. 33 rerum facilis sed illum omnis ut sapiente nihil et perspiciatis corporis qui dolor obcaecati sed voluptatibus rerum. Est asperiores galisum et vitae nihil et rerum consequatur aut unde dignissimos sed quaerat quia.Sit voluptas voluptatem ea aliquid necessitatibus non ipsam voluptas. Est nobis illo sit assumenda temporibus qui tempore aliquam. Eos modi excepturi At optio omnis et repudiandae voluptatum.Ut eligendi velit sit asperiores similique et nostrum inventore eos dolorem magnam hic repudiandae similique At dolorem dignissimos. Et laboriosam internos vel fugit nisi et nesciunt rerum sit atque cupiditate sit facilis nostrum ut voluptatem harum qui recusandae iure. Vel animi commodi eum atque sunt vel autem quasi aut galisum sint. ',
      },
      {
        questionTitle: '문제3',
        answer:
          'velit dolorem et distinctio nihil qui voluptatem natus qui assumenda perspiciatis aut galisum magnam quo obcaecati doloremque. 33 rerum facilis sed illum omnis ut sapiente nihil et perspiciatis corporis qui dolor obcaecati sed voluptatibus rerum. Est asperiores galisum et vitae nihil et rerum consequatur aut unde dignissimos sed quaerat quia.Sit voluptas voluptatem ea aliquid necessitatibus non ipsam voluptas. Est nobis illo sit assumenda temporibus qui tempore aliquam. Eos modi excepturi At optio omnis et repudiandae voluptatum.Ut eligendi velit sit asperiores similique et nostrum inventore eos dolorem magnam hic repudiandae similique At dolorem dignissimos. Et laboriosam internos vel fugit nisi et nesciunt rerum sit atque cupiditate sit facilis nostrum ut voluptatem harum qui recusandae iure. Vel animi commodi eum atque sunt vel autem quasi aut galisum sint.',
      },
      {
        questionTitle: '문제4',
        answer: '문제4 답변입니다',
      }]


// Create styles

    // useEffect(() => {
    //     if (!data) {
    //       return;
    //     }
    //     const getData = async () => {
    //       const response = await instance
    //         .get(`${baseURL}/interview/answers/wrong`)
    //         .then(response => {
    //           setData(response.data);
    //           setTotal(response.data.length)
    //           //email 받아서 set 하고 password 받아서 셋 해서 보내준다.

    //         });
    //     };
    //     getData();
    //   }, []);


      
    return (
        <div>
        <div> 
       <div>오답노트</div>
       <div >총 38문제 /  2022.11.28 </div>
       </div>


       <div>

       { results.slice(offset, offset+limit).map((data,idx) => {
            return(

<S.QuestionContainer key={idx + "container"}>
    <S.QuestionWrap key={idx + "wrap"}>
                <S.QuestionTitle key={idx + "title"}>{data['questionTitle']} </S.QuestionTitle>
                <S.InputContainer key={idx + "inputcontainer"}>
                <S.Input key={idx + "input"}>{data['answer']} </S.Input>
                </S.InputContainer>
                </S.QuestionWrap>
    </S.QuestionContainer>

            )
          })}

</div>



{/* 
       <div>

       { data.slice(offset, offset+limit).map((data,idx) => {
            return(

<S.QuestionContainer key={idx + "container"}>
    <S.QuestionWrap key={idx + "wrap"}>
                <S.QuestionTitle key={idx + "title"}>{data['questionTitle']} </S.QuestionTitle>
                <S.InputContainer key={idx + "inputcontainer"}>
                <S.Input key={idx + "input"}>{data['answer']} </S.Input>
                </S.InputContainer>
                </S.QuestionWrap>
    </S.QuestionContainer>

            )
          })}

       </div> */}
       </div>
    )

    
}

