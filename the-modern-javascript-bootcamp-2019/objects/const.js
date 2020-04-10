// Lecture:
//   Const - cannot re-assign a value for later use.
//   Object Properties - when declared a const object the properties still can re-assign a value.
//   Const is a block scope the same with the Let.

const isRaining = true;

// isRaining = false; // Throws: TypeError assignment.

console.log(isRaining);

const person = {
    age: 27
};

person.age = 28;

// person = {}; // Throws: TypeError assignment.

console.log(person);
