const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'test',
      message: 'Test prompt: '
    }
  ])
  .then(answers => {
    console.log(answers);
  });
