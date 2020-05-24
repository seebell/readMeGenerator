const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');

writeFileAsync = util.promisify(fs.writeFile);
const { questions } = require('./utils/questions');
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt(questions)
.then(answers => writeFileAsync("readme.Md", generateMarkdown(answers)))
.then(() => console.log("Successfully wrote readMe"))
.catch(err => console.log(err));

// fs.writeFile("readme.Md", answers, () => {});

function init() {

}

init();