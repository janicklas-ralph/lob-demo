# [Lob](https://lob.com/docs) api demo

A demo application built on Node.js that prompts the user for input on stdin and creates a letter to a state representative using the Lob api.
Given the address of the user, we get the corresponding state representative's details from the Google Civic Api

## Getting started

The project was built on the the latest stable version of _node.js v8.9.1_
Make sure to have switched to __Node 8__ before executing the program.

The link to the output file is printed on the _stdout_. Any errors are also printed to _stdout_.

### Installation
1. `cd` into the project location
1. `npm i` to install dependencies

### Setup
1. You need a __Google API key__ that is enabled for the __Google Civic Information API__
2. Add your Google API key as an environment variable with the name `GOOGLE_API_KEY`.
    Run `export GOOGLE_API_KEY=YOUR_API_KEY`
3. OR you can also pass the API key as a command line argument.

### Running the program
1. Run `node index.js` to start the program.
2. Run `node index.js YOUR_API_KEY` to pass the API key via command line


