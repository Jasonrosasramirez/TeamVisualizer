const Intern = require("../lib/Employee");

test("Testing the Engineer class to see if  class works", () => {

    const int = new Intern();
    expect(typeof (int)).toBe("object");

})

test("Can we grab an intern using the constructor parameter", () => {

    const name = "gitHubDummyName";
    const int = new Intern(name); 
    expect(int.name).toBe(name);

})