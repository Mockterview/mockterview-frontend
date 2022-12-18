export type results = {
  request: any;
  '': any;
  interviewId: Number;
  questions: [
    {
      questionId: Number;
      questionTitle: String;
      answer: String;
      audioUrl: String;
      correct: any;
    },
    {
      questionId: Number;
      questionTitle: String;
      answer: String;
      audioUrl: String;
      correct: any;
    },
    {
      questionId: Number;
      questionTitle: String;
      answer: String;
      audioUrl: String;
      correct: any;
    },
    {
      questionId: Number;
      questionTitle: String;
      answer: String;
      audioUrl: String;
      correct: any;
    },
    {
      questionId: Number;
      questionTitle: String;
      answer: String;
      audioUrl: String;
      correct: any;
    },
    {
      questionId: Number;
      questionTitle: String;
      answer: String;
      audioUrl: String;
      correct: any;
    },
  ];
};

//correct: boolean
const results: any = {
  interviewId: 1,
  questions: [
    {
      practiceId: 1,
      questionTitle: '문제1',
      answer:
        'Lorem ipsum dolor sit amet. Aut voluptas sint cum velit dolorem et distinctio nihil qui voluptatem natus qui assumenda perspiciatis aut galisum magnam quo obcaecati doloremque. 33 rerum facilis sed illum omnis ut sapiente nihil et perspiciatis corporis qui dolor obcaecati sed voluptatibus rerum. Est asperiores galisum et vitae nihil et rerum consequatur aut unde dignissimos sed quaerat quia.Sit voluptas voluptatem ea aliquid necessitatibus non ipsam voluptas. Est nobis illo sit assumenda temporibus qui tempore aliquam. Eos modi excepturi At optio omnis et repudiandae voluptatum.Ut eligendi velit sit asperiores similique et nostrum inventore eos dolorem magnam hic repudiandae similique At dolorem dignissimos. Et laboriosam internos vel fugit nisi et nesciunt rerum sit atque cupiditate sit facilis nostrum ut voluptatem harum qui recusandae iure. Vel animi commodi eum atque sunt vel autem quasi aut galisum sint. Rem repellat dolor sed maiores necessitatibus et quis quidem.',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      correct: null,
    },
    {
      practiceId: 2,
      questionTitle: '문제2',
      answer: '문제2 답변입니다',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      correct: null,
    },
    {
      practiceId: 3,
      questionTitle: '문제3',
      answer: '문제3 답변입니다',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      correct: null,
    },
    {
      practiceId: 4,
      questionTitle: '문제4',
      answer: '문제4 답변입니다',
      audioUrl: 'audio4.url',
      correct: null,
    },
    {
      practiceId: 5,
      questionTitle: '문제5',
      answer: '문제5 답변입니다',
      audioUrl: 'audio5.url',
      correct: null,
    },
    {
      practiceId: 6,
      questionTitle: '문제6',
      answer: '문제6 답변입니다',
      audioUrl: 'audio6.url',
      correct: null,
    },
  ],
};

export default function handler(request: any, response: any) {
  // if (request.method == 'POST') {

  //   response.status(200).send(request.body);
  // }
  // if (request.method == 'PUT') {
  //   return response.status(201).send(request.body);
  // }

  // if (request.method == 'GET') {

  // }
  if (request.method == 'GET') {
    response.status(200).send(results);

    response.status(200).json(results);
  }

  if (response.method == 'PATCH') {
    results.questions.push(request.body);
  }
}
