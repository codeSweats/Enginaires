// Node packages needed
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');


const questions = [
    {
    message: "Team manager's name?",
    name: 'Employee'
    },
    {
    message: 'Employee I.D.?',
    name: 'I.D.'
    },
    {
    message: 'Email address?',
    name: 'Email'
    },
    {
    message: 'Office number?',
    name: 'Office number'
    },
    {
    type: 'list',
    message: 'Next steps?',
    choices: ['Add engineer', 'Add intern', 'Finish building team']
    }
]

// fs write file method with path method passed as argument
function writeToFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Declaring function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
    console.log('Generating HTML Now!');
    writeToFile('index.HTML', generateMarkdown({... response}))
});
}

// Function call to initialize app
init();