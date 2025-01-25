async function quizRoutes(fastify) {
  const { getQuizzes, getQuizzesByUserId } = require('../../controllers/quizController');
  fastify.get('/getQuizzes', getQuizzes);
  fastify.get('/my-quizzes', { preValidation: [fastify.authenticate] }, getQuizzesByUserId)
}

module.exports = quizRoutes;