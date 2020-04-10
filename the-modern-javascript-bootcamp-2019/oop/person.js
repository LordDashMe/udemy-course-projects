// OOP
// A Constructor Function
const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
};

// Prototypal Inherintance
//  if you use "prototype"
Person.prototype.getBio = function () {

    let bio = `${this.firstName} is ${this.age}.`; 

    // Arrow function allow to access the outer "this" keyword
    // which is amazing! hahaha though weird because of the readability.
    this.likes.forEach((like) => { 
        bio += ` ${this.firstName} like ${like}`;
    });

    return bio;
};

Person.prototype.setName = function (fullName) {
    const splittedFullName = fullName.split(' ');
    this.firstName = splittedFullName[0];
    this.lastName = splittedFullName[1];
};

const personOne = new Person('Dash', 'Reyes', 24, ['Coding', 'Coding']);
personOne.setName('Dashh Reyes');
console.log(personOne.getBio());

const personTwo = new Person('John', 'Doe', 24, []);
console.log(personTwo.getBio());

// Prototypical Inheritance
// [[prototype]] always stored on the obj instance.
