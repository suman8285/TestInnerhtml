const core = require('@actions/core');

// Function to add innerHTML to the output element
function addInnerHTML(content) {
  core.setOutput('innerHTML', content);
}

// Content you want to add as innerHTML
const innerHTMLContent = '<h2>Job Completed!</h2><p>The job has finished executing.</p>';

// Call the function to add the innerHTML
addInnerHTML(innerHTMLContent);
