// dependencies
const inquirer = require('inquirer');
const fs = require('fs');
// markdown template
const generateMarkdown = require("./generateMarkdown")
// questions / inquirer promt
const questions =[
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
             choices: ["BSD", "MIT", "GPL"]

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
    ];
    // write data(answers)
    function writeToFile(fileName, data){
        fs.writeFile(fileName, data, function(err){
            if (err) {
                return console.log(err);
            }
            console.log("Successfully wrote: "+ fileName);
        })
    }
// generate markdown file

    function init(){
        inquirer.prompt(questions)
        .then(function(data){
            writeToFile("sampleREADME.md", generateMarkdown(data));
        })
    }
    // .then((answers) => {
    //     const MarkdownPageContent = generateMarkdown(answers);

    //    fs.writeToFile('README.md', MarkdownPageContent({...answers}), (err) =>
    //     err ? console.log(err) : console.log('Succesfully created README.md!')
    //    );
    // });
// initialize app
init();