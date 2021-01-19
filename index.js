
// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [
    {
    type: "input",
    message: "Please, enter your project title:",
    name: "Title"
    },
    {
    type: "input",
    message: "Describe your application",
    name: "Description"
    },
    {
    type: "input",
    message: "Provide installation process info",
    name: "Installation"
    },
    {
    type: "input",
    message: "It's helpful to have inline the smallest example of usage that you can demonstrate.",
    name: "Usage"
    },
    {
    type: "input",
    message: "Who was involved in the making of this code?",
    name: "Credits"
    },
    {
    type: "list",
    message: "What license do you have",
    name: "License",
    choices: [
        "MIT",
        "GPLv3",
        "Apache License 2.0",
        "BSD" 
    ]
    },
    {
    type: "input",
    message: "Enter the contribution guidelines",
    name: "Contributing"
    },
    {
    type: "input",
    message: "Include tests here",
    name: "Tests"
    },
    {
    type: "input",
    message: "What is your Email Address?",
    name: "Contact"
    },
    {
    type: "input",
   message: "Enter your GitHub username",
    name: "Questions"
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).
    then(answers => {
        console.log(answers)
        const read = generateMarkdown(answers)

        fs.writeFile('output/readme.md', read , 'utf8', err => {
            if (err) {
                throw err;
            }
        });
    })
 }


// Function call to initialize app
init();

