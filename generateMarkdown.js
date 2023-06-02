// Function to generate the license badge
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)\n`;
  }
  return '';
}

// Function to generate the license link
function renderLicenseLink(license) {
  if (license !== 'None') {
    return '* [License](#license)\n';
  }
  return '';
}

// Function to generate the license section
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License\n\nThis project is licensed under the ${license} license.\n`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
${data.title ? `# Title: ${data.title}\n` : ''}

${renderLicenseBadge(data.license)}

${data.description ? `## Description\n\n${data.description}\n` : ''}

${data.installation || data.usage || data.contributing || data.tests || data.license !== 'None' ? `## Table of Contents\n\n${data.installation ? '* [Installation](#installation)\n' : ''}${data.usage ? '* [Usage](#usage)\n' : ''}${renderLicenseLink(data.license)}${data.contributing ? '* [Contributing](#contributing)\n' : ''}${data.tests ? '* [Tests](#tests)\n' : ''}${data.username || data.email ? '* [Questions](#questions)\n' : ''}` : ''}

${data.installation ? `## Installation\n\n${data.installation}\n` : ''}

${data.usage ? `## Usage\n\n${data.usage}\n` : ''}

${renderLicenseSection(data.license)}

${data.contributing ? `## Contributing\n\n${data.contributing}\n` : ''}

${data.tests ? `## Tests\n\n${data.tests}\n` : ''}

${data.username || data.email ? `## Questions\n\n${data.username ? `If you have any questions about the repo, open an issue or contact [${data.username}](https://github.com/${data.username}).\n` : ''}${data.email ? `You can also contact directly at ${data.email}.\n` : ''}` : ''}
`;
}

module.exports = generateMarkdown;
