

// function to generate markdown for README
const generateMarkdown = data => {

  console.log(data);
  const { title, description, installation, usage, contribution, test, license, githubUsername, githubProfile, email } = data;
  let licenseImage = "";
  let licenseUrl = "";
  switch (license) {
    case 'Apache 2.0':
      licenseImage = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      licenseUrl = "https://opensource.org/licenses/Apache-2.0";
      break;
    case 'Boost Software License 1.0':
      licenseImage = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg";
      licenseUrl = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case 'ABSD 3-Clause License':
      licenseImage = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
      licenseUrl = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case 'Creative Commons CCO 1.0':
      licenseImage = "https://licensebuttons.net/l/zero/1.0/80x15.png";
      licenseUrl = "http://creativecommons.org/publicdomain/zero/1.0/";
      break;
    case 'Eclipse 1.0':
      licenseImage = "https://img.shields.io/badge/License-EPL%201.0-red.svg";
      licenseUrl = "https://opensource.org/licenses/EPL-1.0";
      break;
    case 'GNU GPL v3':
      licenseImage = "https://img.shields.io/badge/License-GPLv3-blue.svg";
      licenseUrl = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case 'IBM Public License Version 1.0':
      licenseImage = "https://img.shields.io/badge/License-IPL%201.0-blue.svg";
      licenseUrl = "https://opensource.org/licenses/IPL-1.0";
      break;
    case 'ISC':
      licenseImage = "https://img.shields.io/badge/License-ISC-blue.svg";
      licenseUrl = "https://opensource.org/licenses/ISC";
      break;
    case 'MIT':
      licenseImage = "https://img.shields.io/badge/License-MIT-yellow.svg";
      licenseUrl = "https://opensource.org/licenses/MIT";
      break;
    case 'Mozilla Public License 2.0':
      licenseImage = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
      licenseUrl = "https://opensource.org/licenses/MPL-2.0";
      break;
    case 'Open Data Commons - Attributition License (BY)':
      licenseImage = "https://img.shields.io/badge/License-ODC_BY-brightgreen.svg";
      licenseUrl = "https://opendatacommons.org/licenses/by/";
      break;
    case 'The Perl License':
      licenseImage = "https://img.shields.io/badge/License-Perl-0298c3.svg";
      licenseUrl = "https://opensource.org/licenses/Artistic-2.0";
      break;
    case 'SIL Open Font License 1.1':
      licenseImage = "https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg";
      licenseUrl = "https://opensource.org/licenses/OFL-1.1";
      break;
    case 'The Unlicense':
      licenseImage = "https://img.shields.io/badge/license-Unlicense-blue.svg";
      licenseUrl = "http://unlicense.org/";
      break;
    case 'Zlib':
      licenseImage = "https://img.shields.io/badge/License-Zlib-lightgrey.svg";
      licenseUrl = "https://opensource.org/licenses/Zlib";
      break;
  };

  return `
  ![](${licenseImage})

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

  URL: ${licenseUrl}

  <a name="questions"></a> 
  ## 8. Questions
  
  GitHub Username: ${githubUsername}

  GitHub Profile: ${githubProfile}
  
  In case of any questions, please reach out to the following contact email: ${email}

`;

}

module.exports = generateMarkdown;
