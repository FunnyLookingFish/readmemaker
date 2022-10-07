const inquirer = require("inquirer");
const fs = require("fs");

const markdown = require("./utils/generateMarkdown")

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Project description",
        },
        {
            type: "input",
            name: "installation",
            message: "What is the installation process?",
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use the app?",
        },
        {
            type: "input",
            name: "credits",
            message: "Who may claim credit for the project?",
        }, 
        {
            type: "checkbox",
            name: "license",
            message: "What license are you using?",
            choices: ["MIT", "Apache", "Mozilla", "none"],
        },
        {
            type: "input",
            name: "contribute",
            message: "Where to contribute?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your username in github?",
        },
    ])
.then((answers) => {
    const markdownPageContent = markdown(answers);

    fs.writeFile("README.md", markdownPageContent, (err) => err ? console.log(err) : console.log("Success! Now party!"));
})