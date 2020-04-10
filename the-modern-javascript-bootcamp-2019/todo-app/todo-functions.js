'use strict';

const addAction = () => {
    document.querySelector('#todoForm').addEventListener('submit', (e) => {
        e.preventDefault();
        saveTodo(e.target.elements.todoText.value);
        e.target.elements.todoText.value = '';
        renderTodo();
        renderSummary();
    });
};

const truncateAction = () => {
    document.querySelector('#deleteAll').addEventListener('click', (e) => {
        SimpleLocalStorageWrapper.clearAll();
        renderTodo();
        renderSummary();
    });
};

const searchAction = () => {
    document.querySelector('#search').addEventListener('change', (e) => {
        filters.search = e.target.value;
        renderTodo();
        renderSummary();
    });
};

const hideCompletedAction = () => {
    document.querySelector('#hideCompleted').addEventListener('change', (e) => {
        filters.hideCompleted = e.target.checked;
        renderTodo();
        renderSummary();
    });
};

const otherFiltersAction = () => {
    document.querySelector('#otherFilters').addEventListener('change', (e) => {
        filters.others = e.target.value;
        renderTodo();
    });   
};

const renderTodo = () => {
    document.querySelector('#todoContainer').innerHTML = '';

    getSaveTodos();
    
    // Deep Cloning Object.
    let filterTodos = JSON.parse(JSON.stringify(todos));
    
    filterTodos = renderTodoFilterSearch(filterTodos);
    filterTodos = renderTodoFilterHideCompleted(filterTodos);

    if (filters.others && filters.others === 'date') {
        filterTodos = renderTodoFilterByDate(filterTodos);
    }
    if (filters.others && filters.others === 'last-edited-date') {
        filterTodos = renderTodoFilterByEditedDate(filterTodos);
    }

    // debugger; Useful when debugging.

    filterTodos.forEach((filterTodo) => {
        generateTodoDOM(filterTodo);   
    });
};

const generateTodoDOM = (todo) => {
    const todoDiv = document.createElement('div');

    const todoA = document.createElement('a');
          todoA.className = 'note';
          todoA.textContent = ' ' + todo.text + ' ';
          todoA.href = `/edit.html#${todo.uuid}`;

    const todoCompleteCheckBox = document.createElement('input');
          todoCompleteCheckBox.className = 'complete-todo';
          todoCompleteCheckBox.type = 'checkbox';
          todoCompleteCheckBox.checked = todo.is_completed;
          completedInlineAction(todoCompleteCheckBox, todo.uuid);

    const todoRemoveButton = document.createElement('button');
          todoRemoveButton.className = 'remove-note-btn';
          todoRemoveButton.textContent = 'x';
          deleteInlineAction(todoRemoveButton, todo.uuid);

    todoDiv.appendChild(todoCompleteCheckBox);
    todoDiv.appendChild(todoA);
    todoDiv.appendChild(todoRemoveButton);

    document.querySelector('#todoContainer').appendChild(todoDiv);
};

const completedInlineAction = (todoCompleteCheckBox, uuid) => {
    todoCompleteCheckBox.addEventListener('change', (e) => {
        const isCompleted = e.target.checked;
        SimpleLocalStorageWrapper.save('todos', todos.map((todo) => {
            if (todo.uuid === uuid) {
                todo.is_completed = isCompleted;
            }
            return todo;
        }));
        renderTodo();
        renderSummary();
    });
};

const deleteInlineAction = (todoRemoveButton, uuid) => {
    todoRemoveButton.addEventListener('click', (e) => {
        deleteTodo(uuid);
        renderTodo();
        renderSummary();
    });
};

const renderTodoFilterSearch = (filterTodos) => {
    return filterTodos.filter((filterTodo) => 
           filterTodo.text.toLocaleLowerCase().includes(filters.search.toLocaleLowerCase()));
};

const renderTodoFilterHideCompleted = (filterTodos) => {
    return filterTodos.filter((filterTodo) => (!filters.hideCompleted || !filterTodo.is_completed));   
};

const renderTodoFilterByDate = (filterTodos) => {
    return filterTodos.sort((a, b) => ((a.created_at < b.created_at) ? 1 : -1));   
};

const renderTodoFilterByEditedDate = (filterTodos) => {
    return filterTodos.sort((a, b) => (a.updated_at < b.updated_at) ? 1 : -1);   
};

const renderSummary = () => {
    document.querySelector('#todoSummary').innerHTML = '';
    generateSummaryDOM(renderSummaryFilterIncompleteTodos());
};

const renderSummaryFilterIncompleteTodos = () => todos.filter((todo) => !todo.is_completed);

const generateSummaryDOM = (incompleteTodos) => {
    const summaryParagraph = document.createElement('h2');
          summaryParagraph.textContent = `You have ${incompleteTodos.length} todo(s) left.`;
    document.querySelector('#todoSummary').appendChild(summaryParagraph);    
};

const saveTodo = (text) => {
    const datetime = new Date();
    todos.push({
        uuid: uuidv4(),
        text: text,
        is_completed: false,
        created_at: datetime.getTime(),
        updated_at: datetime.getTime()
    });
    SimpleLocalStorageWrapper.save('todos', todos);
};

const editTodo = (todo, text) => {
    const datetime = new Date();
    todo.text = text;
    todo.updated_at = datetime.getTime();
    SimpleLocalStorageWrapper.save('todos', todos);
};

const getSaveTodos = () => {
    try {
        todos = SimpleLocalStorageWrapper.get('todos');
    } catch (e) {
        todos = [];
    }
};

const deleteTodo = (uuid) => {
    SimpleLocalStorageWrapper.save('todos', todos.filter((todo) => todo.uuid !== uuid));
};

// Take Note: LocalStorage value supports only string data type.
const SimpleLocalStorageWrapper = {
    save: function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get: function (key) {
        return JSON.parse(localStorage.getItem(key));
    },
    remove: function (key) {
        localStorage.removeItem(key);
    },
    clearAll: function () {
        localStorage.clear();
    }
};

const uuidv4 = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
};


