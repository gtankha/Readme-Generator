

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

  1. [Description] (#description)
  2. [Installation] (#installation)
  3. [Usage] (#usage)
  4. [License] (#license)
  5. [Contributing] (#contributing)
  6. [Tests] (#tests)
  7. [Questions] (#questions)


  <a name="installation"></a>
## 2. Installation

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

  <a name="test"></a>
  ## 6. Test
      
  ${test}

  <a name="license"></a>
  ## 7. License
      
  ${license}

  <a name="questions"></a>
  ## 7. Questions
      
  ${license}

`;

}

module.exports = generateMarkdown;
