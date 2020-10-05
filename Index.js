const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');

const fs = require('fs');

const employeeData = [];

const promptQuestions = () => {
    return inquirer.prompt([
        
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
    {
        type: 'confirm',
        name: 'confirmAddEngineer',
        message: 'Would you like to add an ENGINEER?',
        default: false
    },
  ])
  .then(storeManager => {
    const manager = new Manager(storeManager.managername, storeManager.managerid, storeManager.manageremail, storeManager.office)

    employeeData.push(manager);
    if (storeManager.confirmAddEngineer) {
        return addEngineer();
    } else {
        return nextEmployee();
    }
  });
};

const nextEmployee = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'addNextRole',
            message: 'Would you like to add an intern?',
            default: false
        }
    ])
    .then(decideNextEmployee => {
        if(decideNextEmployee.addNextRole) {
            return addIntern();
        } else {
            return endTeam();
        }
    })
}

const endTeam = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmEnd',
            message: 'Type NO to end prompts.',
            default: false
        }
    ])
    // .then(newPrompt => {
    //     if (newPrompt === true) {
    //         return promptQuestions();
    //     }
    // })
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
        {
            type: 'confirm',
            name: 'confirmAddIntern',
            message: 'Would you like to add an INTERN?',
            default: false
        }
    ])
    .then(storeEngineer => {
        const engineer = new Engineer(storeEngineer.engineername, storeEngineer.engineerid, storeEngineer.engineeremail, storeEngineer.github)

        employeeData.push(engineer);
        if (storeEngineer.confirmAddIntern) {
            return addIntern();
        } else {
            return endTeam();
        }
    })
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
            message: 'What is your Intern SCHOOL name?',
            validate: schoolInput => {
              if (schoolInput) {
                return true;
              } else {
                console.log('Please enter your school name!');
                return false;
              }
            }
        },
    ])
    .then(storeIntern => {
        const intern = new Intern(storeIntern.internname, storeIntern.internid, storeIntern.internemail, storeIntern.school)

        employeeData.push(intern);
        console.log(employeeData);
        init();
    })
}



promptQuestions();

// function to write HTML file
function writeToFile(data) {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) throw err;
        console.log("You are the Manager now")
    })
}

// function to initialize program
function init() {
        const createHtml = generateHtml(employeeData)
        writeToFile(createHtml)
}

