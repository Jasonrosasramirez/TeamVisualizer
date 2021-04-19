const Employee = require("../lib/Employee"); // the source file of what the test program will be referencing 

test("Testing the Employee to see if Employee class works", () => { // initiating test method

    const emp = new Employee(); // stores the employee data import as a variable that cannot be changed. 
    expect(typeof (emp)).toBe("object"); // sets the passing criteria for this test
    // checks to see if the object was built successfully. 
})

/* the check user inputs section of the test script. */

test("Can we grab a name using the constructor parameter", () => {

    const name = "jason"; // the name here is variable string. It doesn't matter what the variable actually is, just that it needs to be a string since the expected input will also be a string. 
    const emp = new Employee(name); // stores employee module.export as a variable.  
    expect(emp.name).toBe(name); // passing criteria 

})

test("Can we grab an ID using the constructor parameter", () => {

    const id = 626; // a dummy number to use in the test
    const emp = new Employee("jason", id); // important, because the previous variable tests are function scoped, we must use a dummy string variable here.  
    expect(emp.id).toBe(id);

})

test("Can we grab an email using the constructor parameter", () => {

    const email = "Jason@Gopher.com";
    const emp = new Employee("jason", 626, email); // dummy values entered directly for name and id before using email string. Will cause an error if there is not another dummy set est.
    expect(emp.email).toBe(email);

})

/* the get function test section of the employee.js script */

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