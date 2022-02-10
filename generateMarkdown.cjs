function renderBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "GPL") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "No License") {
    return "";
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === "MIT") {
    return `
  
  This project is covered under ${data.license}.
  <details>
    <summary>
      See License
    </summary> 
  
  \`\`\`
  Copyright <${data.year}> <${data.name}>
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  \`\`\`
  </details>
  `;
  } else if (data.license === "Apache") {
    return `
 
  This project is covered under ${data.license}.
  <details>
    <summary>
      See License
    </summary> 
  
  \`\`\`  
  Copyright [${data.year}] [${data.name}]
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    [apache link](http://www.apache.org/licenses/LICENSE-2.0)
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  \`\`\`
  </details>
  `;
  } else if (data.license === "Mozilla") {
    return `
  
  This project is covered under ${data.license}.
    
  <details>
    <summary>
      See License
    </summary> 
  
  \`\`\`
  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
  \`\`\`
  </details>
  `;
  } else if (data.license === "GPL") {
    return `
 
  This project is covered under ${data.license}.
  <details>
    <summary>
      See License
    </summary> 
  
  \`\`\`
  Copyright (C) <${data.year}>  <${data.name}>
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <[gnu license](http://www.gnu.org/licenses/)>.
  
  \`\`\`
  </details>
  `;
  } else if (data.license === "No License") {
    return "";
  }
}

function generateMarkdown(data) {
  return `
  ${renderBadge(data.license)}
#  ${data.title}
${data.tagline}

## Installation
${data.install}
    ### Run
${data.run}



## Description
${data.description}

  ## Recent Updates
${data.updates} 

## Table of Contents
  - [Installation](#howToInstall)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)



## Usage
${data.usage}
    

## Credits
  -${data.credit}


## License
${renderLicenseSection(data)}


## Tests

- ${data.tests}

## Questions

- Github profile
  ${data.github}
- Email
  ${data.email}
  
  `;
}

module.exports = generateMarkdown;
