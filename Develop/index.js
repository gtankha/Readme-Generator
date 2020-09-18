const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


inquirer;
// array of questions for user
const questions = [
  'Project Title: ',
  'Project Description:',
  'Installation Instructions: ',
  'Usage Information: ',
  'Contribution Guidelines:',
  'Test Instructions:',
  'License: ',
  'GitHub Username:',
  'GitHub Profile Link: ',
  'Email address: '
];

const readmeQuestionnaire = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter project title (Required)');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter project description (Required)');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: questions[2],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter installation instructions (Required)');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[3],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter usage information (Required)');
          return false;
        }
      }

    },
    {
      type: 'input',
      name: 'contribution',
      message: questions[4],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter contribution guidelines (Required)');
          return false;
        }
      }

    },
    {
      type: 'input',
      name: 'test',
      message: questions[5],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter test instructions (Required)');
          return false;
        }
      }

    },
    {
      type: 'list',
      name: 'license',
      message: questions[6],
      choices: ['MIT', 'GNU GPLv3', 'Apache', 'Microsoft', 'Mozilla Public License 2.0', 'Uni License', 'Boost Software License']
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: questions[7],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter github username (Required)');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'githubProfile',
      message: questions[8],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter github profile link (Required)');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: questions[9],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your emaail address (Required)');
          return false;
        }
      }
    },
  ]);
};




// function to write README file
//function writeToFile(fileName, data) {
//       }

const writeToFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};


// function to initialize program
function init() {
  readmeQuestionnaire()
    .then(processQuestionnaire => {
      return (generateMarkdown(processQuestionnaire));
    })
    .then(displayQuestionnaire => {
      return (writeToFile('../README.md',displayQuestionnaire)); 
    })
    .catch(err => {
      console.log(err);
    });

    };




// function call to initialize program
init();
