const app = require('./src/app');

const { ADDRESS = 'localhost', PORT = '4010' } = process.env;

const start = () => {
  app.listen({ host: ADDRESS, port: parseInt(PORT, 10) }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })
};

start();
