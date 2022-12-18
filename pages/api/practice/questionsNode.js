const questionsNode = [
  {
    id: 1,
    level: '고급',
    title: 'node',
    body: '복합 인덱스란 무엇인지 원리를 설명해주실 수 있을까요 ?',
  },
  {
    id: 2,
    level: '고급',
    title: 'node',
    body: '트랜잭션이란 무엇이고 원자성, 일관성, 고립성, 지속성이란 무엇인지 설명해주실 수 있을까요 ?',
  },
  {
    id: 3,
    level: '고급',
    title: 'node',
    body: '정규화란 무엇이고 대표적인 장점과 단점은 무엇이 있을까요 ?',
  },
  {
    id: 4,
    level: '고급',
    title: 'node',
    body: 'HTTPS의 원리를 설명해주실 수 있을까요 ?',
  },
  {
    id: 5,
    level: '고급',
    title: 'node',
    body: 'TCP 3 way handshake란 무엇인지 설명해주실 수 있을까요 ?',
  },
  {
    id: 6,
    level: '고급',
    title: 'node',
    body: ' TCP 와 UDP 를 비교하여 설명해주실 수 있을까요 ?',
  },
  {
    id: 7,
    level: '고급',
    title: 'node',
    body: 'CORS란 무엇이고 어떻게 허용할 수 있나요 ?',
  },
  {
    id: 8,
    level: '고급',
    title: 'node',
    body: 'Base64 인코딩이란 무엇인가요 ?',
  },
  {
    id: 9,
    level: '고급',
    title: 'node',
    body: '사용자 패스워드를 전송하고 보관하는 방법을 설명해주실 수 있을까요 ?',
  },
  {
    id: 10,
    level: '고급',
    title: 'node',
    body: '프로세스와 스레드를 비교하여 설명해주실 수 있을까요 ?',
  },
  {
    id: 11,
    level: '고급',
    title: 'node',
    body: '동기와 비동기를 비교하여 설명해주실 수 있을까요 ?',
  },
  {
    id: 12,
    level: '고급',
    title: 'node',
    body: 'Call by reference란 무엇이고 보통 어떻게 쓰이나요 ?',
  },
  {
    id: 13,
    level: '고급',
    title: 'node',
    body: '동시성과 병렬성을 비교하여 설명해주실 수 있을까요 ?',
  },
];

export default function handler(req, res) {
  res.status(200).json(questionsNode);
}
