const app = require('fastify')({ logger: true });
const cors = require('@fastify/cors');
const aboutRoutes = require('./routes/about');
const quizRoutes = require('./routes/quiz');
const userRoutes = require('./routes/user');

app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

//Plugins registration
app.register(require('./plugins/db'));
app.register(require('./plugins/auth'));

//Routes registration
app.register(quizRoutes, { prefix: '/quiz' });
app.register(aboutRoutes, { prefix: '/about' });
app.register(userRoutes, { prefix: '/user' });

module.exports = app;
