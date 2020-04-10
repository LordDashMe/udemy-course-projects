'use strict';

// Challenge 1

// const paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(function (paragraph) {
//     if (paragraph.textContent.includes('the')) {
//         paragraph.remove();
//     }
// });


// Challenge 2

// let todos = [
//     {
//         text: 'Order cat food.',
//         is_completed: true
//     },
//     {
//         text: 'Clean kitchen.',
//         is_completed: true
//     },
//     {
//         text: 'Do work.',
//         is_completed: false
//     },
//     {
//         text: 'Excercise.',
//         is_completed: true
//     },
// ];

let todos = [];

const filters = {
    search: '',
    hideCompleted: false,
    other: false
};

// Challenge 3
// Refactoring stage, all the function are placed on the todo-functions.js

renderTodo();
renderSummary();

addAction();
truncateAction();
searchAction();
hideCompletedAction();
otherFiltersAction();

// Syncing Data using storage of browser.
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        renderTodo();
        renderSummary();

        addAction();
        truncateAction();
        searchAction();
        hideCompletedAction();
        otherFiltersAction();
    }
});
