// get user info through the command line
const readline = require('readline');

const readL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

readL.on('line', (input) => {
  if (input.trim() === '') {
    readL.close();
    return;
  }
  console.log(`Your name is: ${input}`);
});

readL.on('close', () => {
  console.log('This important software is now closing');
});
