import { users } from '../../signup';

export default function handler(request, response) {
  if (request.method == 'POST') {
    let phoneExists = false;
    let email;
    users.forEach(user => {
      if (user.phone == request.body.phone) {
        phoneExists = true;
        email = user.email;
        return;
      }
    });
    if (phoneExists == true) {
      response.status(200).send(email);
      return;
    }
    response.status(404).send();
  }
}
