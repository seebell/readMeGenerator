const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
const api = require('./utils/api');


writeFileAsync = util.promisify(fs.writeFile);
const { questions } = require('./utils/questions');
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt(questions)
// .then(answers); {
//     console.log(answers);
//     username = answers.username;
//     api.getUser(username).then(answers); {
//         //this is the whole user object
//         console.log(res.data[0].payload.commits[0].author.email);
//         const userEmail = res.data[0].payload.commits[0].author.email;
//         const userProfile = res.data[0].actor.avatar_url;
.then(answers => writeFileAsync("readme.Md", generateMarkdown(answers)))
.then(() => console.log("Successfully wrote readMe"))
.catch(err => console.log(err));

// fs.writeFileAsync("readme.Md", generateMarkdown(answers), () => {});
// console.log("Successfully wrote readme!")
//     };
// };
function init() {
}
init();