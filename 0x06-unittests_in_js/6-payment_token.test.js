const { expect } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with the correct data when success is true', function (done) {
    // Arrange
    const success = true;

    // Act
    getPaymentTokenFromAPI(success).then((result) => {
      // Assert
      expect(result).to.deep.equal({ data: 'Successful response from the API' });
      // Call done to indicate the end of the async test
      done();
    });
  });

  it('should do nothing when success is false', function (done) {
    // Arrange
    const success = false;

    // Act
    getPaymentTokenFromAPI(success).then(() => {
      // The promise should never resolve, so this block should not be executed
      // If it's executed, it means the test failed
      done(new Error('Promise resolved when it should not have.'));
    }).catch(() => {
      // If the promise is rejected, it's expected behavior
      // Call done to indicate the end of the async test
      done();
    });
  });
});

