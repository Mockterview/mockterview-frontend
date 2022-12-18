const questionsSpring = [
  {
    id: 1,
    level: '중급',
    title: 'spring',
    body: '동기와 비동기를 비교하여 설명해주실 수 있을까요',
  },
  {
    id: 2,
    level: '중급',
    title: 'spring',
    body: 'Call by reference란 무엇이고 보통 어떻게 쓰이나요',
  },
  {
    id: 3,
    level: '중급',
    title: 'spring',
    body: '동시성과 병렬성을 비교하여 설명해주실 수 있을까요',
  },
  {
    id: 4,
    level: '중급',
    title: 'spring',
    body: '최근에 본 기술 아티클에 대해 설명해주실 수 있을까요?',
  },
  {
    id: 5,
    level: '중급',
    title: 'spring',
    body: '클래스와 인스턴스의 차이에 대해 설명해주실 수 있을까요 ?',
  },
  {
    id: 6,
    level: '중급',
    title: 'spring',
    body: 'Java Map의 내부 구현은 어떻게 이루어져 있을지 추측해보실 수 있을까요 ?',
  },
  {
    id: 7,
    level: '중급',
    title: 'spring',
    body: 'Override 와 Overload 를 설명해주실 수 있을까요 ?',
  },
  {
    id: 8,
    level: '중급',
    title: 'spring',
    body: 'Spring bean lifecycle에 대해 아는 만큼 설명해주실 수 있을까요 ?',
  },
  {
    id: 9,
    level: '중급',
    title: 'spring',
    body: 'AOP란 무엇인지 아는 만큼 설명해주실 수 있을까요 ?',
  },
  {
    id: 10,
    level: '중급',
    title: 'spring',
    body: 'DI와 IoC에 대해 아는 만큼 설명해주실 수 있을까요 ?',
  },
  {
    id: 11,
    level: '중급',
    title: 'spring',
    body: 'Spring filter 와 interceptor의 차이는 무엇인가요 ?',
  },
  {
    id: 12,
    level: '중급',
    title: 'spring',
    body: 'MVC 모델이란 무엇인지 설명해주실 수 있을까요 ?',
  },
  {
    id: 13,
    level: '중급',
    title: 'spring',
    body: 'JPA는 언제 필요하고 언제 필요하지 않은지 설명해주실 수 있을까요?',
  },
];
export default function handler(req, res) {
  res.status(200).json(questionsSpring);
}
