

// function to generate markdown for README
const generateMarkdown = data => {
  
  console.log(data);
  const {title,description, installation, usage, contribution, test,license,githubUsername, githubProfile,email} = data;
  return `
  # ${title}

  <a name="description"></a>
  ## Description:

  ${description}

  ## Table of Contents

  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)


 
## <a name="installation"></a> 2. Installation

  ${installation}

  <a name="usage"></a> 
  ## 3. Usage

  ${usage}

  <a name="license"></a> 
  ## 4. License
  
  ${usage}

  <a name="contributing"></a>
  ## 5. Contributing
    
  ${contribution}

  <a name="tests"></a> 
  ## 6. Test
      
  ${test}

  <a name="license"></a> 
  ## 7. License
      
  ${license}

  <a name="questions"></a> 
  ## 8. Questions
  
  GitHub Username: ${githubUsername}
  GitHub Profile: ${githubProfile}
  In case of any questions, please reach out directly: ${email}

`;

}

module.exports = generateMarkdown;
