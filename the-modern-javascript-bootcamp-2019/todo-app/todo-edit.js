const onEditTodo = () => {
    
    const todo = todos.find((todo) => todo.uuid === todoUUID);
    
    const todoTitle = document.querySelector('#todoTitle');
    
    todoTitle.value = todo.text;
    
    todoTitle.addEventListener('input', (e) => {
        editTodo(todo, e.target.value);
    });

    document.querySelector('#removeTodo').addEventListener('click', (e) => {
        deleteTodo(todoUUID);
        location.assign('/index.html');
    });
};

const todoUUID = location.hash.substring(1);

let todos = [];

getSaveTodos();
onEditTodo();

// Syncing Data using storage of browser.
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        todos = JSON.parse(e.newValue);
    }
    onEditTodo();
});
