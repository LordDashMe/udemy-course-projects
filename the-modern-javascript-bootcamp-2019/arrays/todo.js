// Project
// Create an array with five todos
// You have x todos
// Print the first and second to last items -> Todo: Todo 4

const todos = [
    'Todo 1',
    'Todo 2',
    'Todo 3',
    'Todo 4',
    'Todo 5',
];

console.log(`You have ${todos.length} todos!`);
console.log(`Todo: ${todos[0]}`);
console.log(`Todo: ${todos[todos.length - 1]}`);

// Challenge
// Array manupulation.
// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list.

todos.splice(2, 1);
todos.push('Todo 6');
todos.shift();

console.log(todos);

// Good for array reading.
todos.forEach((todo, index) => {
    const num = index + 1;
    console.log(`${num}. ${todo}`);
});

// Challenge - For Loop
// Mimic the process of foreach loop above using for loop.
for (let count = 0; count < todos.length; count++) {
    const num = count + 1;
    console.log(`${num}. ${todos[count]}`);
}
