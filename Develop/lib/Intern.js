const Employee = require("./Employee"); // imports the information from the employee script 

class Intern extends Employee { 

    constructor(name, id, email, school) { 

        super(name, id, email); 
        this.school = school;  

    }

    getrole() { return "Intern" }  
    getSchool() { return this.school } 

}

module.exports = Intern; // allows the information to be exported and read by other scripts. 