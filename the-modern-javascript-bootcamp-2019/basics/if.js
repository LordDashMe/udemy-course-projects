// Lecture:
//   If and else statement.
//   Nested if conditions.

let isAccountLocked = true;
let role = 'admin';

if (isAccountLocked) {
    console.log('Account is locked.');
} else if (role === 'admin') {
    console.log('Welcome Admin!')
} else {
    console.log('Welcome!');
}

// Challenge

let temp = 45;

if (temp <= 32) {
    console.log('It is freezing outside.');
} else if (temp >= 90) {
    console.log('It is hot outside.');
} else {
    console.log('It is fine outside.');
}
