const Employee = require("./Employee"); // imports the information from the employee script 

class Engineer extends Employee { // creats an engineer class which extends the employee class.

    constructor(name, id, email, github) { //builds the engineer class using these parameters

        super(name, id, email); // super imposes pre existing to child class from employee. Imports information from employee script. 
        this.github = github; // the only unique things about the engineer class. 

    }

    getrole() { return "Engineer" } // returns the job function. 
    getGitHub() { return this.github } // returns the github file path of the engineer.

}

module.exports = Engineer; // allows the information to be exported and read by other scripts