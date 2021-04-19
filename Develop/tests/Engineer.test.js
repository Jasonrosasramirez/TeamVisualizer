const Engineer = require("../lib/Employee");

test("Testing the Engineer class to see if  class works", () => {

    const eng = new Engineer();
    expect(typeof (eng)).toBe("object");

})

test("Can we grab a github using the constructor parameter", () => {

    const name = "gitHubDummyName";
    const eng = new Engineer(name); 
    expect(eng.name).toBe(name);

})