// Using arithmetic operators, get the individual digits of a 4-digit number like 4936
// thousands place is 4
// hundreds place is 9
// tens place is 3
// ones place is 6

let number = 4936;
// let thousands = parseInt(number / 1000);
// let hundreds = parseInt((number % 1000) / 100);
// let tens = parseInt((number % 100) / 10);
let ones = number % 10;
number = (number - ones) / 10;
let tens = number % 10;
number = (number - tens) / 10;
let hundreds = number % 10;
number = (number - hundreds) / 10;
let thousands = number % 10;

console.log(`For number: ${number}
            thousands place is ${thousands}
            hundreds place is ${hundreds}
            tens place is ${tens}
            ones place is ${ones}`);
