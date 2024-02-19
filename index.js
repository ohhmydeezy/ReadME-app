const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description of your project.",
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide installation instructions.",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide usage information.",
        },
        {
            type: "input",
            name: "contributing",
            message: "Please provide contribution guidelines.",
        },
        {
            type: "input",
            name: "tests",
            message: "Please provide test instructions.",
        },
        {
            type: "list",
            name: "license",
            message: "Please choose a license for your project.",
            choices: ["MIT", "Apache", "GPL", "BSD", "None"]
        },
        {
            type: "input",
            name: "github",
            message: "Please provide your GitHub username.",
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email address.",
        },
        {
            type: "input",
            name: "linkedin",
            message: "Please provide your LinkedIn URL.",
        },
        {
            type: "input",
            name: "credits",
            message: "Please provide any credits or acknowledgements.",
        },
    ])

];
// function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions)
        .then((answers) => {
            fs.writeFile(fileName, data, (err) =>
                err ? console.error(err) : console.log('Success!'))
        })
}

// function to initialize program
function init() {
    writeToFile("README.md", generateMarkdown);
}

// function call to initialize program
init();
