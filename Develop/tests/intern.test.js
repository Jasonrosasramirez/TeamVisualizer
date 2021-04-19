const Intern = require("../lib/Intern");

test("Testing the Engineer class to see if  class works", () => {

    const int = new Intern();
    expect(typeof (int)).toBe("object");

})

test("Can we grab an intern using the constructor parameter", () => {

    const school = "University";
    const int = new Intern(school); 
    expect(int.school).toBe(school);

})

test("Can we grab getRole() in the intern class", () => {

    const value = "Intern";
    const int = new Intern(value); 
    expect(int.getRole()).toBe(value);

})

test("Can we grab getSchool() in the intern class", () => {

    const value = "ofMinnesota";
    const int = new Intern("Intern", value); 
    expect(int.getRole()).toBe(value);

})