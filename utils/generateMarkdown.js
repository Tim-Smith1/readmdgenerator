function renderLicenseBadge(license) 
{
  if (license === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

  ${data.description}

  ${renderLicenseBadge(data.license)}

  [A deployed version can be viewed here.](${data.URL})
  
---
## Contents
1. [About](#about)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Authors and Acknowledgments](#authors-and-acknowledgments)
---
## About
  ${data.about}
---
## Installation:
  ${data.installation}

  To clone the repo:
  
      git clone ${data.repolink}
  
      This app is dependant on -npm i inquirer@8.2.4
---
## Usage

I want to create a README generator
So that I can quickly create a professional README.md file for a new projects
---
## License
  License used for this project - ${data.license}

  ${renderLicenseBadge(data.license)}

  * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).
---
## Contributing:
  
  If you would like to contribute to this application, create a pull.
  Here is what you need to do:
  - Create a Fork the repo
  - Make a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature message')
  - Push your branch (git push)
  - Create a new Pull Request
  After a code review, your feature may be merged.
---
## Tests:
  ${data.test}
---
## Authors and Acknowledgments
  ${data.author}
---
## Contact Information:
* GitHub Username: ${data.gituser}
* GitHub Email: ${data.giturl}
  
`;
}



module.exports = generateMarkdown;
