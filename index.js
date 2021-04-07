const inquirer = require('inquirer');
const fs = require('fs');
const generateHTMLFile = require('./src/generateHTML');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const questions = ["What is the team manager's name?", "What is their employee id?", "What is their email address?", "What is their office number?", "Select an employee to add."];

const employeeQuestions = ["What is their name?", "What is their employee id?", "What is their email address?", "What is their github username?", "What school do they attend?"]

let team = [];

function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'givenName',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'id',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'office',
            message: questions[3],
        }
    ])
    .then((data) => {
        const managerInfo = new Manager(data.givenName, data.id, data.email, data.office);
        team.push(managerInfo);
        addNewEmployee();
    })
}

function addNewEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'newEmployee',
            message: questions[4],
            choices: ['Engineer', 'Intern', 'Build Team'],
        },
    ])
    .then((data) => {
        if (data.newEmployee === 'Engineer') {
            engineerQuestions();
        } else if (data.newEmployee === 'Intern') {
            internQuestions();
        } else {
            writeToFile('./dist/index.html', generateHTMLFile.createStartingHTML());
            generateHTMLFile.cardHTML();
            generateHTMLFile.createFinalHTML(); 
        }
    })
}

function engineerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'givenName',
            message: employeeQuestions[0],
        },
        {
            type: 'input',
            name: 'id',
            message: employeeQuestions[1],
        },
        {
            type: 'input',
            name: 'email',
            message: employeeQuestions[2],
        },
        {
            type: 'input',
            name: 'github',
            message: employeeQuestions[3],
        }
    ])
    .then((data) => {
        const engineerInfo = new Engineer(data.givenName, data.id, data.email, data.github);
        team.push(engineerInfo);
        addNewEmployee();
    })
}

function internQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'givenName',
            message: employeeQuestions[0],
        },
        {
            type: 'input',
            name: 'id',
            message: employeeQuestions[1],
        },
        {
            type: 'input',
            name: 'email',
            message: employeeQuestions[2],
        },
        {
            type: 'input',
            name: 'school',
            message: employeeQuestions[4],
        }
    ])
    .then((data) => {
        const internInfo = new Intern(data.givenName, data.id, data.email, data.school);
        team.push(internInfo);
        addNewEmployee();
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("index.html created!"));
}

function appendToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Commit Logged!'));
}

init();

