const request = require('supertest');
const app = require('./api');
const { expect } = require('chai');

// Test suite for the cart page
describe('GET /cart/:id', () => {
  it('responds with status 200 when :id is a number', (done) => {
    request(app)
      .get('/cart/123')
      .expect(200, done);
  });

  it('responds with the correct result when :id is a number', (done) => {
    request(app)
      .get('/cart/123')
      .expect('Payment methods for cart 123', done);
  });

  it('responds with status 404 when :id is NOT a number', (done) => {
    request(app)
      .get('/cart/not_a_number')
      .expect(404, done);
  });
});
