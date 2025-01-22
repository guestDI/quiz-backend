const app = require('fastify')({ logger: true });
const aboutRoute = require('./routes/about');
const quizRoute = require('./routes/quiz');

//Plugins registration
app.register(require('./plugins/db'));
app.register(require('./plugins/auth'));

//Routes registration
app.register(quizRoute, { prefix: '/quiz' });
app.register(aboutRoute, { prefix: '/about' });

module.exports = app;
