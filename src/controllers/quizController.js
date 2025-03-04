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
    const result = await quizService.getQuizzesByUserId(userId, page, limit);
    reply.status(200).send({ data: result });
  } catch (err) {
    reply.send(err);
  }
};

exports.addQuiz = async (request, reply) => {
  try {
    const newQuiz = await quizService.addQuiz(quiz);
    reply.send(newQuiz);
  } catch (err) {
    reply.send(err);
  }
};
