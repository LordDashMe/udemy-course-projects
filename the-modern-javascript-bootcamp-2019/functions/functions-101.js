// Lecture:
//   Function - structure are input, code, and output.

let greetUser = function () {
    console.log('Welcome user!');
};

greetUser();

// Input, Code, and Output.

let square = function (number) {
    let square = number * number; // Remember: The variable shadowing that is why we can declare the "square" var.
    return 'The square of ' + number + ' is ' + square;
};

console.log(square(3));
console.log(square(10));

// Challenge

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return 'The celsius of fahrenheit ' + fahrenheit + ' is ' + celsius;
};

console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius(68));
