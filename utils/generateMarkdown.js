generateMarkdown = (data) => {
  const {
    title,
    description,
    url,
    userStory,
    installation,
    usage,
    contribution,
    license,
    tests
    
    }
    
  = data;
  
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
* [Usage](#usage)
* [Contribution](#contribution)

## License

${license}

### Installation

${installation}

## Usage

${usage}

## Contribution

${contribution}

### User story
${userStory}

## Tests

${tests}

## Project by ${data.name}
  ![](${data.avatar_url})<br>
  #### Email adress: ${data.email}<br>
`;
}

module.exports = generateMarkdown;