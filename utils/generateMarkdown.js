// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  ![License](https://img.shields.io/badge/License%3A-${answers.license}-blue.svg)

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)  
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Credits
  ### Collaborators
  [${answers.partnerName}](https://github.com/${answers.partnerGithub})
  ${answers.assets}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  Please visit my **[GitHub profile](https://github.com/${answers.githubName}/)** to check out this and other projects I've created and contributed to.
  If you have any specific questions about this project, please contact me at <${answers.email}>.

  ## License
  ![License](https://img.shields.io/badge/License%3A-${answers.license}-blue.svg)
  This app is licensed under the ${answers.license} license.
`;
};

// create the table of contents if contents question is answered true
// const confirmContents = answers.contents;
// const createTableOfContents = confirmContents => {
//   if (!confirmContents) {
//     return '';
//   }
//   return `

//   `;
// };


module.exports = generateMarkdown;

// ## Credits
//   ${answers.collabs}
//   ${answers.thirdParty}
