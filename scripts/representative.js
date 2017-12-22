/**
 * @author Janicklas Ralph
 * Running on node.js lts (v8.9.1)
 */
const axios = require('axios');

// Get Google's API key from arguments or environment variables
const GOOGLE_API_KEY = process.argv[2] || process.env.GOOGLE_API_KEY;

/**
 * Calls the google civic api to get the details
 * of a state representative for the given address
 * 
 * @returns {Object} The details of the state representative. Error otherwise.
 */
const getRepresentativeInfo = async (address) => {
  try {
    const response = await axios.get('https://www.googleapis.com/civicinfo/v2/representatives', {
      params: {
        address,
        levels: 'administrativeArea1',
        roles: 'headOfGovernment',
        key: GOOGLE_API_KEY
      },
    });
    const { data: { officials: [representative] } } = response;
    return representative;
  } catch(err) {
    throw 'Could not get the Governor\'s info for the provided details.';
  }
};

module.exports = getRepresentativeInfo;
