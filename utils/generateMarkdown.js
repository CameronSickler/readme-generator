// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === 'APACHE') {

    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

  } else if (license === 'BOOST') {

    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`

  } else {

    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`

  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === 'APACHE') {

    return `https://opensource.org/licenses/Apache-2.0`

  } else if (license === 'BOOST') {

    return `https://www.boost.org/LICENSE_1_0.txt`

  } else {

    return `https://opensource.org/licenses/EPL-1.0`

  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {

  return `License Badge: ${renderLicenseBadge(license)}

  License Badge Link: ${renderLicenseLink(license)}`

}

function returnTitle(title) {

  return `# ${title}`

}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  return `# ${returnTitle(data.projectTitle)}

  Description: ${data.projectDescription}
  
  GitHub Email: ${data.gitHubEmail}
  
  GitHub Username: ${data.gitHubUserName}

  ${renderLicenseSection(data.license)}
  `
}


module.exports = generateMarkdown;
