// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');


// a high-quality, professional README.md is generated with the title of my project and sections entitled Description, 
// Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

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
}];


// SO FAR THIS IS WORKING CODE FOR INQUIRER PROMPT
// inquirer.prompt([
//     {
//         //Ask for project title
//         type: 'input',
//         name: 'projectTitle',
//         message: 'What is your project title?'
//     },
//     {
//         //Ask for project description
//         type: 'input',
//         name: 'projectDescription',
//         message: 'What is your project description?'
//     }
// ]).then(data => {

//     questions.push(data);

//     const content = `

//     Title: ${data.projectTitle}.
//     Description: ${data.projectDescription}.
//     `

//     fs.writeFile('./README.md', content, err => {
//         if (err) throw err
//         console.log('File saved!')
//     })

// })



//Pulled question ideas from Acceptance Criteria

//Ask for installation instructions
//Ask for Usage Information
//Ask for Contribution Guidelines
//Ask for Test instructions

//Ask for license from list of options

//Ask for gitHub username
//Ask for email




// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// this could work?

// fs.writeFile('./README.md', data, err => {
//     if (err) throw err
//     console.log('File saved!')
// })




// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
// init();
