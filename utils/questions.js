const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description for your READEME.md?',
        name: 'description',
    },
    {
       type: 'input',
        message: 'Please tell me about your project?',
        name: 'about',
    },
    {
        type: 'input',
        message: 'Installation insturctions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What link can I use to clone your repo??',
        name: 'repolink',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select any licences used?',
        choices: [
          'Apache',
          'Boost',
          'GNU AGPLv3',
          'GNU LGPLv3',
          'GNU GPLv3',
          'MIT',
          'Mozilla',
          'none',
        ],
    },
    {
        type: 'input', 
        message: 'test?',
        name: 'test',
    },
    {
        type: 'input', 
        message: 'Who is the author, any contributors?',
        name: 'author',
    },
    {
        type: 'input', 
        message: 'What is your GitHub username?',
        name: 'gituser',
    },
    {
        type: 'input', 
        message: 'What is your GitHub email?',
        name: 'giturl',
    },
]

module.exports = questions;