/**
 * Lob coding challenge
 * Accepts user input and uses the Lob api to create a letter to a state representative
 * Running on node.js lts (v8.9.1)
 * 
 * @author Janicklas Ralph
 */
const chalk = require('chalk');
const getInput = require('./scripts/input');
const getRepresentativeInfo = require('./scripts/representative');
const createLetter = require('./scripts/lob');

const printError = (err) => console.error(chalk`\n{red.bold ${err}}`);

/**
 * The main function, kickstarts the program
 * 
 * @returns Prints the url of the created letter in console
 */
const main = async () => {
  let userInput;
  let representativeInfo;
  let letterResponse;

  // Prompt user input
  try {
    userInput = await getInput();
  } catch(err) {
    return printError(err);
  }

  // Format address for google civic api
  const inputAddress = [
    userInput.addressLine1, 
    userInput.addressLine2,
    userInput.city,
    userInput.state,
    userInput.country,
    userInput.zip,
  ].filter(v => v.trim()).join(' ');

  // Get a state representative's details from the google civic api
  try {
    representativeInfo = await getRepresentativeInfo(inputAddress);
  } catch(err) {
    return printError(err);
  }

  // Create a letter using Lob
  try {
    letterResponse = await createLetter(userInput, representativeInfo);
  } catch (err) {
    return printError(`Failed to create a letter with the info provided.\n${err}`);
  }

  // Print the url of the letter created.
  console.log(chalk`\n\n{green.bold Your letter has been successfully created!}`);
  console.log(chalk`{blue ${letterResponse.url}}`);
};

main();
