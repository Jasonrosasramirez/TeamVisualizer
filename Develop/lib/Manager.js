const Employee = require("./Employee"); // imports the information from the employee script 

class Manager extends Employee { // the manager class builds upon what the employee class was. A literal externsion when the objects are created.

    constructor(name, id, email, phone) { // Constructor builds the class using the following parameters. 

        super(name, id, email); // name, id, and email are coming from the employee class script 
        this.phone = phone; // Manager will have a unique value of needing a phone. So this can be added is like normal.  

    }

    getrole() { return "Manager" } // returns the role of manager  
    getPhone() { return this.phone } // returns the property of the phone number that is entered

}

module.exports = Manager; // allows the information to be exported and read by other scripts. 
// more specifically, the script.js file can get information from this export. 