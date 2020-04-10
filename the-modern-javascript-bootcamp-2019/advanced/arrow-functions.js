const squareLong = (number) => {
    return number * number;
};

const squareShort = (number) => number * number;

console.log(squareShort(5));

const people = [
    {
        name: 'Andrew',
        age: 27
    },
    {
        name: 'Vikram',
        age: 31
    },
    {
        name: 'Dash',
        age: 24
    }
];

const underAge30 = people.filter((person) => person.age < 30);
console.log(underAge30);

// Challenge
// 1. Find the person with age 24
// 2. Print that persons name
const age24 = people.find((person) => person.age === 24);
console.log(`${age24.name} is ${age24.age} old.`);
