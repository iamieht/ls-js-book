function getNumber(prompt) {
  let rlSync = require("readline-sync");
  let number = Number(rlSync.question(prompt));
  return number;
}

function multiply(n1, n2) {
  return n1 * n2;
}

let number1 = getNumber("Enter the first number: ");
let number2 = getNumber("Enter the second number: ");
let result = multiply(number1, number2);

console.log(`${number1} * ${number2} = ${result}`);
