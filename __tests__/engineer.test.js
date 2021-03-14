const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name', 'id', 'email', and 'github' property", () => {
            const obj = new Engineer();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("github" in obj).toEqual(true);
        })
    })
});

test('can add name, id, email, and github username using the constructor', () => {
    const name = "Rachel",
    const id = 12;
    const email = "some@gmail.com";
    const github = "rachelamos";
    const engineer = new Engineer("Rachel", 12, "some@gmail.com", "rachelamos");
    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github);
});

test('getName function returns name', () => {
    const engineer = new Engineer("Rachel", 12, "some@gmail.com", "rachelamos");

    expect(engineer.getName()).toBe("Rachel");
});

test('getId function returns id', () => {
    const engineer = new Engineer("Rachel", 12, "some@gmail.com", "rachelamos");

    expect(engineer.getId()).toBe(12);
});

test('getEmail function returns email', () => {
    const engineer = new Engineer("Rachel", 12, "some@gmail.com", "rachelamos");

    expect(engineer.getEmail()).toBe("some@gmail.com");
});

test('getGithub function returns github', () => {
    const engineer = new Engineer("Rachel", 12, "some@gmail.com", "rachelamos");

    expect(engineer.getGithub()).toBe("rachelamos");
});

test('getRole function returns role', () => {
    const engineer = new Engineer("Rachel", 12, "some@gmail.com", "rachelamos");

    expect(engineer.getRole()).toBe("Engineer");
});