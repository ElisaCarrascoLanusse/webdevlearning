// JavaScript Notes Compilation!

// Console and Comments
console.log("Outputs messages to the Console window"); // Single-line comment
/* Multi-line comment example
   Used for longer explanations */

// Variables
let variableName = "example"; // Changeable variable
const constantName = 42; // Unchangeable constant

// Data Types
let number = 25; // Number
define string = "Hello, World!"; // String
let booleanValue = true; // Boolean
let emptyValue = null; // Null
let undefinedValue; // Undefined

// Arithmetic Operators
let sum = 5 + 3; // Addition
let difference = 10 - 7; // Subtraction
let product = 4 * 2; // Multiplication
let quotient = 20 / 4; // Division
let remainder = 10 % 3; // Modulo
let power = 2 ** 3; // Exponentiation

// Conditionals
let review = 4.3;
if (review > 4.5) {
  console.log("Extraordinary");
} else if (review >= 4) {
  console.log("Excellent");
} else if (review >= 3) {
  console.log("Good");
} else {
  console.log("Eh");
}

// Loops
let count = 0;
while (count < 5) {
  console.log("While loop iteration: " + count);
  count++;
}

for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // Skips iteration when i = 2
  if (i === 4) break; // Stops loop when i = 4
  console.log("For loop iteration: " + i);
}

// Arrays
let array = ["apple", "banana", "cherry"];
array.push("date"); // Adds at the end
array.unshift("avocado"); // Adds at the beginning
array.shift(); // Removes from the beginning
array.pop(); // Removes from the end
console.log(array.includes("banana")); // Checks for existence
console.log(array.indexOf("cherry")); // Finds index of element

// Functions
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice"));

// Objects
let person = {
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    return "Hi, I'm " + this.firstName;
  },
};
console.log(person.greet());
person.age = 30; // Add a new property
console.log(person);

// DOM Manipulation
// Assuming HTML has elements with id="exampleId" and class="exampleClass"
let elementById = document.getElementById("exampleId");
elementById.innerHTML = "New Content";
let elementsByClass = document.getElementsByClassName("exampleClass");
let queryElement = document.querySelector(".exampleClass");
queryElement.style.backgroundColor = "blue"; // Modify CSS

// Event Handling
function handleClick() {
  alert("Button clicked!");
}
// In HTML: <button onclick="handleClick()">Click Me</button>

// Script Tag Usage
// <script src="script.js"></script>

// Notes on Best Practices
// Use let and const for variable declarations.
// Organize functions and methods for reusability.
// Leverage the DOM for dynamic page content.
// Avoid using global variables excessively.
