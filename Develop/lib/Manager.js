const Employee = require("./Employee"); // imports the information from the employee script 

class Manager extends Employee { 

    constructor(name, id, email, phone) { 

        super(name, id, email); 
        this.phone = phone;  

    }

    getrole() { return "Manager" }  
    getPhone() { return this.phone } 

}

module.exports = Manager; // allows the information to be exported and read by other scripts. 