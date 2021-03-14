const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name', 'id', 'email', and 'officeNumber' property", () => {
            const obj = new Manager();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("officeNumber" in obj).toEqual(true);
        })
    })
});

test('can add name, id, email, and officeNumber using the constructor', () => {
    const name = "Rachel";
    const id = 12;
    const email = "some@gmail.com";
    const officeNumber = 1;
    const manager = new Manager("Rachel", 12, "some@gmail.com", 1);
    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
    expect(manager.officeNumber).toBe(officeNumber);
});

test('getName function returns name', () => {
    const manager = new Manager("Rachel", 12, "some@gmail.com", 1);

    expect(manager.getName()).toBe("Rachel");
});

test('getId function returns id', () => {
    const manager = new Manager("Rachel", 12, "some@gmail.com", 1);

    expect(manager.getId()).toBe(12);
});

test('getEmail function returns email', () => {
    const manager = new Manager("Rachel", 12, "some@gmail.com", 1);

    expect(manager.getEmail()).toBe("some@gmail.com");
});

test('getRole function returns role', () => {
    const manager = new Manager("Rachel", 12, "some@gmail.com", "rachelamos");

    expect(manager.getRole()).toBe("Manager");
});