console.log('This is external JavaScript code implementation.');

// DOM - Document Object Model

// Query and remove element.
// const p = document.querySelector('p');
// p.remove();

const ps = document.querySelectorAll('p');

// Query all and remove element.
// ps.forEach(function (p) {
//     p.remove();
// })

// Editing content.
ps.forEach(function (p) {
    p.textContent = '***';
});

// Show content.
ps.forEach(function (p) {
    console.log(p.textContent);
});

// Add a new element.
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new element from JavaScript';
document.querySelector('body').appendChild(newParagraph);

// Event listener.
document.querySelector('button').addEventListener('click', function () {
    console.log('Button for notes app clicked!');
});
