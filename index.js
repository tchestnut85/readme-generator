// array of questions for user
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (REQUIRED)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Enter your project title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project (REQUIRED)',
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
        message: 'Include any installation instructions for your project here (OPTIONAL)',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe usage information for your project (REQUIRED)',
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
        type: 'confirm',
        name: 'confirmScreenshot',
        message: 'Do you want to include a screenshot of your project?',
        default: false
    },
    {
        type: 'input',
        name: 'screenshotText',
        message: 'Enter alt text description for your screenshot:',
        when: ({ confirmScreenshot }) => {
            if (confirmScreenshot) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'screenshotImage',
        message: 'Provide the relative file path for your screenshot image:',
        when: ({ confirmScreenshot }) => {
            if (confirmScreenshot) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributeInstructions',
        message: 'If you would like to include guidelines for others to contribute to your project, enter them here. (OPTIONAL)',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'If you would like to include testing instructions for your project, enter them here. (OPTIONAL)',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select which License you would like to use:',
        choices: ['MIT', 'Apache 2.0', 'GNU v2.0', 'GNU v3.0', 'ISC']
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your GitHub username? (REQUIRED)',
        validate: githubName => {
            if (githubName) {
                return true;
            } else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address? (REQUIRED)',
        validate: email => {
            if (email) {
                return true;
            } else {
                return false;
            }
        }
    },
];

// function to write README file
function writeToFile(fileName, questions) {
    fileName = fs.writeFile('OUTPUT.md', generateMarkdown((questions)), function (err) {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log('=============== README created as OUTPUT.md! ===============');
        }
    });
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            writeToFile('OUTPUT.md', answers);
        });
};

// function call to initialize program
init();