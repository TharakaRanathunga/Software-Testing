/**
 * Basic arithmetic operations for the mylib example library.
 */

function validateNumbers(first, second) {
  if (typeof first !== "number" || typeof second !== "number") {
    throw new TypeError("Inputs must be numbers");
  }
}

/** Add two numbers. */
function add(first, second) {
  validateNumbers(first, second);
  return first + second;
}

/** Subtract the second number from the first number. */
function subtract(first, second) {
  validateNumbers(first, second);
  return first - second;
}

/** Multiply two numbers. */
function multiply(first, second) {
  validateNumbers(first, second);
  return first * second;
}

/** Divide the first number by the second number. */
function divide(first, second) {
  validateNumbers(first, second);
  if (second === 0) {
    throw new Error("Cannot divide by zero");
  }
  return first / second;
}

module.exports = { add, subtract, multiply, divide };