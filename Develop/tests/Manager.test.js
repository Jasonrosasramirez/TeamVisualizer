const Manager = require("../lib/Manager");

test("Testing the Manager to see if  class works", () => {

    const emp = new Manager();
    expect(typeof (emp)).toBe("object");

})

test("Can we grab a github using the constructor parameter", () => {

    const phone = 763;
    const man = new Manager(phone); 
    expect(man.phone).toBe(phone);

})
