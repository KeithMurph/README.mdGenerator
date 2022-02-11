#!/usr/bin/env node

// dependencies
import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';

import generateMarkdown from "./generateMarkdown.cjs"

// questions / inquirer prompt
const questions = [{
        type: 'text',
        name: 'confirm',
        message: `${chalk.green('Lets write a README.md')}`
    },
    {
        type: 'text',
        name: 'note',
        message: `${chalk.red('WARNING if README.md or readme.md already exists at C:/Users/user it will be overwritten!' )}`
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
        message: 'What is your name?' + `${chalk.yellow('(for license)')}`
    },
    {
        type: 'input',
        name: 'year',
        message: 'Enter date?'  + `${chalk.yellow('(for license)')}`
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Project description?'

    },
    {
        type: 'input',
        name: 'tagline',
        message: 'Tagline?' + `${chalk.yellow('(First public line if publishing as package on npmjs.com)')}`

    },
    {
        type: 'input',
        name: 'updates',
        message: 'Recent updates?'

    },
    {
        type: 'input',
        name: 'install',
        message: 'How to Install?'

    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'List Used Dependencies?'

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
        console.log(`${chalk.green('Successfully wrote file!')} ` + fileName +  ` ${chalk.green('C:/Users/user')}`);
    })
}
// generate markdown file

function init() {
    inquirer.prompt(questions)
        .then(function (data) {
           console.log(`${chalk.yellowBright('Dont forget to add screenshots!')}`)
            writeToFile("README.md", generateMarkdown(data));
        })
}

init();