const myAge = 27;

let message = '';

// Regular/common conditional structure.
// if (myAge >= 18) {
//     message = 'You can vote!';
// } else {
//     message = 'You can\'t vote!';
// }

// Ternary conditional operator.
// message = myAge >=18 ? 'You can vote!' : 'You can\'t vote!';

// Advance Ternary condition.
const showMessage = () => 'You can vote!';
const showErrorMessage = () => 'You can\'t vote!';

message = myAge >=18 ? showMessage() : showErrorMessage();

console.log(message);
