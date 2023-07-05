// Explain why this code logs '510' instead of 15. //
console.log("5" + 10);

// There is an implicit coercion of the value 10 from Number to String, so the operator '+' concatenates
// both Strings, producing another String of value '510'
