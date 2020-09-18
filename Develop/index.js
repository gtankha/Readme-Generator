const inquirer = require('inquirer'); // inquirer
const generateMarkdown = require('./utils/generateMarkdown'); // generates the readme page
const fs = require('fs'); // file system functions
const validator = require("email-validator"); // checks for valid email address
const validUrl = require('valid-url'); // checks for a valid URL


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
/* ---------------------------- QUESTIONS AND ANSWERS FOR THE README FILE ------------------------------------*/
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
          console.log('Project title is REQUIRED');
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
          console.log('Project description is REQUIRED');
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
          console.log('Installation instructions are REQUIRED');
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
          console.log('Usage information is REQUIRED');
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
          console.log('Contribution guidelines are REQUIRED');
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
          console.log('Test instructions are REQUIRED');
          return false;
        }
      }

    },
    {
      type: 'list',
      name: 'license',
      message: questions[6],
      choices: ['Apache 2.0', 'Boost Software License 1.0', 'BSD 3-Clause License', 'Creative Commons CCO 1.0', 'Eclipse 1.0','GNU GPL v3','IBM Public License Version 1.0','ISC','MIT','Mozilla Public License 2.0','Open Data Commons - Attributition License (BY)', 'The Perl License','SIL Open Font License 1.1','The Unlicense','Zlib']
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: questions[7],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Username is REQUIRED');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'githubProfile',
      message: questions[8],
      validate: nameInput => {
        if (validUrl.isWebUri(nameInput)) {
          return true;
        } else {
          console.log('Github profile link  is REQUIRED');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: questions[9],
      validate: nameInput => {
        if (validator.validate(nameInput)) {
          return true;
        } else {
          console.log('Valid email address is REQUIRED');
          return false;
        }
      }
    },
  ]);
};

/* ------------------------ FUNCTION TO WRITE README FILE ------------------------------------- */
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


/* ------------------------ FUNCTION TO INITIALIZE PROGRAM------------------------------------- */
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
