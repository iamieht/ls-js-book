function oddLengths(arr) {
  return arr.map((value) => value.length).filter((value) => value % 2 !== 0);
}

let arr = ["a", "abcd", "abcde", "abc", "ab"];

console.log(oddLengths(arr)); // => [1, 5, 3]
