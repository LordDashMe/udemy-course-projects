// Multiple arguments
let add = function (a, b, c) {
    return a + b + c;
};

console.log(add(10, 1, 5));

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score;
};

console.log(getScoreText('John Doe'));
console.log(getScoreText(undefined, 99)); // To skip an argument in a function.

// Challenge
// Output: A 25% tip on $40 would be $10.
// Note: The template string implementation is used after the completion of "functions/template-string.js"

let getTip = function (totalBill = 0, tipPercentage = '20%') {
    let percentage = (parseInt(tipPercentage.replace('%', '')) / 100);
    let tip = (totalBill * percentage);
    return `A ${tipPercentage} tip on $${totalBill} would be $${tip}`;
};

console.log(getTip(40, '25%'));
