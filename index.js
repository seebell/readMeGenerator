const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
const axios = require("axios");
// const api = require('./utils/api');

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

        const { username, email, title, description, url, userStory, installation, usage, contribution, license, tests } = answers;
        
        const repo = await axios.get(`https://api.github.com/users/${username}`);
        const { data } =repo;
        const { name, avatar_url } = data;

        const markdown =await generateMarkdown({
            name,
            email, 
            avatar_url,
            title,
            description,
            url,
            userStory,
            installation,
            usage,
            contribution,
            license,
            tests,
    
        });
        await writeFileAsync("Readme.md", markdown);
        console.log("Successfully wrote Readme.md!")
    }
    catch(err) {
        console.log(err);
    }
}

init();
