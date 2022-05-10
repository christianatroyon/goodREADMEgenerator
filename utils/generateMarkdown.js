// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![Badge](https://img.shields.io/badge/License-${license}-green.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
return `[${license}](https://opensource.org/licenses/${license})`
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `Find out more about ${license} here:`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
${data.license} ${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)} 


## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about the repo or would like to open an issue, contact me directly at ${data.email}. 
You can find more of my work at [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
