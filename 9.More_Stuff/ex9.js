function isNegativeZero(value) {
  return value === 0 && 1 / value === -Infinity;
}

console.log(isNegativeZero(1));
console.log(isNegativeZero(0));
console.log(isNegativeZero(-2));
console.log(isNegativeZero(-0));
