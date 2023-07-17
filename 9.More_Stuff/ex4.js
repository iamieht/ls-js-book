function largestNum(array) {
  let largest = array[0];

  array.forEach((value) => {
    if (value > largest) {
      largest = value;
    }
  });

  return largest;
}

console.log(largestNum([1, 6, 3, 2]));
console.log(largestNum([-1, -6, -3, -2]));
console.log(largestNum([2, 2]));

console.log(Math.max(1, 6, 3, 2)); // => 6
console.log(Math.max(-1, -6, -3, -2)); // => -1
console.log(Math.max(2, 2)); // => 2
