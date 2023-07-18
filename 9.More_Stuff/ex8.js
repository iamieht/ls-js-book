function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber("string"));
console.log(isNotANumber(123));
console.log(isNotANumber(NaN));
console.log(isNotANumber(null));
console.log(isNotANumber(true));
console.log(isNotANumber(undefined));
console.log(isNotANumber([1, 2, 3]));

// NaN is the only JS value that is not === to itself.
