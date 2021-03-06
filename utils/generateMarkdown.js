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
  
  ### LICENSE: ${license}
  
  Notice! The above License section represents the license covering this application unless the section states otherwise.
  `
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(answers) {

  return `# ${answers.projectTitle}
  <a name="top"></a>

  ### DESCRIPTION: 
  ${answers.projectDescription}


${renderLicenseSection(answers.license)}


  ### TABLE OF CONTENTS:
  
  [Installation](#installation)

  [Usage](#usage)

  [Contributing](#contributing)

  [Test](#test)

  [Questions](#questions)

  ==========================================
  
  <a name="installation"></a> 
  ### INSTALLATION: 
  ${answers.installationInstructions}

  ==========================================

  <a name="usage"></a> 
  ### USAGE: 
  ${answers.usageInformation}

  ==========================================

  <a name="contributing"></a> 
  ### CONTRIBUTING: 
  ${answers.contributionGuidelines}

  ==========================================

  <a name="test"></a> 
  ### TEST: 
  ${answers.testInstructions}
  
  ==========================================

  <a name="questions"></a> 
  ### QUESTIONS: 
  ${answers.gitHubUserName}        ${answers.gitHubEmail}

  [Go Back to Top of Readme.MD](#top)
  `
}


module.exports = generateMarkdown;
