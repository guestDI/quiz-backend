async function healthcheckRoutes(fastify) {
  fastify.get('/healthcheck', async (request, reply) => {
    reply.send({ status: 'ok' });
  });
}

module.exports = healthcheckRoutes;