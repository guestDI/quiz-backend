
const request = require('supertest');
const app = require('../src/app'); // Adjust path if necessary

beforeAll(async () => {
  await app.listen({ port: 3000 });
});

afterAll(async () => {
  await app.close();
});

describe('GET /about', () => {
  it('should return 200 and a message', async () => {
    const response = await request(app.server).get('/about');
    expect(response.statusCode).toBe(200);
  });
});
    