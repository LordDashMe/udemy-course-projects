// Lecture:
//   Number variable exploring the properties and methods.
// Documentation Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

let number = 103.941;

// Fixed Decimal Point - Method Property
console.log(number.toFixed(2));

// Math Round Method
console.log(Math.round(number));

// Math Floor Method - Round Down
console.log(Math.floor(number));

// Math Ceil Method - Round Up
console.log(Math.ceil(number));

// Math Random Method - by default 0 - 0.9999...
let min = 10;
let max = 25;
let randomNumber = Math.floor(Math.random() * ((max - min) + 1)) + min;
console.log(randomNumber);

// Challenge

let makeGuess = function (guessNumber) {
    let min = 1;
    let max = 5;
    let luckyNumber = Math.floor(Math.random() * ((max - min) + 1)) + min;
    return (guessNumber === luckyNumber);
};

console.log(makeGuess(1));
