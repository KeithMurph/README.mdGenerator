const inquirer = require('inquirer');
const fs = require(`fs`);

const generateMarkdown = (answers) 


`#  ${answers.title}

## License ${answers.license}


## Description
${answers.description}

## Table of Contents
- [Installation](#howToInstall)
- [Usage](#usage)
- [Credits](#credits)
- [Licence](#license)
- [Questions](#questions)

## Installation
${answers.install}

## Usage
${answers.usage}
    
   

## Credits
- ${answers.credit}
- ${answers.credit1}
- ${answers.credit2}
- ${answers.credit3}


## Tests

- ${answers.tests}

## Questions

- Github profile
 ${answers.github}

 -Email
 ${answers.email}`;



inquirer
    .prompt([
        {
            type:'confirm',
            name:'confirm',
            message:'Would you like to write a README.md?'
        },
        {
            type:'input',
            name:'title',
            message:'What is your projects Title?'

        },
        {
            type:'list',
            name:'license',
            message:'Project License?',
            choices: [BSD, MIT, GPL]

        },
        {
            type:'input',
            name:'description',
            message:'Project description?'

        },
        {
            type:'input',
            name:'install',
            message:'How to Install?'

        },
        {
            type:'input',
            name:'usage',
            message:'Usage?'

        },
        {
            type:'input',
            name:'credit',
            message:'Contributing developers?'

        },
        {
            type:'input',
            name:'credit1',
            message:'Contributing developers?'

        },
        {
            type:'input',
            name:'credit2',
            message:'Contributing developers?'

        },
        {
            type:'input',
            name:'credit3',
            message:'Contributing developers?'

        },
        {
            type:'input',
            name:'tests',
            message:'Tests?'

        },
        {
            type:'input',
            name:'github',
            message:'Github Profile?'

        },
        {
            type:'input',
            name:'email',
            message:'Professional Email?'

        },
    ])
    .then((answers) => {
        const MarkdownPageContent = generateMarkdown(answers);

       fs.writeToFile('README.md', MarkdownPageContent, (err) =>
        err ? console.log(err) : console.log('Succesfully created README.md!')
       );
    });
