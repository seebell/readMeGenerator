const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
const api = require('./utils/api');

// username = answers.username;
//     api.getUser(username).then(answers); {
//         //this is the whole user object
//         console.log(res.data[0].payload.commits[0].author.email);
//         const userEmail = res.data[0].payload.commits[0].author.email;
//         const userProfile = res.data[0].actor.avatar_url;
//     }

writeFileAsync = util.promisify(fs.writeFile);
const { questions } = require('./utils/questions');
const generateMarkdown = require("./utils/generateMarkdown");



async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        await writeFileAsync("Readme.md", generateMarkdown(answers));
        console.log("Successfully wrote Readme.md!")
    }
    catch(err) {
        console.log(err);
    }
}

init();
