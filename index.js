#!/usr/bin/env node

// dependencies
import inquirer from 'inquirer';

import fs from 'fs';
// markdown template
import generateMarkdown from "./generateMarkdown.cjs"
// questions / inquirer prompt
const questions = [{
        type: 'confirm',
        name: 'confirm',
        message: 'Would you like to write a README.md?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects Title?'

    },
    {
        type: 'list',
        name: 'license',
        message: 'Project License?',
        choices: ["BSD", "MIT", "GPL"]

    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?'

    },
    {
        type: 'input',
        name: 'install/dependencies',
        message: 'How to Install?'

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage?'

    },
    {
        type: 'input',
        name: 'credit',
        message: 'Contributing developers?'

    },


    {
        type: 'input',
        name: 'tests',
        message: 'Tests?'

    },
    {
        type: 'input',
        name: 'github',
        message: 'Github Profile?'

    },
    {
        type: 'input',
        name: 'email',
        message: 'Professional Email?'

    },
];
// write data(answers)
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully wrote: " + fileName);
    })
}
// generate markdown file

function init() {
    inquirer.prompt(questions)
        .then(function (data) {
           console.log("%cDont forget to add screenshots!", "color: white; background-color: #26bfa5;");
            writeToFile("sample/readme.md", generateMarkdown(data));
        })
}

init();