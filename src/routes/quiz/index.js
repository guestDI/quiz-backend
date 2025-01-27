const { getQuizzesByUserId, addQuiz } = require('../../controllers/quizController');

async function quizRoutes(fastify) {
  const { getQuizzes, getQuizzesByUserId } = require('../../controllers/quizController');
  fastify.get('/getQuizzes', getQuizzes);
  fastify.get('/my-quizzes', { preValidation: [fastify.authenticate] }, getQuizzesByUserId)
  fastify.post('/addQuiz', { preValidation: [fastify.authenticate] }, addQuiz)
}

module.exports = quizRoutes;