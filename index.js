const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const promptUser = () => {
return inquirer.prompt(questions = [
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description of the inspiration for the project and its purpose.",
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide step-by-step information on how the project was created.",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide information on how this project can be used",
        },
        {
            type: "input",
            name: "credits",
            message: "Please provide any credits or acknowledgements.",
        },
        {
            type: "input",
            name: "tests",
            message: "Please provide information on how to run tests.",
        },
        {
            type: "list",
            name: "license",
            message: "Please choose a license for your project.",
            choices: ["MIT", "Apache", "GPL", "BSD", "None"]
        },
        {
            type: "input",
            name: "Questions",
            message: "Please provide information on how to ask questions.",
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
    ])

};

// function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions)
        .then((answers) => {
            fs.writeFile(fileName, data, (err) =>
                err ? console.error(err) : console.log('Success!'))
        })
}

// function to initialize program
const init = async () => {
    console.log("Welcome to the README Generator!");
    try {
        const answers = await promptUser();
        const markdownContent = await generateMarkdown(answers);
        writeToFile("README.md", markdownContent);
        console.log("Your README has been generated!");
    } catch (error) {
        console.log(error);
    }
};

// function call to initialize program
init();
