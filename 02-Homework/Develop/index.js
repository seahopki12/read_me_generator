var fs = require("fs");
var inquirer = require("inquirer");

// array of questions for user
const questions = [
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
    }
];



// function to write README file
function writeToFile(fileName, data) {
    // Creates the README file
    fs.writeFile(fileName, data, function (error) {
        if (error) {
            throw error;
        };
    });
    // fs.appendFile('README.md', `# ${response.title}`, function (error) {
    //     if (error) {
    //         throw error;
    //     };
    // });

};


// function to initialize program
function init() {
    // Loops through the prompts
    // for (let i = 0; i < questions.length - 1; i++) {
    inquirer
        .prompt(questions).then(function (response) {
            console.log(response);
            let readme = `# * ${response.title}`;
            writeToFile("README.md", readme);
        });
};
// }

// function call to initialize program
init();
