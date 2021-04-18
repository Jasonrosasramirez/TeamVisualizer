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

test("Can we grab getName() in the employee class", () => {

    const value = "Jason";
    const emp = new Employee(value); 
    expect(emp.getName()).toBe(value);

})

test("Can we grab getId() in the employee class", () => {

    const value = 8011;
    const emp = new Employee("Jason", value); 
    expect(emp.getId()).toBe(value);

})

test("Can we grab getEmail() in the employee class", () => {

    const value = "jason@Gopher.com";
    const emp = new Employee("Jason", 8011, value); 
    expect(emp.getEmail()).toBe(value);

})

test("Can we grab getrole() in the employee class", () => {

    const value = "Employee";
    const emp = new Employee("Jason", 8011, "jason@Gopher.com", value); 
    expect(emp.getrole()).toBe(value);

})