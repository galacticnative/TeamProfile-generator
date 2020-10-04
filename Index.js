const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');

const promptQuestions = () => {
    return inquirer.prompt([
    // {
    //     type: 'list',
    //     name: 'role',
    //     message: 'What is your employee ROLE?',
    //     choices: ['manager', 'engineer', 'intern'],
    //     validate: roleList => {
    //         if (roleList) {
    //         return true;
    //         } else {
    //         console.log('Please select a role!');
    //         return false;
    //         }
    //     }
    // },    
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
    // {
    //     type: 'confirm',
    //     name: 'confirmRole',
    //     message: 'Confirm your role to add extra details.',
    //     default: true
    //   },
      {
        type: 'list',
        name: 'role',
        message: 'Select your role to add extra details:',
        choices: ['manager', 'engineer', 'intern'],
        validate: confirmRole => {
          if (confirmRole) {
              if('manager' === 'manager') {
                getOfficeNumber();
            } else if('engineer' === 'engineer') {
                getGithub();
            } else if('intern' === 'intern') {
                getSchool();
            }
            return true;
          } else {
            return false;
          }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddRole',
        message: 'Would you like to enter another employee?',
        default: false
    }
  ])
  .then(nextRole => {
    
    if (nextRole.confirmAddRole) {
      return promptQuestions();
    }
    // } else {
    //   return portfolioData;
    // }
  });
};

const getOfficeNumber = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?',
            validate: officeInput => {
              if (officeInput) {
                return true;
              } else {
                console.log('Please enter your office number!');
                return false;
              }
            }
        },
    ]);
}

const getGithub = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your Github username!');
                return false;
              }
            }
        },
    ]);
}

const getSchool = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What is your school name?',
            validate: schoolInput => {
              if (schoolInput) {
                return true;
              } else {
                console.log('Please enter your school name!');
                return false;
              }
            }
        },
    ]);
}

//promptQuestions();

// function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) throw err;
    })

}

// function to initialize program
function init() {
    promptQuestions()
    .then(inputData => {
        const createHtml = generateHtml(inputData)
        writeToFile(createHtml)
    })
}

// function call to initialize program
init();