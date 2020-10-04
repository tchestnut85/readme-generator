// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  ![License](https://img.shields.io/badge/License%3A-${answers.license}-blue.svg)

  ## Description
  ${answers.description}

  ${answers.contents}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  Please visit my **[GitHub profile](https://github/${answers.githubName}/)** to check out this and other projects I've created and contributed to.
  If you have any specific questions about this project, please contact me at <${answers.email}>.

  ## License
  ![License](https://img.shields.io/badge/License%3A-${answers.license}-blue.svg)
  This app is licensed under the ${answers.license} license.
`;
}

module.exports = generateMarkdown;
