const { getQuizzes } = require('../../controllers/quizController');

async function quizRoutes(fastify) {
  const { getQuizzes } = require('../../controllers/quizController');
  fastify.get('/getQuizzes', getQuizzes);
}

module.exports = quizRoutes;