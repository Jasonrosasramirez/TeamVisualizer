const Manager = require("../lib/Employee");

test("Testing the Manager to see if  class works", () => {

    const emp = new Manager();
    expect(typeof (emp)).toBe("object");

})

test("Can we grab a github using the constructor parameter", () => {

    const name = "gitHubDummyName";
    const man = new Manager(name); 
    expect(man.name).toBe(name);

})
