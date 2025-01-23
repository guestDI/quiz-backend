const quizService = require('../services/quizService');

exports.getQuizzes = async (request, reply) => {
  const { page, limit } = request.query;
  const result = await quizService.getQuizzes(page, limit);

  // throw new Error('Error getting quizzes');
  reply.status(200).send({ data: result });
};
