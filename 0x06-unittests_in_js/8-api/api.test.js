const request = require('supertest');
const app = require('./api');
const { expect } = require('chai');

// Test suite for the index page
describe('GET /', () => {
  it('responds with status 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('responds with the correct result', (done) => {
    request(app)
      .get('/')
      .expect('Welcome to the payment system', done);
  });
});

