const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');
//const renderLicenseBadge = require('./utils/renderLicenseBadge');

function init() {
inquirer
    .prompt(questions)
    
.then((data) => {
    
    fs.writeFile(`README.md`, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('README.md Created!'))
    //data.renderLicenseBadge = renderLicenseBadge(data.license);
  }
  );  
}
  //renderLicenseBadge(data.license)

// Function call to initialize app
init();
