generateMarkdown = (answers) => {
  const {
    badges,
    title,
    description,
    url,
    userStory,
    installation,
    usage,
    contribution,
    license,
    tests,
    }
    = answers;
  
  return `
 ${badges}

# ${title}

## Description
${description}

### Link for the project
${url}

### User story
${userStory}

### Installation

${installation}

## Usage

${usage}

## Contribution

${contribution}

## License

${license}

## Tests

${tests}


`;
}

module.exports = generateMarkdown;
