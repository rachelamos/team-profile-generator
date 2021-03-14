const Employee = require("../lib/employee");

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

test('getName function returns name', () => {
    const employee = new Employee("Rachel", 12, "some@gmail.com");

    expect(employee.getName()).toBe("Rachel");
});

test('getId function returns id', () => {
    const employee = new Employee("Rachel", 12, "some@gmail.com");

    expect(employee.getId()).toBe(12);
});

test('getEmail function returns email', () => {
    const employee = new Employee("Rachel", 12, "some@gmail.com");

    expect(employee.getEmail()).toBe("some@gmail.com");
});

test('getRole function returns role', () => {
    const employee = new Employee("Rachel", 12, "some@gmail.com");

    expect(employee.getRole()).toBe("Employee");
});
