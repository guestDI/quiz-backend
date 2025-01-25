const fp = require('fastify-plugin');
const { verifyIdToken } = require('../utils/tokenUtils');

module.exports = fp(async (fastify) => {
    fastify.decorate('authenticate', async (request, reply) => {
        try {
            const idToken = request.headers.authorization.split(' ')[1];
            const decodedToken = await verifyIdToken(idToken);
            request.user = decodedToken['user_id'];
        } catch (err) {
            reply.send(err);
        }
    });
});