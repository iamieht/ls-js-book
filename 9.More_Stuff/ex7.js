let value = "Hello, world";

value = undefined;

try {
  console.log(value.length);
} catch {
  console.log(`Something went wrong: value is ${value}`);
}
