// Write a function that logs whether an integer is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

function numberRangeWithSwitch(number) {
  switch (true) {
    case number < 0:
      console.log(`${number} is less than 0`);
      break;
    case number <= 50:
      console.log(`${number} is between 0 and 50`);
      break;
    case number <= 100:
      console.log(`${number} is between 51 and 100`);
      break;
    case number > 100:
      console.log(`${number} is greater than 100`);
      break;
    default:
      console.log(`${number} is not a valid input`);
  }
}

function numberRangeWithIf(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}

numberRangeWithSwitch(25);
numberRangeWithSwitch(75);
numberRangeWithSwitch(125);
numberRangeWithSwitch(-25);

numberRangeWithIf(25);
numberRangeWithIf(75);
numberRangeWithIf(125);
numberRangeWithIf(-25);
