// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `Visit {https://choosealicense.com/licenses} for more details on the ${license} permissions.`;
  }
  return "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - ${renderLicenseSection(data.license)}(#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Description: 
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}
 
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contribution:
  ${data.contribution}

  ## Tests:
  ${data.testinstructions}

  ## Questions:
  If you have any questions, reach out to me via email or GitHub.
  - Email: ${data.email}
  - Github: https://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
