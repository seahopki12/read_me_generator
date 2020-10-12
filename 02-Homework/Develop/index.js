var fs = require("fs");
var inquirer = require("inquirer");

// array of questions for user
// const questions = [
//     "What is the title of your project? ", "Please write a description for your project: ", "Please include any installation instructions for your project: ", "Please include any usage information for your project: ", "Please include any contribution guidelines for your project: ", "Please include any test instructions for your project: ", "Please select any necessary licenses from the list below for your application: ", "Please enter your GitHub username: ", "Please enter your email address: "
// ];
// const names = ["title", "description", "installation", "usage", "contribution", "test", "licenses", "github", "email"];
// const types = ["input", "input", "input", "input", "input", "input", "input", "checkbox", "input", "input"];


// function to write README file
// function writeToFile(fileName, data) {

//     fs.appendFile("README.md", , function (error) {

//         if (error) {
//             console.log(error);
//         }
//         else {
//             console.log("Your README file was successfully created!");
//         }

//     });
// };


// function to initialize program
function init() {
    // Loops through the prompts
    // for (let i = 0; i < questions.length - 1; i++) {
        inquirer
            .prompt([
                
                // {
                //     type: types[i],
                //     name: names[i],
                //     message: questions[i],
                //     choices: [
                //         "Open Database License",
                //         "Mozilla Public License 2.0",
                //         "The MIT License",
                //         "ISC License"
                //     ]
                // }

                {
                    type: "input",
                    name: "title",
                    message: "What is the title of your project? "
                },
                {
                    type: "input",
                    name: "description",
                    message: "Please write a description for your project: "
                },
                {
                    type: "input",
                    name: "installation",
                    message: "Please include any installation instructions for your project: "
                },
                {
                    type: "input",
                    name: "usage",
                    message: "Please include any usage information for your project: "
                },
                {
                    type: "input",
                    name: "contribution",
                    message: "Please include any contribution guidelines for your project: "
                },
                {
                    type: "input",
                    name: "test",
                    message: "Please include any test instructions for your project: "
                },
                {
                    type: "checkbox",
                    name: "licenses",
                    message: "Please select any necessary licenses from the list below for your application: ",
                    choices: [
                                "Open Database License",
                                "Mozilla Public License 2.0",
                                "The MIT License",
                                "ISC License"
                    ]
                },
                {
                    type: "input",
                    name: "github",
                    message: "Please enter your GitHub username: "
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please enter your email address: "
                },
            ]).then(function (response) {
                console.log(response);
                // Creates the README file
                // fs.writeFile(`${}`, function (error) {
                //     if (error) {
                //         throw error;
                //     }
                // });
            })
    };
// }

// function call to initialize program
init();
