const app = require('fastify')({ logger: true });
const cors = require('@fastify/cors');
const aboutRoutes = require('./routes/about');
const quizRoutes = require('./routes/quiz');
const userRoutes = require('./routes/user');
const healthcheckRoutes = require('./routes/healtcheck');

//Plugins registration
app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});
app.register(require('@fastify/jwt'), {
  secret: 'supersecret'
})

app.register(require('./plugins/db'));
app.register(require('./plugins/auth'));

//Routes registration
app.register(healthcheckRoutes);
app.register(quizRoutes, { prefix: '/quiz' });
app.register(aboutRoutes, { prefix: '/about' });
app.register(userRoutes, { prefix: '/user' });

module.exports = app;
