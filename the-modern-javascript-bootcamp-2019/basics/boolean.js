// Lecture:
//   Boolean definition.
//   Comparison operators.
//   If statements.

let temp = 31;

let isFreezing = (temp === 31); // Equality operator: true
let isNotFreezing = (temp !== 32); // Not equality operator: true
let tempIsLowerThan = (temp < 32); // Less than operator: true
let tempIsHigherThan = (temp > 32); // Greater than operator: false
let tempIsLowerThanAndEqualTo = (temp <= 32); // Less than and equal to operator: false

console.log(isFreezing, isNotFreezing, tempIsLowerThan, tempIsHigherThan, tempIsLowerThanAndEqualTo);

if (isFreezing) { // Also known: flow control 
    console.log('It is freezing outside!');
}

// Challenge

let age = 24;

let isChild = (age <= 7); // false
let isSenior = (age >= 65); // false

console.log(isChild, isSenior);

if (isChild) {
    console.log('You are child.');
}

if (isSenior) {
    console.log('You are senior and you have discount.');
}
