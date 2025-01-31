const app = require('fastify')({ logger: false, connectionTimeout: 60000 });
const cors = require('@fastify/cors');
const quizRoutes = require('./routes/quiz');
const userRoutes = require('./routes/user');

//Plugins registration
app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});
app.register(require('@fastify/jwt'), {
  secret: 'supersecret'
})

app.register(require('./plugins/auth'));

//Routes registration
app.register(quizRoutes, { prefix: '/quiz' });
app.register(userRoutes, { prefix: '/user' });

module.exports = app;
