// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  (https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ![License](https://img.shields.io/badge/license-${data.license}-blue.svg)
  This app is licensed under the ${data.license}.
`;
}

module.exports = generateMarkdown;
