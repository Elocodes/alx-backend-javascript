function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    // Return a promise that does nothing when success is false
    return new Promise(() => {});
  }
}
module.exports = getPaymentTokenFromAPI;
