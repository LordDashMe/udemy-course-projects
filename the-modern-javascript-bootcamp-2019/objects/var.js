// Lecture:
//   VAR is a legacy way to define a variable.
//   VAR is a function scope and not a block scope!!! so creepy tho.
//   LET and CONST is a block scope variables.

var firstName = 'John';

firstName = 'Doe';

var firstName = 'Nina'; // still work on var!!!

console.log(firstName);

if (true) {
    var lastName = 'Cruz';
}

console.log(lastName);

// Proof that VAR is function scope.
const setName = function () {
    var isFunctionScope = 'Yes';
};
setName();
// console.log(isFunctionScope); // Will throw an error!

// The Weird Scenarios!
// VAR Hoisting
// Note: Only the declaration will be hoisted and not the value assigned on the variable.

console.log(age); // undefined.
var age = 28;

age2 = 10;
console.log(age2); // 10
var age2;
