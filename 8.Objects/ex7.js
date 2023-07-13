let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

let objKeys = Object.keys(myObj); // iterates over myObj "own" properties (only qux)
objKeys.forEach(function (key) {
  console.log(key);
});

for (let key in myObj) {
  // iterates over all the object's keys, including prototype
  console.log(key);
}

for (let key in myObj) {
  // only iterates over own  properties
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}
