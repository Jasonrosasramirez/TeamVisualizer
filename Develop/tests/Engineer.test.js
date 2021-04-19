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