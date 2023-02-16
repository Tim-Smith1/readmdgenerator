const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');
//const { title } = require('process');


inquirer
    .prompt(questions)

.then((data) => {
    //function writeToFile(fileName, data) {}
    fs.writeFile(`${data.title}.md`, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('README.md Created!'))
  }
  ); 



// TODO: Create an array of questions for user input
//const questions = [];


// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();