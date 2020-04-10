// Lecture:
//  AND operator - Both condtion must be true else false.
//  OR operator - Need only one condition true then it will execute the code block else false.

let temp = 65;

if (temp >= 60 && temp <= 90) { // AND implementation.
    console.log('It is pretty nice outside.');
} else if (temp <= 0 || temp >= 120) { // OR implementation.
    console.log('Do not go outside.');
} else {
    console.log('Oks!');
}

// Challenge

let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes.');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options.');
} else {
    console.log('Offer all');
}
