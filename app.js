const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var employees = [];
var typeAnswers = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
console.log("Please build your team.");
//Inquirer Prompt #1

inquirer.prompt([
    {
        name: "name",
        message: "What is your manager's name?",
        type: "input"
    },

    {
        name: "id",
        message: "What is your manager's id number?",
        type: "input"
    },

    {
        name: "email",
        message: "What is your manager's email address?",
        type: "input"
    },

    {
        name: "office",
        message: "What is your manager's office number?",
        type: "input"
    }
]).then(function (managerAnswers) {
    const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.office);
    employees.push(manager);
    //Inquirer Prompt #2
    addOtherEmployees();
    function addOtherEmployees() {
        inquirer.prompt([
            {
                name: "type",
                message: "Which type of team member would you like to add?",
                type: "list",
                choices: ["Engineer", "Intern", "No more team members"]
            },
        ]).then(function (typeAnswers) {
            console.log(typeAnswers)
            if (typeAnswers.type === "Engineer") {
                //Inquirer Prompt #3
                inquirer.prompt([
                    {
                        name: "name",
                        message: "What is your engineer's name?",
                        type: "input"
                    },

                    {
                        name: "id",
                        message: "What is your engineer's id number?",
                        type: "input"
                    },
                    {
                        name: "email",
                        message: "What is your engineer's email address?",
                        type: "input"
                    },
                    {
                        name: "github",
                        message: "What is your engineer's github name?",
                        type: "input"
                    }
                ]).then(function (engineerAnswers) {
                    const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
                    employees.push(engineer);
                    addOtherEmployees();
                }

                )
            } else if (typeAnswers.type === "Intern") {
                //Inquirer Prompt #3
                inquirer.prompt([
                    {
                        name: "name",
                        message: "What is your intern's name?",
                        type: "input"
                    },

                    {
                        name: "id",
                        message: "What is your intern's id number?",
                        type: "input"
                    },
                    {
                        name: "email",
                        message: "What is your intern's email address?",
                        type: "input"
                    },
                    {
                        name: "school",
                        message: "What is your intern's school name?",
                        type: "input"
                    }
                ]).then(function (internAnswers) {
                    const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
                    employees.push(intern);
                    addOtherEmployees();
                }
                )
            } else {
                const html = render(employees);
                fs.writeFile(outputPath, html, function (err) {
                    if (err)
                        throw err;

                    console.log("Success!");
                });
            }
        })
    }
});

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
