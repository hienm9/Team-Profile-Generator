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
// add engineer team (include name, id, email, github)
    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Enter the engineer's name",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "Enter the engineer's id",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character for id.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Enter the engineer's email",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character for email.";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Enter the engineer's GitHub username",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character for the GitHub username.";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            ids.push(answers.engineerId);
            createTeam();
        });
    }

// add intern team (include name, id, email, school)
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Enter the intern's name",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character for the name";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "Enter the intern's id",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character for id.";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "Enter the intern's email",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character for email.";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "Enter the intern's school",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character for the school.";
                }
            }
        ]).then(answers => {
            const intern = new intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            ids.push(answers.internId);
            createTeam();
        });
    }

// TODO display team to a html file to the dist directory
    function displayTeam() {

    }


    createManager();
}
init();