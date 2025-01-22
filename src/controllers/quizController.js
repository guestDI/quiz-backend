const quizService = require('../services/quizService');

exports.getQuizzes = async (request, reply) => {
  const quizzes = await quizService.getQuizzes();
  reply.header("Access-Control-Allow-Origin", "*");

  // throw new Error('Error getting quizzes');

  reply.status(400).send({ quizzes });
};
