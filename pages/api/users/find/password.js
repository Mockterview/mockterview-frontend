import { users } from '../../signup';

export default function handler(request, response) {
  if (request.method == 'POST') {
    let emailExists = false;
    users.forEach(user => {
      if (user.email == request.body.email) {
        emailExists = true;
      }
    });
    if (emailExists == true) {
      response.status(200).send();
      return;
    }
    response.status(404).send();
  }
}
