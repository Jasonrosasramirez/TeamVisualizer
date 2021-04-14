console.log("Hello workd. I am the console");

// const fs = require("fs"); // Allows work with the file system. Can Read, create, update, delete, rename files. 
const inquirer = require("inquirer"); 

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
    
    list selection of positions 
        engineer
        intern

    engineer card
        name
        ID
        email
        GitHub

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
