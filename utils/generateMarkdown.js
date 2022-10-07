// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "Mozilla":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "None":
      `N/A`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    switch (license) {
      case "MIT":
        return `[![License: MIT](https://opensource.org/licenses/MIT)`;
      case "Apache":
        return `[![License]](https://opensource.org/licenses/Apache-2.0)`; 
      case "Mozilla":
        return `[![License: MPL 2.0]](https://opensource.org/licenses/MPL-2.0)`;
      case "None":
        return `N/A`;
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## license
    The license for this project is ${license}`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contribute](#contribute)
  * [Questions](#questions)

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.credits}

  ## License
  ${answers.license}

  ## Contribute
  ${answers.contribute}

  ## Questions
  Any questions on the project should be directed to: 
  [${answers.github}](https://github.com/users/${answers.github})
  `;
}

module.exports = generateMarkdown;
