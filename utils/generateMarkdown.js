function generateMarkdown(data) {
    return `# ${data.title}
    # ${answers.title}
    ## Description
    ${answers.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [License](#license)
    * [Contact](#contact)
    * [Credits](#credits)
    
    ## Installation
    ${answers.installation}

    ## Contributing
    ${answers.contributing}

    ## Tests
    ${answers.tests}

    ## Usage
    ${answers.usage}

    ## License
    ${answers.license}

    ## Contact
    * GitHub: [${answers.github}](
    * Email: ${answers.email}
    * LinkedIn: [${answers.linkedin}](
    
    * Credits
    * ${answers.credits}
    `
  };
  
  module.exports = generateMarkdown;