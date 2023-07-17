function doSomething(string) {
  return string
    .split(" ")
    .reverse()
    .map((value) => value.length);
}

console.log(doSomething("Pursuit of happiness")); // => [ 9, 2, 7 ]
