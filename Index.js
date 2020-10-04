const inquirer = require('inquirer');

const promptQuestions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter your employee ID!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your EMAIL?',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email!');
            return false;
          }
        }
    },
]);
};