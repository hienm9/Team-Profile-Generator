const Employee = require("./Employee");

// add class extend of employee with github (GitHub username)
class Engineer extends Employee{
    // Engineer Constructor
    constructor(name, id, email, github ) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    // role overriden to return Engineer
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;