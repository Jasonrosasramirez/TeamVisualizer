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

test("Can we grab getRole() in the engineer class", () => {

    const value = "Engineer";
    const emp = new Engineer(value); 
    expect(emp.getRole()).toBe(value);

})

test("Can we grab getGitHub() in the engineer class", () => {

    const value = "githubAddress";
    const emp = new Engineer("Engineer", value); 
    expect(emp.getRole()).toBe(value);

})

