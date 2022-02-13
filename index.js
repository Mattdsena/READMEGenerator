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
      choices: ["MIT", "GNU  2.0", "GNU  3.0"],
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