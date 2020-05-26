const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');
const axios = require("axios");

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
