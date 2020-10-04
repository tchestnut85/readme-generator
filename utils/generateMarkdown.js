// function to generate markdown for README
function generateMarkdown(answers) {

  const licenseName = answers.license.replace(/ /g, '%20');

  return `
  # ${answers.title}
  ![License](https://img.shields.io/badge/License%3A-${licenseName}-blue.svg)

  ## Description
  ${answers.description}

  ![${answers.screenshotText}](${answers.screenshotImage})

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)  

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributing
  ${answers.contributeInstructions}

  ## Tests
  ${answers.testInstructions}

  ## Questions
  Please visit my **[GitHub profile](https://github.com/${answers.githubName}/)** to check out this and other projects I've created and contributed to.
  If you have any specific questions about this project, please contact me at <${answers.email}>.

  ## License
  ![License](https://img.shields.io/badge/License%3A-${licenseName}-blue.svg)
  This app is licensed under the ${answers.license} license.
`;
};

module.exports = generateMarkdown;