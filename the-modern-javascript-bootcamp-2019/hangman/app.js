
// Prototypical Inheritance
// product -> Object.prototype -> null
const product = {
    name: 'Influence'
};

// hasOwnProperty
console.log(product.hasOwnProperty('name'));

// Object Class
const obj = new Object({
    name: 'The clean code.'
});

console.log(obj);

// Primitive Values: String, Number, Boolean, Null, and Undefined
// Non Primitive Values: Object, Arrays, Functions, etc...

// Prototype Chaining Structure:

// Object: myObject --> Object.prototype --> null

// Array: myArray --> Array.prototype --> Object.prototype --> null

console.log(['Lake', 'Maddison'].hasOwnProperty('length'));
// If you want to check the own property for example "filter"
// you need to declare new Array([...])

// Function: myFunc --> Function.prototype --> Object.prototype --> null

// Note! Object Wrapper for Primitive Values: when you access this type of values via object then it will convert automatically.

// String: myString --> String.prototype --> Object.prototype --> null 

// Number: myNumber --> Number.prototype --> Ojbect.prototype --> null

// Boolean: myBoolean --> Boolean.prototype --> Ojbect.prototype --> null

// Null and Undefined: No counter part.
