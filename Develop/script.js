console.log("Hello workd. I am the console");

// const fs = require("fs"); // Allows work with the file system. Can Read, create, update, delete, rename files. 
// const inquirer = require("inquirer"); 

const questionsManager = [
    // questions needed

    {
        type: "input", 
        message: "What is the team manager's name?",
        name: "nameManager"
    }, 

    {
        type: "input", 
        message: "What is the team manager's employee ID?",
        name: "idManager"
    },
    
    {
        type: "input", 
        message: "What is the team manager's email address?",
        name: "emailManager"
    },

    {
        type: "input", 
        message: "What is the team manager's office number?",
        name: "phoneManager"
    }

    /*
    first thing that happens team manager's attributes are asked
        name
        employee id
        email address
        office number

    */

]; 

const questionsEngineer = [
    // questions needed

    {
        type: "input", 
        message: "What is the engineer's name?",
        name: "nameEngineer"
    }, 

    {
        type: "input", 
        message: "What is the engineer's employee ID?",
        name: "idEngineer"
    },
    
    {
        type: "input", 
        message: "What is the engineer's email address?",
        name: "emailEngineer"
    },

    {
        type: "input", 
        message: "What is the engineer's GitHub?",
        name: "githubEngineer"
    }

    /*
    
    done building team roster
        yes
        no 

    intern card
        name
        ID 
        email address
        school 

    finised building team? 
        yes, display page 
        no, loop again

    */


]; 

const questionsIntern = [
    // questions needed

    {
        type: "input", 
        message: "What is the intern's name?",
        name: "nameIntern"
    }, 

    {
        type: "input", 
        message: "What is the intern's employee ID?",
        name: "idIntern"
    },
    
    {
        type: "input", 
        message: "What is the intern's email address?",
        name: "emailIntern"
    },

    {
        type: "input", 
        message: "What is the Intern's school?",
        name: "schoolIntern"
    }

    /*
    
    done building team roster
        yes
        no 

    finised building team? 
        yes, display page 
        no, loop again

    */

]; 


console.log(questionsManager);
console.log(questionsEngineer);
console.log(questionsIntern);