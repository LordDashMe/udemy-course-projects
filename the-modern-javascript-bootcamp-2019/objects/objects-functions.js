// Lecture:
//   Functions - can return objects.

let myBook = {
    title: 'The Clean Code',
    author: 'Robert C. Martin',
    pageCount: 400
};

let otherBook = {
    title: 'The Clean Architecture',
    author: 'Robert C. Martin',
    pageCount: 400
};

let getBookSummary = function (book) {
    console.log(`${book.title} by ${book.author}`);
};

let getBookSummaryObject = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    };
};

getBookSummary(myBook);
getBookSummary(otherBook);

console.log(getBookSummaryObject(myBook).summary);
console.log(getBookSummaryObject(otherBook).pageCountSummary);

// Challenge
// Create function - take fahrenheit in - return objects with all three type of temp measurements.

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    };
};

console.log(convertFahrenheit(32));
