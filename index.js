// Node packages needed
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const out_dir = path.resolve(__dirname, 'output');
const out_path = path.join(__outdir, 'team.HTML');
const renderPage = require('./src/pageTemplate.js');

const myTeamMembers = [];
const idArray = [];
function myMenu() {
    function createManager() {
        console.log('Build the Team');
        inquirer.prompt({
            {
                type: 'input',
                name: 'managerName',
                message: "Give manager's name.",
                validate: res => {
                    if(res !== ""){
                        return true
                    }
                    return 'Please enter at least one character!'
                }
            }
        })
    }
}


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