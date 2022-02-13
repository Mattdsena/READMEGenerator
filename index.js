const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Please enter installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter usage infomation:",
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license to use:",
      choices: ["GNU  2.0", "GNU  3.0", "MIT", "Apache License 2.0"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Please enter contribution guidelines:",
    },
    {
      type: "input",
      name: "tests",
      message: "Please enter tests instructions:",
    },
    {
      type: "input",
      name: "gitHubName",
      message: "Please enter your GitHub account name:",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email:",
    },
  ])
  .then(function (answer) {
    if (answer.license === "GNU  2.0") {
        var badge =
          "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      } else if (answer.license === "GNU  3.0") {
        var badge =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      } else if (answer.license === "MIT") {
      var badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }  else if (answer.license === "Apache License 2.0") {
      var badge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
