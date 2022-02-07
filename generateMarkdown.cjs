function generateMarkdown(data) {
  return `
#  ${data.title}

 ## License  ${data.license}


 ## Description
 ${data.description}

 ## Table of Contents
 - [Installation](#howToInstall)
 - [Usage](#usage)
 - [Credits](#credits)
 - [License](#license)
 - [Questions](#questions)

 ## Installation
 ${data.install}

 ## Usage
 ${data.usage}
    
   

 ## Credits
- ${data.credit}



 ## Tests

 - ${data.tests}

 ## Questions

 - Github profile
  ${data.github}

  -Email
  ${data.email}`
}

module.exports = generateMarkdown;