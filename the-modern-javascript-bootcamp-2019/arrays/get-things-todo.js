const todos = [
    {
        text: 'Order cat food.',
        is_completed: true
    },
    {
        text: 'Clean kitchen.',
        is_completed: true
    },
    {
        text: 'Do work.',
        is_completed: false
    },
    {
        text: 'Excercise.',
        is_completed: true
    },
];

function getThingsTodo(todos) {
    return todos.filter(function (todo) {
        return !todo.is_completed;
    });
}

console.log(getThingsTodo(todos));
