const request = require('supertest');
const { app, shutdownServer } = require('./index');

describe('Calculator Backend', () => {
  test('POST /calculate with valid addition', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ value: '2+3' });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.data.answer).toBe(5);
  });

  test('POST /calculate with valid multiplication', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ value: '4*3' });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.data.answer).toBe(12);
  });

  test('POST /calculate with division by zero', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ value: '10/0' });

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('success');
      expect(response.body.data.answer).toBeNull();
  });

  // Add more test cases for subtraction, division, and edge cases as needed
});

afterAll(() => {
  shutdownServer();
});
