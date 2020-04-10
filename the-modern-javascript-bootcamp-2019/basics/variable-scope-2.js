// Lecture:
//   Variable Shadowing - This might happen only on a local scope allowing to declare same variable name that the global have.

// Global (name)
    // Local
        // Local
    // Local

let name = 'John Doe';

if (true) {

    let name = 'Nina Doe'; // Local Variable Shadowing.

    if (true) {
        name = 'Jen Doe';
        console.log(name);
    }
}

if (true) {
    console.log(name);
}

// Global Variable Leaked Scenario:
// So make sure to declare a proper variable scope.

if (true) {
    if (true) {
        nameLeaked = 'Global Leaked';
        console.log(nameLeaked);
    }
}

console.log(nameLeaked);
