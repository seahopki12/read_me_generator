var fs = require("fs");
var inquirer = require("inquirer");

// array of questions for user
const questions = [
    "What is the title of your project? ", "Please write a description for your project: ", "Please include any installation instructions for your project: ", "Please include any usage information for your project: ", "Please include any contribution guidelines for your project: ", "Please include any test instructions for your project: ", "Please select any necessary licenses from the list below for your application: ", "Please enter your GitHub username: ", "Please enter your email address: "
];

// function to write README file
function writeToFile(fileName, data) {


    // function to initialize program
    function init() {
        fs.appendFile("README.md", process.argv[2] + '\n', function (err) {

            if (error) {
                console.log(error);
            }
            else {
                console.log("Your README file was successfully created!");
            }

        });
    }

    // function call to initialize program
    init();
