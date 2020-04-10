// Project
//   Convert fahrenheit to celsius
//   Convert fahrenheit to kelvin

let fahrenheit = 32;

let celsius = (fahrenheit - 32) * 5 / 9; 
let kelvin1 = (fahrenheit - 32) * 5 / 9 + 273.15; // google converter
let kelvin2 = (fahrenheit + 459.67) * 5 / 9; // https://www.rapidtables.com/convert/temperature/how-fahrenheit-to-kelvin.html

console.log(celsius, kelvin1, kelvin2);
