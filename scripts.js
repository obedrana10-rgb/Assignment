// Variables Example
function showVariables() {
  let name = "Obed";
  let age = 22;
  const pi = 3.14;
  document.getElementById("variable-output").innerHTML =
    "Name: " + name + " | Age: " + age + " | PI: " + pi;
}

// Function Example
function showFunctionExample() {
  function greet(name) {
    return "Hello, " + name + "!";
  }
  document.getElementById("function-output").innerHTML = greet("Obed");
}

// Event Example
function showDate() {
  document.getElementById("date-area").innerHTML = new Date();
}

// Alert Example
function showAlert() {
  alert("Hello! This is a JavaScript Alert Example.");
}

// Console Example
function logMessage() {
  console.log("This message was logged using JavaScript.");
}
