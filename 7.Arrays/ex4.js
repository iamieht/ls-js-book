let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let newArray = myArray.map((value) => {
  if (value % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
});

let newArray2 = myArray.map((value) => (value % 2 === 0 ? "even" : "odd"));

console.log(newArray);
console.log(newArray2);
