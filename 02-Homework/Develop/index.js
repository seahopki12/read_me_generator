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
};


// function to initialize program
function init() {
    inquirer
        .prompt(questions).then(function (response) {
            console.log(response);
            let badges = [];
            // response.licenses.forEach(function (){
                if (response.licenses.includes("Open Database License")){
                    badges.push("[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)");
                } 
                if (response.licenses.includes("Mozilla Public License 2.0")){
                    badges.push("[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)");
                } 
                if (response.licenses.includes("The MIT License")){
                    badges.push("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
                } 
                if (response.licenses.includes("ISC License")){
                    badges.push("[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)");
                };
            // })
            
            let readme = `# ${response.title}
## Table of Contents
${badges}
* [Description](#description)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [Licenses](#licenses)
* [Questions](#questions)
## Description
${response.description}
## Installation Instructions
${response.installation}
## Usage Information
${response.usage}
## Contribution Guidelines
${response.contribution}
## Test Instructions
${response.test}
## Licenses
${response.licenses}
## Questions
[${response.github}](https://github.com/${response.github})

[${response.email}](${response.email})`;


            // function badgeSelection() {
            //     let badges = ["[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
            //         "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
            //         "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
            //         "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
            //     ];
            //     let badgesReal = [];
            //     if (response.licenses.includes("Open Database License") {
            //         badgesReal.push(badges[0]);
            //     }) else if (response.licenses.includes("Mozilla Public License 2.0") {
            //         badgesReal.push(badges[1]);
            //     })
            // }

            writeToFile("README.md", readme);
        });
};
// }

// function call to initialize program
init();
