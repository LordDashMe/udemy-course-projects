// Lecture:
//   Undefined - The absence of a value.
//   Variable without assigned value.
//   Function arguments without assigned value.
//   Function return value.

// Undefined for variable 

let name; // undefined

name = 'John Doe';

if (name === undefined) {
    console.log('Please provide a name');
} else {
    console.log(name);
}

// Undefined for function arguments

let square = function (number) {
    console.log(number);
};

// Undefined for function return values

let result = square();
console.log(result);

// Null - Is meant for the emptiness instead of using undefined.

let age = 24;

age = null; // Explicitly cleared by the developer.

console.log(age);
