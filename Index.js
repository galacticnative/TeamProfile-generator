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
        name: 'managername',
        message: 'What is your Manager name?',
        validate: managerNameInput => {
          if (managerNameInput) {
            return true;
          } else {
            console.log('Please enter your manager name!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'managerid',
        message: 'What is your manager ID?',
        validate: managerIdInput => {
          if (managerIdInput) {
            return true;
          } else {
            console.log('Please enter your manager ID!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'manageremail',
        message: 'What is your manager EMAIL?',
        validate: managerEmailInput => {
          if (managerEmailInput) {
            return true;
          } else {
            console.log('Please enter your manager email!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is the manager office number?',
        validate: officeInput => {
          if (officeInput) {
            return true;
          } else {
            console.log('Please enter your office number!');
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
    //   {
    //     type: 'list',
    //     name: 'role',
    //     message: 'Select your role to add extra details:',
    //     choices: ['manager', 'engineer', 'intern'],
    //     validate: confirmRole => {
    //       if (confirmRole) {
    //           if('manager' === 'manager') {
    //             getOfficeNumber();
    //         } else if('engineer' === 'engineer') {
    //             getGithub();
    //         } else if('intern' === 'intern') {
    //             getSchool();
    //         }
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     }
    // },
    {
        type: 'confirm',
        name: 'confirmAddEngineer',
        message: 'Would you like to add an ENGINEER?',
        default: false
    },
    {
        type: 'confirm',
        name: 'confirmAddIntern',
        message: 'Would you like to add an INTERN?',
        default: false
    }
  ])
  .then(nextRole => {
    
    if (nextRole.confirmAddEngineer) {
        return addEngineer();
    } else if (nextRole.confirmAddIntern) {
        return addIntern();
    } else {
        endTeam();
    }
  });
};

const endTeam = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmEnd',
            message: 'Add more employees? Marking NO will end prompts.',
            default: false
        }
    ])
}

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineername',
            message: 'What is your Engineer name?',
            validate: engineerNameInput => {
              if (engineerNameInput) {
                return true;
              } else {
                console.log('Please enter your engineer name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'engineerid',
            message: 'What is your Engineer ID?',
            validate: engineerIdInput => {
              if (engineerIdInput) {
                return true;
              } else {
                console.log('Please enter your Engineer ID!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'engineeremail',
            message: 'What is your engineer EMAIL?',
            validate: engineerEmailInput => {
              if (engineerEmailInput) {
                return true;
              } else {
                console.log('Please enter your manager email!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer Github username?',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter Github username!');
                return false;
              }
            }
        },
    ]);
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internname',
            message: 'What is your Intern name?',
            validate: internNameInput => {
              if (internNameInput) {
                return true;
              } else {
                console.log('Please enter your Intern name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'internid',
            message: 'What is your Intern ID?',
            validate: internIdInput => {
              if (internIdInput) {
                return true;
              } else {
                console.log('Please enter your intern ID!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'internemail',
            message: 'What is your Intern EMAIL?',
            validate: internEmailInput => {
              if (internEmailInput) {
                return true;
              } else {
                console.log('Please enter your Intern email!');
                return false;
              }
            }
        },
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