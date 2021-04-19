const fs = require("fs"); // Allows work with the file system. Can Read, create, update, delete, rename files. 
const inquirer = require("inquirer"); 
var groupIndexOrder = 0;

/* imports the build classes to create a new employee object with certain classes. */ /*  All classes build off of the Employee.js */

const Manager = require("./lib/Manager"); // imports the information from the employee script
const Engineer = require("./lib/Engineer"); 
const Intern = require("./lib/Intern");


/* Questions that will be asked to the user */

var questionsManager = [
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

var questionsEngineer = [
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

var questionsIntern = [
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

]; 

var questionsAddMember = [
    {
        type: "list", // A list here will come out as a string. Using checklist will output results as an array, which is more work. 
        message: "Continue building your team?", 
        name: "addMemberChoice", 
        choices: ["Add Engineer", "Add Intern", "Team is Complete"]  
    }

];


/* functions that build the new employee objects */

function createManager() {
    
    inquirer 
    .prompt(questionsManager) // prompts the questions that are specific to the manager.
    .then((answer) => { // builds using this specific case. 

        var managerObject = new Manager (answer.nameManager, answer.idManager, answer.emailManager, answer.phoneManager); // creates a new object by refering the manager class variable, which references the script 
        console.log(managerObject);

    })  

}

function createEngineerObject() {
    
    inquirer 
    .prompt(questionsEngineer)
    .then((answer) => {

        var engineerObject = new Engineer (answer.nameEngineer, answer.idEngineer, answer.emailEngineer, answer.githubEngineer); 
        console.log(engineerObject);

        continueAddingMembers();

    })  

}

function createInternObject() {
    
    inquirer 
    .prompt(questionsIntern)
    .then((answer) => {

        var InternObject = new Intern (answer.nameIntern, answer.Intern, answer.emailIntern, answer.schoolIntern); 
        console.log(InternObject);

        continueAddingMembers();

    })  

}

/* brings things together */

function continueAddingMembers () {
    
    inquirer 
    .prompt(questionsAddMember) 
    .then((answer) => { 

         if (answer.addMemberChoice == "Add Engineer") {
            
            createEngineerObject();

         } 
         
         else if (answer.addMemberChoice == "Add Intern") {

            createInternObject();

         } else {
            
            console.log(" This is where the page function is called in ");

        }
                
    })

}


function promptQuestions() {
    
    inquirer 
    .prompt(questionsManager) 
    .then((answer) => { 

        var managerObject = new Manager (answer.nameManager, answer.idManager, answer.emailManager, answer.phoneManager);  
        console.log(managerObject);
        
        continueAddingMembers();
    
    })  

}

promptQuestions(); // this is the line that makes the magic happen. 


/* generate html sections */

