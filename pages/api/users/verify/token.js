const users = [
  {
    email: 'abcd@gmail.com',
    password: 'abcd1234!',
    name: '탕수육',
    phone: '01000000000',
    token: 'abcd',
  },
  {
    email: 'test2@test.com',
    password: 'test1234',
    name: '탕수육',
    phone: '01000000000',
    token: 'kkkk',
  },
];

export default function handler(request, response) {
  if (request.method == 'POST') {
    users.forEach(user => {
      if (user.token == request.body.data.token) {
        response.status(200).send({ email: user.email });
        return;
      }
    });
  }
}
