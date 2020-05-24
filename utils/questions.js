module.exports = {
    questions: [
        {
            type: "input",
            name: "badges",
            message: "Please include a badge."

        },
        {

            type: "input",
            name: "title",
            message: "What is the title of your project?"

        },
        {
            type: "input",
            name: "description",
            message: "Please provide a brief description of your project"

        },
        {
            type: "input",
            name: "url",
            message: "Please provide the url link for your project"
        },
        {
            type: "input",
            name: "url",
            message: "Please provide a brief user story including a user role, reason and goal of the application."
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use. Include screenshots as needed."   
        },
        {
            type: "input",
            name: "license",
            message: "The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use https://choosealicense.com/"

        },
        {
            type: "input",
            name: "contributing",
            message: "If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The Contributor Covenant is an industry standard, but you can always write your own."

        },
        {
            type: "input",
            name: "tests",
            message: "Go the extra mile and write tests for your application. Then provide examples on how to run them."
        },
        
        {
            type: "input",
            message: "Enter your GitHub username:",
            name: "username"
        }
    ]
};