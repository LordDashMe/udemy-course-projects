// Lecture:
//   Local Scope - Define inside of a code block.
//   Global Scope - Define outside of any code blocks.
// Note: In a local scope you can access the define local variables and the define global variables.

let globalScope = 'Is a Global Scope';

if (true) {
    let localScope = 'Only available inside a code block.';
    console.log(localScope);
}

console.log(globalScope);

// Lexical Scope (Static Scope)

// Global Scope (varOne)
    // Local Scope (varTwo)
        // Local Scope (varFour)
    // Local Scope (varThree)

let varOne = 'varOne';

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo';
    console.log(varTwo);

    if (true) {
        let varFour = 'varFour';
    }
}

if (true) {
    let varThree = 'varThree';
}

console.log(varTwo); // This is expected to throw error because of the JS Lexical Scope.
