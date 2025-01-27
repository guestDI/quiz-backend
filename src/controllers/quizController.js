const quizService = require('../services/quizService');

exports.getQuizzes = async (request, reply) => {
  const { page, limit } = request.query;
  const result = await quizService.getQuizzes(page, limit);

  // throw new Error('Error getting quizzes');
  reply.status(200).send({ data: result });
};

exports.getQuizzesByUserId = async (request, reply) => {
  try {
    const userId = request.user;
    const { page, limit } = request.query;
    const quizzes = await quizService.getQuizzesByUserId(userId, page, limit);
    reply.send(quizzes);
  } catch (err) {
    reply.send(err);
  }
};
