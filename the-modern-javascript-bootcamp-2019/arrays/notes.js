// Lecture:
//   Array declartion.

const notes = ['1', '2', '3'];

console.log(notes.length); // 3
console.log(notes[notes.length - 2]); // 2

// Manupulating Arrays
notes.push('4 - temp'); // add item at the last of the collection.
console.log(notes.length); // 4

console.log(notes.pop()); // remove item at the last of the collection.
console.log(notes.length); // 3

notes.shift(); // remove item at the first position of the collection.
notes.unshift('0 - temp'); // add item at the first position of the collection.
console.log(notes); // [ '0 - temp', '2', '3' ]

notes.splice(1, 0, 'This is new item'); // inset new item on index 1.
console.log(notes); // [ '0 - temp', 'This is new item', '2', '3' ]

notes[1] = 'Override last update'; // overriding selected index.
console.log(notes); // [ '0 - temp', 'Override last update', '2', '3' ]

// Looping Arrays
notes.forEach((item) => {
    console.log(item);
});

// For Loop
for (let count = 0; count <= 2; count++) {
    console.log(count);   
}
// Reverse Loop
for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count]);   
}

console.log('indexOf: ', notes.indexOf('2'));

// Array with Objects
const arrayObjects = [
    {
        title: 'The Clean Code',
        body: 'Writing a code in a clean manner.'
    },
    {
        title: 'The Clean Architecture',
        body: 'Making a better software architecture.'
    }
];

console.log('arrayObject: ',  arrayObjects.indexOf({}));

// Objects equality does not determine by its content.
// Meaning: {} === {} is FALSE
// Objects that are reference are always equal.
// Meaning: 
//   var obj = {};
//   var dupObj = obj;
//   obj === dupObj is TRUE

// Find Index
const index = arrayObjects.findIndex(function (arrayObject, index) {
    return arrayObject.title === 'The Clean Architecture';
});
console.log(index);
