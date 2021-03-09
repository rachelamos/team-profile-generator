class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`This employee's name is ${this.name}.`);
    }

    getId() {
        console.log(`This employee's ID is ${this.id}.`);
    }

    getEmail() {
        console.log(`This employee's email is ${this.email}.`);
    }

    getRole() {
        console.log(`This employee's role is ${this.role}.`);
    }
}

module.exports = Employee;