const html_creation_date = new Date("05/05/1993");
const ms_in_year = 365.25 * 24 * 60 * 60 * 1000;

// Displaying how old HTML is
const html_age_ms = Date.now() - html_creation_date;
const html_age_years = Math.floor(html_age_ms / ms_in_year);
document.getElementById("html-creation-date-display").innerHTML = `${html_age_years} years`;

// Functionality for the document.write button
document.getElementById("document-write-button").onclick = function() {
  document.write("<h1>We have now overridden the entirety of the page with this text.</h1><p>And note, we can use HTML here! To see why this is an issue, keep on reading the article.</p><p>Refresh the page to go back to the article</p>");
}

// Show the code samples
const code_source_id = "form-component-example-html";
const code_display_id = code_source_id + "-code";
const code_source = document.getElementById(code_source_id);
const code_display = document.getElementById(code_display_id);
code_display.innerText = code_source.innerHTML;

document.getElementById("form-submit").onclick = function() {
  const username = document.getElementById("username-input").value;
  const password = document.getElementById("password-input").value;
  alert(`Username: '${username}', Password: '${password}'`);
}
