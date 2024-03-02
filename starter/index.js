const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const prompt = require('prompt-sync')({sigint: true}); //Run npm install prompt-sync in the terminal
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

var name =""; //name of user input
var title = ""; //title of project
var description = "";
var installation = "";
var usage = "";
var licence ="";
var contributing= "";
var tests = "";
var gitHubUserName = "";
var emailAddress = "";
var questions = "";
// array of questions for user
//const questions = [
//];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./README.md',
     `# ${title}\n\n## Description\n${description}\n\n## Table of Contents\n\n[Installation](#installation)\n\n[Usage](#usage)\n\n[Licence](#licence)\n\n[Contributing](#contributing)\n\n[Tests](#tests)\n\n[Questions](#questions)\n\n## Installation\n${installation}\n\n## Usage\n${usage}\n\n## Licence\n${licence}\n\n## Contributing\n${contributing}\n\n## Tests\n${tests}\n\n## Questions:\n${questions}\n\nGitHub username: ${gitHubUserName}\n\nEmail: ${emailAddress}`,
      err => err ? console.error(err) : console.log(`${title} README.md file created!`));
   // fs.writeFile('./README.md', process.argv[2], err => err ? console.error(err) : console.log("Success"));
    
}

// function to initialize program
async function init() {
    name = prompt('Hello, What is your name?');
    title = prompt(`Hello, ${name}! What is the title of your project? `);
    description = prompt(`Please describe the project ${title}: `);
    installation = prompt(`Can you give some installation guidance? `);
    usage = prompt(`What are the usage instructions? `);
    //licence = prompt(`What form of licence will you use? `);
    licence = prompt(`What form of licence will you use? M for MIT licence (few restrictions on reuse), P for Proprietary (copyrighted) or type the licence that you will use `);
    if (licence == 'M' || 'm') {
      licence = 'MIT';
    } 
    if (licence == 'P' || 'p') {
        licence = 'Proprietary';
    } 

    contributing = prompt(`Who contributed to this project? `);
    tests = prompt(`What tests have been performed? `);
    gitHubUserName = prompt(`What is your GitHub username? `);
    emailAddress = prompt(`What is your email address `)
    questions = prompt(`How should someone contact you with any questions? `)





    
    writeToFile()
    
}

// function call to initialize program
init();



// let guess = prompt('Guess a number from 1 to 10: ');
// // Convert the string input to a number
// guess = Number(guess);




  
//   readline.question('What is your name?', name => {
//     fs.writeFile('./README.md', `${name}\n`, err => err ? console.error(err) : console.log(`Hello, ${name}! README.md file created`));
//     readline.close();
//   });
    
