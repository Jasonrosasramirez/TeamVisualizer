const Employee = require("../lib/Employee");

test("Testing the Employee to see if Employee class works", () => {

    const emp = new Employee();
    expect(typeof (emp)).toBe("object");

})

test("Can we grab a name using the constructor parameter", () => {

    const name = "jason";
    const emp = new Employee(name); 
    expect(emp.name).toBe(name);

})

test("Can we grab an ID using the constructor parameter", () => {

    const id = 626;
    const emp = new Employee("jason", id); 
    expect(emp.id).toBe(id);

})

test("Can we grab an email using the constructor parameter", () => {

    const email = "Jason@Gopher.com";
    const emp = new Employee("jason", 626, email); 
    expect(emp.email).toBe(email);

})

