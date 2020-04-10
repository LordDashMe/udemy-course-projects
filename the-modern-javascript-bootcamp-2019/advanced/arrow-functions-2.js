// Note: arguments only work on the regular/old function.
// Arrow function does not bind "arguments".
const add = function (a, b) {
    return arguments[0] + arguments[1];
};

console.log(add(11, 22, 33, 44));

// Creating a function on a object use regular instead of arrow function.
// because the "this" will not work.

// Tips: make default use the arrow functions and decide when to use the regular function, check for
//  the "arguments" and "this" keyword usage then this should use regular function.
