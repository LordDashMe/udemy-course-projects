// Type Coercion
//  Should avoid!
//  a string, a number, and a boolean.
//  when two data type still make a new changes and without throwing an error because of the differences on the data type.
console.log('5' + 5); // 55 - Performed string concatenation
console.log('5' - 5); // 0 - Performed math operation.

console.log(5 === 5) // Strict equality.


console.log(typeof 5) // number - used for type checking.

// Weird things examples:
console.log(false + 11); // 11 - false is also equal to value "0".
console.log(true + 11); // 12 - true is also equal to value "1" that is why the math operation result to "12".
