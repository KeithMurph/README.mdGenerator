#!/usr/bin/env node

// dependencies
import inquirer from 'inquirer';

import fs from 'fs';
// markdown template
import generateMarkdown from "./generateMarkdown.cjs"
// import sample from "./sample"
// questions / inquirer prompt
const questions = [{
        type: 'message',
        name: 'confirm',
        message: 'Lets write your README.md'
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
        choices: ["MIT", "Apache", "Mozilla", "GPL","No License"]

    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'year',
        message: 'Enter date?'
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Complete Project description?'

    },
    {
        type: 'input',
        name: 'tagline',
        message: 'Tagline? (1 to 2 Sentences max!)'

    },
    {
        type: 'input',
        name: 'updates',
        message: 'Any notable updates?'

    },
    {
        type: 'input',
        name: 'install',
        message: 'How to Install?'

    },
    {
        type: 'input',
        name: 'run',
        message: 'How to run?'

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage/Intended Audience?'

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
            writeToFile("readme.md", generateMarkdown(data));
        })
}

init();