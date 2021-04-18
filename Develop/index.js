const fs = require("fs"); // Allows work with the file system. Can Read, create, update, delete, rename files. 
const inquirer = require("inquirer"); 


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




























/* junk now. I may reference this logic later once the object class templates are brought back in. 

function init() { 
    // this should work like a decision tree. First question is manager, then 3 branching paths, 2 that iterate
    
    let questionsMemberDescription; 

    if (iterationCount == 0) {
        questionsMemberDescription = questionsManager; 
    }

    inquirer // I need to speak with your manager
    .prompt(questionsMemberDescription)
    .then((answer) => {

        var teamManager = new Manager (answer.nameManager, answer.idManager, answer.emailManager, answer.phoneManager); // builds the new manager. Only one is required for this project. 
        console.log(teamManager);

        // I can probably make this its own function and have it loop through untli the manager decides they are good
        inquirer 
        .prompt(questionsAddMember)
        .then((answer) => { 
            console.log(answer.addMemberChoice)

            if (answer.addMemberChoice == "Add Engineer") {
                inquirer
                .prompt(questionsEngineer)
                .then((answer) => { 
                    var newEngineer = new Engineer (answer.nameEngineer, answer.idEngineer, answer.emailEngineer, answer.githubEngineer);
                    console.log(newEngineer);

                    // and then it has to self loop again. Probs will use a function loop
                })
                 
            }

            else if (answer.addMemberChoice == "Add Intern") {
                inquirer
                .prompt(questionsIntern)
                .then((answer) => { 
                    var newIntern = new Intern (answer.intern, answer.idIntern, answer.emailIntern, answer.schoolIntern);
                    console.log(newIntern);

                    // and then it has to self loop again. Probs will use a function loop
                })
            } else { 
                console.log("It's time to build the page :D"); 
                // and then I call the build HTML function here
            }

        })

    })

}

init(); 

*/


