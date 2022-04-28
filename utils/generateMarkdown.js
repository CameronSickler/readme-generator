// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === 'APACHE') {

    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

  } else if (license === 'BOOST') {

    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`

  } else if (license === 'ECLIPSE') {

    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`

  } else {

    return ''

  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {

  if (license === 'APACHE') {

    return `https://opensource.org/licenses/Apache-2.0`

  } else if (license === 'BOOST') {

    return `https://www.boost.org/LICENSE_1_0.txt`

  } else if (license === 'ECLIPSE') {

    return `https://opensource.org/licenses/EPL-1.0`

  } else {

    return ''

  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {

  return `${renderLicenseBadge(license)}

  ${renderLicenseLink(license)}
  
  License: ${license}
  
  Notice! The above License section represents the license covering this application unless the section states otherwise.
  `
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  return `# ${data.projectTitle}


  
  Table of Contents:
  [Questions](#questions)



  Description: ${data.projectDescription}



  ${renderLicenseSection(data.license)}


  
  Installation: ${data.installationInstructions}



  Usage: ${data.usageInformation}



  Contributing: ${data.contributionGuidelines}



  Test: ${data.testInstructions}
  


  #<a name="questions"></a> Questions: ${data.gitHubUserName}   ${data.gitHubEmail}
  `
}


module.exports = generateMarkdown;
