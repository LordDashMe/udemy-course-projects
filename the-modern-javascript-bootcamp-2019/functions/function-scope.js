// Global scope (convertFahrenheitToCelsius)
    // Local scope (fahrenheit, celsius) 
        // Local Scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;

    if (celsius <= 0) {
        let isFreezing = true;
    }

    return 'The celsius of fahrenheit ' + fahrenheit + ' is ' + celsius;
};

console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius(68));
