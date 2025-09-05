// Toggle helper
function toggleOutput(id, content) {
  let element = document.getElementById(id);
  if (element.innerHTML === "") {
    element.innerHTML = content;
  } else {
    element.innerHTML = "";
  }
}

// Change text example (DOM)
function changeText() {
  toggleOutput("demo", "✅ Text changed using JavaScript!");
}

// Show alert
function showAlert() {
  alert("Hello! This is a JavaScript alert.");
}

// Log message
function logMessage() {
  console.log("This message was logged using JavaScript.");
  toggleOutput("console-output", "✅ Open your browser console to see the log message.");
}

// Show Date Example (Event)
function showDate() {
  toggleOutput("date-area", "📅 Current Date & Time: " + new Date());
}

// Example: Variables & Data Types
function showVariables() {
  let name = "Obed";
  let age = 25;
  let isStudent = true;

  let result = `
    Name: ${name} <br>
    Age: ${age} <br>
    Is Student? ${isStudent}
  `;

  toggleOutput("variable-output", result);
}

// Example: Operators
function showOperators() {
  let a = 10, b = 5;
  let result = `
    a = ${a}, b = ${b} <br>
    a + b = ${a + b} <br>
    a - b = ${a - b} <br>
    a * b = ${a * b} <br>
    a / b = ${a / b} <br>
    a > b ? ${a > b}
  `;

  toggleOutput("operator-output", result);
}

// Example: Functions
function greet(name) {
  return "Hello, " + name + "!";
}

function showFunctionExample() {
  toggleOutput("function-output", greet("Obed Rana"));
}
