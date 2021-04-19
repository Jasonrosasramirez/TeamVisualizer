const Engineer = require("../lib/Engineer");

test("Testing the Engineer class to see if  class works", () => {

    const eng = new Engineer();
    expect(typeof (eng)).toBe("object");

})

test("Can we grab a github using the constructor parameter", () => {

    const github = "gitHubDummyName";
    const eng = new Engineer(github); 
    expect(eng.github).toBe(github);

})

test("Can we grab getRole() in the employee class", () => {

    const value = "Engineer";
    const emp = new Employee(value); 
    expect(emp.getRole()).toBe(value);

})

