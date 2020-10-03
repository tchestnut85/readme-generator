// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  (https://img.shields.io/badge/license-${answers.license}-blue.svg)

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## License
  ![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)
  This app is licensed under the ${answers.license}.
`;
}

module.exports = generateMarkdown;
