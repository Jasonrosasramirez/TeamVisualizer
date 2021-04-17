const Employee = require("./Employee"); //

class Engineer extends Employee { //

    constructor(name, id, email, github) { //

        super(name, id, email); // auper imposes pre existing to child class from employee 
        this.github = github;

    }

    getrole() { return "Engineer" }
    getGitHub() { return this.github }

}

module.exports = Engineer;