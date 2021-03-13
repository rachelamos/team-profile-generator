const inquirer = require('inquirer');
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
        newEmployee();
    })
}

function newEmployee() {
    inquirer.prompt([

    ])
}

