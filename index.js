// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'projectTitle',
    message: 'What is your project title?'
},
{
    type: 'input',
    name: 'projectDescription',
    message: 'What is your project description?'
},
{
    type: 'input',
    name: 'gitHubEmail',
    message: 'What is your gitHub email address?'
},
{
    type: 'input',
    name: 'gitHubUserName',
    message: 'What is your gitHub username?'
}];

const data = [];

//Pulled question ideas from Acceptance Criteria

//Ask for installation instructions
//Ask for Usage Information
//Ask for Contribution Guidelines
//Ask for Test instructions

//Ask for license from list of options

//Ask for gitHub username
//Ask for email


// TODO: Create a function to initialize app
function init() {

    // prompts user for data used for markdown content, 
    // then calls function to generate markdown
    inquirer.prompt(questions)
        .then(answers => {
            data.push(answers);
            const content = generateMarkdown(data);

            // TODO: Create a function to write README file
            fs.writeFile('./README.md', content, err => {
                if (err) throw err
                console.log('File saved!')
            })
        });
}

// Function call to initialize app
init();
