const userService = require('../services/userService');

exports.checkEmail = async (request, reply) => {
  const { email } = request.body;
  const result = await userService.checkEmailExists(email);

  if(result) {
    reply.status(200).send({ data: result });
  } else {
    reply.status(200).send({ data: null });
  }
};
