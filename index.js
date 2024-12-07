const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
      type: 'input',
      name: 'title',
      message: 'How would you like to title your project?',
  },
  {
      type: 'input',
      name: 'description',
      message: 'Describe your project:',
  },
  {
      type: 'input',
      name: 'installation',
      message: 'How would users install your project?',
  },
  {
      type: 'input',
      name: 'usage',
      message: 'Explain how to utilize your project:',
  },
  {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:',
  },
  {
      type: 'input',
      name: 'tests',
      message: 'Provide testing instructions:',
  },
  {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
  },
  {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
  },
];

const generateReadme = (answers) => `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} License.

## Questions
If you have any questions, please contact me at [${answers.email}](mailto:${answers.email}).
You can view more of my work at [${answers.github}](https://github.com/${answers.github}).
`;

inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.error(err) : console.log('README.md created!')
    );
});
