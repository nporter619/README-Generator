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
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the steps required to install your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README file has been generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const markdown = generateMarkdown(data);
            writeToFile('README.md', markdown);
        });
}

// Function call to initialize app
init();