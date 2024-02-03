const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should use Utils.calculateNumber with the correct arguments', function () {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function to be tested
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the correct arguments
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;

    // Assert that console.log was called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    // Restore the stub and the spy to avoid interference with other tests
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
