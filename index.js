// Packages needed for this application
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

// Constructors
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Create empty arrays for team and id as place holders
const teamMembers = [];
const ids = [];

// Start application
function init() {

    // Prompt user to create a manager when starting the application
    function createManager() {
        console.log("Start to build your team profile");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Enter the manager's name",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the team's manager's name.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "Enter the manager's ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the team's Manager's ID.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Enter the manager's email",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the manager's email.";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Enter the manager's office number? (format 9 numbers: 2224446666)",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please re-enter the correct phone number.";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            ids.push(answers.managerId);
            // call function to create team
            createTeam();
        });
    }

    // function create team after manager added
    function createTeam(){
        inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Select a team member-type to add next",
            choices: [
                "Engineer",
                "Intern",
                "No additional team member type. Close application"
            ]
        }    
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    displayTeam();
            }
        });
    }
// TODO add engineer team
    function addEngineer(){

    }

// TODO add intern team
    function addIntern() {

    }

// TODO display team
    function displayTeam() {

    }


    createManager();
}
init();