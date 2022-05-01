// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your Github username? (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address? (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter a title for your project.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Tell us a little more about your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use.",
    },
    {
      type: "input",
      name: "contribution",
      message: "Any contribution guidelines we should know about?",
    },
    {
      type: "input",
      name: "testinstructions",
      message: "How should we test?",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Pick your license.",
      validate: (input) => {
        console.log(input);
        return input.length != 1 ? "You must pick a single license!" : true;
      },
      choices: ["MIT", "GNU_GPLv3", "Apache", "Mozilla", "Boost", "Unlicense"],
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("You can now see your README file.");
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log("we here");
  questions().then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
