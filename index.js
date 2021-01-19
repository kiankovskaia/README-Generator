
// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [
    {
    type: "input",
    question: "Please, enter your project title:",
    name: "Title"
    },
    {
    type: "input",
    question: "Describe your application",
    name: "Description"
    },
    {
    type: "input",
    question: "Provide installation process info",
    name: "Installation"
    },
    {
    type: "input",
    question: "It's helpful to have inline the smallest example of usage that you can demonstrate.",
    name: "Usage"
    },
    {
    type: "input",
    question: "Who was involved in the making of this code?",
    name: "Credits"
    },
    {
    type: "list",
    question: "What license do you have",
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
    question: "Enter the contribution guidelines",
    name: "Contributing"
    },
    {
    type: "input",
    question: "Include tests here",
    name: "Tests"
    },
    {
    type: "input",
    question: "What is your Email Address?",
    name: "Contact"
    },
    {
    type: "input",
    question: "Enter your GitHub username",
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

