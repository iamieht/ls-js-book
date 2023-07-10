// Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.

function evenOrOdd(number) {
  // if (typeof number !== "number") {
  //   console.log(`${number} is not a Number`);
  //   return;
  // }

  // if (isNaN(number)) {
  //   console.log(`${number} is not a Number`);
  //   return;
  // }

  if (!Number.isInteger(number)) {
    console.log(`${number} is not an Integer`);
    return;
  }

  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}

evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(85);
evenOrOdd(2.4);
evenOrOdd("string");
