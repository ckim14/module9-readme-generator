// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    title: "github",
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
    title: "email",
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
    title: "title",
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
    name: "installation instructions",
    message: "How do you install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Give some usage information about your project.",
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
    choices: ["1", "2", "3"],
  },
];

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
