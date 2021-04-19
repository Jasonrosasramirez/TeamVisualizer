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