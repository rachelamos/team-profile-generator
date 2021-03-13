// const { expect } = require("@jest/globals");
// const { describe } = require("yargs");
const Employee = require("../employee");

describe('Employee', () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name', 'id', and 'email' property when called with the 'new' keyword", () => {
            const obj = new Employee();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
        });
    });
    
});

test('can add name, id, and email using the constructor', () => {
    const name = "Rachel";
    const id = 12;
    const email = "some@gmail.com";
    const employee = new Employee("Rachel", 12, "some@gmail.com");
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
});
