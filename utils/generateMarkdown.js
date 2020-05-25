generateMarkdown = (answers) => {
  const {
    title,
    description,
    url,
    userStory,
    installation,
    usage,
    contribute,
    license,
    tests,
    userEmail,
    userProfile
    }
    
  = answers;
  
  return `
  
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit-150x33.png?v=103)](https://opensource.org/licenses/mit-license.php)

# ${title}

## Description
${description}

### Link for the project
${url}

## Table of Contents
* [License](#license)
* [Installation](#installation)
* [Useage](#useage)
* [Contribute](#contribute)

## License

${license}

### Installation

${installation}

## Usage

${usage}

## Contribution

${contribute}

### User story
${userStory}

## Tests

${tests}

${userEmail}

${userProfile}

`;
}

module.exports = generateMarkdown;
