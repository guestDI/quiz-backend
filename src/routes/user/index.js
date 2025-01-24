const { checkEmail } = require('../../controllers/userController');

async function userRoutes(fastify) {
  fastify.post('/check-email', checkEmail);
}

module.exports = userRoutes;