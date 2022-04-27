// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');

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

const data = [];

inquirer.prompt(questions)
    .then(answers => {
        data.push(answers);
        generateMarkdown(data);
    });



//Pulled question ideas from Acceptance Criteria

//Ask for installation instructions
//Ask for Usage Information
//Ask for Contribution Guidelines
//Ask for Test instructions

//Ask for license from list of options

//Ask for gitHub username
//Ask for email


//TODO: Generate Markdown testing
function generateMarkdown() {

    const content =
        `# ${data[0].projectTitle}
Description: ${data[0].projectDescription}
`;

    fs.writeFile('./README.md', content, err => {
        if (err) throw err
        console.log('File saved!')
    })
}


// TODO: Create a function to write README file
// function writeToFile() {


//     fs.writeFile('./README.md', content, err => {
//         if (err) throw err
//         console.log('File saved!')
//     })

// }


// TODO: Create a function to initialize app
// function init() {
//     writeToFile();
// }

// Function call to initialize app
// init();
