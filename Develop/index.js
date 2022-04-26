// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');


// a high-quality, professional README.md is generated with the title of my project and sections entitled Description, 
// Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: "What is your project title?"
    }
]).then(answer => {
    console.log(answers);

    const content = `My project title is ${answers.projectTitle}.`

    fs.writeFile('./README.md', content, err => {
        if (err) throw err
        console.log('File saved!')
    })
})
//Pulled question ideas from Acceptance Criteria

//Ask for project title
//Ask for project description

//Ask for installation instructions
//Ask for Usage Information
//Ask for Contribution Guidelines
//Ask for Test instructions


//Ask for license from list of options

//Ask for gitHub username
//Ask for email


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
// init();
