// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Table of Contents:
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contribution](#contribution)
  [Tests](#tests)
  [Questions](#questions)


  ##Description: 
  ${data.description}

  ##Installation:
  ${data.installation}

  ##Usage:
  ${data.usage}

  ##License:
  https://img.shields.io/badge/license-${data.license}-blue.svg
  

  ##Contribution:
  ${data.contribution}

  ##Tests:
  ${data.testinstructions}

  ##Questions:
  If you have any questions, reach out to me via email or GitHub.
  - Email: ${data.email}
  - Github: https://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
