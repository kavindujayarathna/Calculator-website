const request = require('supertest');
const app = require('./index.js');

describe('POST /calculate', () => {
  test('it should calculate the answer', async () => {
    const input = { value: '2 + 3 * 4' };
    const expectedAnswer = 14; // The expected result of the expression '2 + 3 * 4' is 14.

    const response = await request(app)
      .post('/calculate')
      .send(input);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 'success',
      data: {
        answer: expectedAnswer
      }
    });
  });

  // Add more test cases as needed to cover different scenarios.
});