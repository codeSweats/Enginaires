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
        inquirer.prompt([
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
            },
            {
                type: 'input',
                name: 'managerId',
                message: "Give manager's ID.",
                validate: res => {
                    const validated = res.match(
                        /^[1-9]\d*$/
                    );
                    if(validated){
                        return true;
                    }
                    return "You need to enter a number greater than 0!";
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "Give manager's Email.",
                validate: res => {
                    const validated = res.match(
                        /\S+@\S+\.\S+/
                    );
                    if(validated){
                        return true;
                    }
                    return "Please enter valid email address!";
                }
            },
            {
                type: 'input',
                name: 'managerOfficeNum',
                message: "Give manager's office number.",
                validate: res => {
                    const validated = res.match(
                        /^[1-9]\d*$/
                    );
                    if(validated){
                        return true;
                    }
                    return "You need to enter a number greater than 0!";
                }
            }
        ]).then(responses => {
            const mgr = new Manager(responses.managerName, responses.managerId, responses.managerEmail, responses.managerOfficeNum);
            myTeamMembers.push(mgr);
            idArray.push(responses.managerId);
            generateTeam();
        });
    }

    function generateTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "teamMemberType",
                message: "Which type of team member do you want to add?",
                choices: [
                    "Engineer", 
                    "Intern",
                    "I don't want to add any more members!", 
                ]
            }
        ]).then(choice => {
            switch (choice.teamMemberType) {
                case "Engineer":
                    includeEngineer(); 
                    break;
                case "Intern":
                    includeIntern();
                    break;
                default: 
                buildTheTeam();
            }
        });
    }

function includeEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Provide engineer's name.",
            validate: resp => {
                if(resp !== "") {
                    return true;
                }
                return "Enter at least one character!";
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "Give engineer's ID.",
            validate: res => {
                const validated = res.match(
                    /^[1-9]\d*$/
                );
                if(validated){
                    if(idArray.includes(res)) {
                        return "This ID is already assigned to another person! Please choose unique ID."
                    } else {
                    return true;
                }
            }
                return "You need to enter a number greater than 0!";
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Give engineer's Email.",
            validate: res => {
                const validated = res.match(
                    /\S+@\S+\.\S+/
                );
                if(validated){
                    return true;
                }
                return "Please enter valid email address!";
            }
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "Provide engineer's gitHub UserName.",
            validate: resp => {
                if(resp !== "") {
                    return true;
                }
                return "Enter at least one character!";
            }
        }
    ]).then(responses => {
        const engr = new Engineer(responses.engineerName, responses.engineerId, responses.engineerEmail, responses.engineerGitHub);
        myTeamMembers.push(engr);
        idArray.push(responses.engineerId);
        generateTeam();
    });
}

function includeIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Provide Intern's name.",
            validate: resp => {
                if(resp !== "") {
                    return true;
                }
                return "Enter at least one character!";
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "Give Intern's ID.",
            validate: res => {
                const validated = res.match(
                    /^[1-9]\d*$/
                );
                if(validated){
                    if(idArray.includes(res)) {
                        return "This ID is already assigned to another person! Please choose unique ID."
                    } else {
                    return true;
                }
            }
                return "You need to enter a number greater than 0!";
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Give Intern's Email.",
            validate: res => {
                const validated = res.match(
                    /\S+@\S+\.\S+/
                );
                if(validated){
                    return true;
                }
                return "Please enter valid email address!";
            }
        },
        {
            type: "input",
            name: "internCollege",
            message: "Provide Intern's college.",
            validate: resp => {
                if(resp !== "") {
                    return true;
                }
                return "Enter at least one character!";
            }
        }
    ]).then(responses => {
        const intern = new Intern(responses.internName, responses.internId, responses.internEmail, responses.internCollege);
        myTeamMembers.push(intern);
        idArray.push(responses.internId);
        generateTeam();
    });
}

function buildTheTeam() {
    if(!fs.existsSync(out_dir)){
        fs.mkdirSync(out_dir);
    }
    fs.writeFileSync(out_path, render(myTeamMembers), "utf-8");
}

createManager();
}
myMenu();

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