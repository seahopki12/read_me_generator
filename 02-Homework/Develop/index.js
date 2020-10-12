var fs = require("fs");
var inquirer = require("inquirer");

// array of questions for user
const questions = [
    
];

// function to write README file
function writeToFile(fileName, data) {


// function to initialize program
function init() {
    fs.appendFile("README.md", process.argv[2] + '\n', function(err) {

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
