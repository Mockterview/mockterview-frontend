import email from '../login/find/email';

export const users = [
  {
    email: 'test@test.com',
    password: 'test1234',
    name: '홍길동',
    phone: '01012345678',
  },
  {
    email: 'test1234@test.com',
    password: 'test1234!',
    name: '탕수육',
    phone: '01087654321',
  },
  {
    email: 'abcd@gmail.com',
    password: 'abcd1234!',
    name: '탕수육',
    phone: '01000000000',
  },
];

export default function handler(request, response) {
  if (request.method == 'POST') {
    request.body;
    users.forEach(user => {
      if (user.email == request.body) {
        response.status(409).send({ message: 'email conflict' });
        return;
      }
    });
    response.status(200).send(request.body);
  }
  if (request.method == 'PUT') {
    users.push(request.body);
    return response.status(201).send(request.body);
  }

  if (request.method == 'GET') {
    response.status(200).json(users);
  }
}
