// Lecture:
//   Objects - properties and values.

let myBook = {
    title: 'The Clean Code',
    author: 'Robert C. Martin',
    pageCount: 400
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'The Clean Architecture';

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge

let profile = {
    name: 'John Doe',
    age: 24,
    location: 'Philippines'
};

console.log(`${profile.name} is ${profile.age} and lives in ${profile.location}`);

profile.age = profile.age + 1;

console.log(`${profile.name} is ${profile.age} and lives in ${profile.location}`);
