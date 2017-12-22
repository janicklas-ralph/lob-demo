/**
 * @author Janicklas Ralph
 * Running on node.js lts (v8.9.1)
 */
const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Promisify readline's question function
 * The promise is resolved with the user input
 * 
 * @returns Prompts a question in the stdin and returns a promise
 */
const askQuestionAsync = (question) => new Promise((resolve) => 
  rl.question(chalk`{cyan ${question}}`, (answer) => resolve(answer))
);

/**
 * Function prompts the user for the required inputs
 * 
 * @returns {Object} The user input
 */
const getInput = async () => {
  const name = await askQuestionAsync('From Name: ');
  const addressLine1 = await askQuestionAsync('From Address Line 1: ');
  const addressLine2 = await askQuestionAsync('From Address Line 2: ') || ' ';
  const city = await askQuestionAsync('From City: ');
  const state = await askQuestionAsync('From State: ');
  const country = await askQuestionAsync('From Country: ');
  const zip = await askQuestionAsync('From Zip Code: ');
  const message = await askQuestionAsync('Message: ');
  rl.close();

  const userInput = { name, addressLine1, addressLine2, city, state, country, zip, message };

  // Throw error if any input is empty
  if(Object.values(userInput).some((input) => !input)) {
    throw 'Invalid input, please try again';
  }

  // Throw error if message is above 500 characters long
  if(message.length > 500) {
    throw 'Message length is too long. Please limit it to 500 characters';
  }

  return userInput;
};

module.exports = getInput;
