const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  beforeEach(function () {
    // Create a spy on console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should log the correct string and be called once for 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    // Assert that console.log was called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    // Assert that console.log was called only once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('should log the correct string and be called once for 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    // Assert that console.log was called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
    // Assert that console.log was called only once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});

