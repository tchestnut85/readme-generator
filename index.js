// array of questions for user
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your project title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project (Required)',
        validate: descripInput => {
            if (descripInput) {
                return true;
            } else {
                console.log('Please enter a project description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for installing your project (Optional)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe usage information for your project (Required)',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Provide usage information for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe usage information for your project (Required)',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Provide usage information for your project');
                return false;
            }
        }
    },
    {
        // need to change this question type and maybe add an input
        type: 'confirm',
        name: 'contributing',
        message: 'Would you like to include guidelines for others to contribute to your project? (Optional)',
        validate: contribInput => {
            if (contribInput = true) {
                console.log('Use pre-defined string with template literals or Contributor Covenant here?');
            }
        }
    },
    {
        // may need to change this question type
        type: 'confirm',
        name: 'tests',
        message: 'Would you like to include guidelines for others to contribute to your project? (Optional)',
        validate: testInput => {
            if (testInput = true) {
                console.log('Use pre-defined examples with template literals? Or just take an input value?');
            }
        }
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
