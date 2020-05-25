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
    userProfile
    }

  // let answers = title + "\n" + description + "\n" + installation + "\n" + usage + "\n" + license + "\n" + contributing + "\n" + tests + "\n" + badges + "\n" + userEmail + "\n" + "![](" + userProfile + ")";
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

${userProfile}

`;
}

module.exports = generateMarkdown;
