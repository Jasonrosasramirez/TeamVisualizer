const Manager = require("../lib/Manager"); // imports the script from the unique manager class

test("Testing the Manager to see if  class works", () => { // initiate the test method to call the function. 

    const emp = new Manager(); // emp now representatives what is exported on Manager.js
    expect(typeof (emp)).toBe("object"); // expecting the employee type to be an object to ensure the new objected was created

})

test("Can we grab a github using the constructor parameter", () => { // initiate the test method to call the function. 

    const phone = 763; // a dummy variable of the same type. In this case, the phone number will be a number
    const man = new Manager(phone); // the phone number property of Manager.js is stored as a variable  
    expect(man.phone).toBe(phone); // access the unique manager attribute (phone number in this case) and checks if the data type (number in this case, sometimes string) matches.

})
