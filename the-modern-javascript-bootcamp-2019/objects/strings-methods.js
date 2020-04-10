// Lecture:
//   String variable exploring the properties and methods.
// Documentation Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let name = 'John Doe';

// Length Property
console.log(name.length);

// Convert to Upper Case - Method Property
console.log(name.toUpperCase());

// Convert to Lower Case - Method Property
console.log(name.toLowerCase());

// Includes - Method Property
let password = 'abc123password098';
console.log(password.includes('password'));

// Trim - Method Property
let withWhiteSpaces = ' Yes  ';
console.log(withWhiteSpaces.trim());

// Challenge

// Objective:
//   Check if password is valid.
// Criteria:
//   1. length is more than 8
//   2. does not contain "password" word.

let isValidPassword = function (password) {
    return (password.length > 8 && !password.includes('password'));
};

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^&'));
console.log(isValidPassword('asdfpasdfpoijpassword'));
