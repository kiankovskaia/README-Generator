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
  return `# ${data.Title} 

${data.Description}

[1-Installation](#installation)
[2-Usage](#usage)
[3-Credits](#credits)

## Installation

${data.Installation}


## Usage

${data.Usage}

## Credits

${data.Credits}

## Contact



##Questions

[Contact me on GitHub for additional information](https://github.com/${data.Questions})




`;
}

module.exports = generateMarkdown;
