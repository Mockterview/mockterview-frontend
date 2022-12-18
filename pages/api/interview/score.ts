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
    response.status(200).send();

    response.status(200).json();
  }
}
