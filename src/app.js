const app = require('fastify')({ logger: true });
const cors = require('@fastify/cors');
const aboutRoute = require('./routes/about');
const quizRoute = require('./routes/quiz');

app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

//Plugins registration
app.register(require('./plugins/db'));
app.register(require('./plugins/auth'));

//Routes registration
app.register(quizRoute, { prefix: '/quiz' });
app.register(aboutRoute, { prefix: '/about' });

module.exports = app;
