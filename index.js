const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// licenses to choose from
const licenses = ["MIT", "GPLv3", "Apache", "Unlicense"];
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project',
      choices: licenses,
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //...
  }
// TODO: Create a function to initialize app
function init() {
    //...
  }
// Function call to initialize app
init();
