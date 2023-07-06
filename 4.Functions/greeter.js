function requestName(question) {
  let rlSync = require("readline-sync");
  let name = rlSync.question(question);
  return name;
}

let firstName = requestName("What is your first name? ");
let lastName = requestName("What's your last name? ");

console.log(`Hello, ${firstName} ${lastName}!`);
