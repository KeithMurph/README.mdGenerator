function generateMarkdown(data){
    return`
#  ${data.title}

 ## License  ${data.license}


 ## Description
 ${data.description}

 ## Table of Contents
 - [Installation](#howToInstall)
 - [Usage](#usage)
 - [Credits](#credits)
 - [Licence](#license)
 - [Questions](#questions)

 ## Installation
 ${data.install}

 ## Usage
 ${data.usage}
    
   

 ## Credits
- ${data.credit}
- ${data.credit1}
- ${data.credit2}
- ${data.credit3}


 ## Tests

 - ${data.tests}

 ## Questions

 - Github profile
  ${data.github}

  -Email
  ${data.email}`
}

module.exports = generateMarkdown;