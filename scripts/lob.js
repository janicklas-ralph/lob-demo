/**
 * @author Janicklas Ralph
 * Running on node.js lts (v8.9.1)
 */
const Lob = require('lob')('test_fd34e1b5ea86a597ec89f7f2e46940c874d'); // Testing key

/**
 * Function uses the Lob module to create a letter
 * 
 * @param {Object} userInput - The user input
 * @param {Object} representativeInfo - The state representative's details
 * @returns {Object} The response object from Lob. Error otherwise
 */
const createLetter = (userInput, representativeInfo) => {
  const {
    name: repName,
    address: [repAddress],
  } = representativeInfo;

  return Lob.letters.create({
    description: 'Demo Letter',
    to: {
      name: repName,
      address_line1: repAddress.line1,
      address_line2: repAddress.line2 || '',
      address_city: repAddress.city,
      address_state: repAddress.state,
      address_zip: repAddress.zip,
      address_country: userInput.country,
    },
    from: {
      name: userInput.name,
      address_line1: userInput.addressLine1,
      address_line2: userInput.addressLine2,
      address_city: userInput.city,
      address_state: userInput.state,
      address_zip: userInput.zip,
      address_country: userInput.country,
    },
    file: `<html style="padding-top: 3in; margin: .5in;">{{message}}</html>`,
    merge_variables: {
      message: userInput.message,
    },
    color: true,
  });
};

module.exports = createLetter;
