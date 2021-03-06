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
    name: 'installationInstructions',
    message: 'What are your installation instructions?'
},
{
    type: 'input',
    name: 'usageInformation',
    message: 'What is your usage Information?'
},
{
    type: 'input',
    name: 'contributionGuidelines',
    message: 'What are your contribution guidelines?'
},
{
    type: 'input',
    name: 'testInstructions',
    message: 'What are your test instructions?'
},
{
    type: 'list',
    name: 'license',
    message: 'What is your license?',
    choices: [
        'APACHE',
        'BOOST',
        'ECLIPSE',
        'NO LICENSE OR LICENSE NOT LISTED'
    ]
},
{
    type: 'input',
    name: 'gitHubUserName',
    message: 'What is your gitHub username?'
},
{
    type: 'input',
    name: 'gitHubEmail',
    message: 'What is your gitHub email address?'
}

];


// TODO: Create a function to initialize app
function init() {

    // prompts user for data used for markdown content, 
    // then calls function to generate markdown

    inquirer.prompt(questions)
        .then(answers => {
            const content = generateMarkdown(answers);

            // TODO: Create a function to write README file
            fs.writeFile('./README.md', content, err => {
                if (err) throw err
                console.log('File saved!')
            })
        });
}

// Function call to initialize app
init();
