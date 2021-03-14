const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name', 'id', 'email', and 'school' property", () => {
            const obj = new Intern();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);
        })
    })
});

test('can add name, id, email, and school using the constructor', () => {
    const name = "Rachel",
    const id = 12;
    const email = "some@gmail.com";
    const school = "Texas A&M";
    const intern = new Intern("Rachel", 12, "some@gmail.com", "Texas A&M");
    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);
});

test('getName function returns name', () => {
    const intern = new Intern("Rachel", 12, "some@gmail.com", "Texas A&M");

    expect(intern.getName()).toBe("Rachel");
});

test('getId function returns id', () => {
    const intern = new Intern("Rachel", 12, "some@gmail.com", "Texas A&M");

    expect(intern.getId()).toBe("12");
});

test('getEmail function returns email', () => {
    const intern = new Intern("Rachel", 12, "some@gmail.com", "Texas A&M");

    expect(intern.getEmail()).toBe("some@gmail.com");
});

test('getSchool function returns school', () => {
    const intern = new Intern("Rachel", 12, "some@gmail.com", "Texas A&M");

    expect(intern.getGithub()).toBe("Texas A&M");
});

test('getRole function returns role', () => {
    const intern = new Intern("Rachel", 12, "some@gmail.com", "Texas A&M");

    expect(intern.getRole()).toBe("Intern");
});