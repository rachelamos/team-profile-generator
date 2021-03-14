const fs = require('fs');
let cards = [];
let empCard = [];

function makeCards(team) {
    for (let i = 0; i < team.length; i++){
        if(team[i].getRole() === "Manager"){
            empCard[i] =
            `<div class="col">
                <div class="card-body" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${team[i].getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${team[i].getRole()}</h6>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${team[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${team[i].officeNumber}</li>
                    </ul>
                </div>
            </div>`
        }
        else if(team[i].getRole() === "Engineer"){
            empCard[i] =
            `<div class="col">
                <div class="card-body" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${team[i].getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${team[i].getRole()}</h6>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${team[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${team[i].github}" target="_blank">${team[i].github}</a></li>
                    </ul>
                </div>
            </div>`
        }
        else if(team[i].getRole() === "Intern"){
            empCard[i] =
            `<div class="col">
                <div class="card-body" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${team[i].getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${team[i].getRole()}</h6>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${team[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
                        <li class="list-group-item">School: ${team[i].school}</li>
                    </ul>
                </div>
            </div>`
        }
        cards.push(empCard[i]);
    }
}

function createStartingHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">My Team</span>
            </div>
        </nav>
    <div class="row">`
}

function cardHTML() {
    for(let i = 0; i < empCard.length; i++){
        appendToFile("./dist/index.html", empCard[i].toString());
    }
}

function appendToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Commit logged!'));
}

function createFinalHTML() {
    appendToFile("./dist/index.html",
    `<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    </body>
    </html>`);
}

module.exports = {makeCards, createStartingHTML, cardHTML, createFinalHTML};