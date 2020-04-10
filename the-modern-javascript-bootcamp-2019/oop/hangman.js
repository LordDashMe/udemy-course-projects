// Challenge

// First
// 1. Create a constructor function for the hangman game
// 2. Setup two attributes. One for the word itself. Another for the number of guesses allowed.
// 3. Create two instances of it and print both to the console.

// Second
// 1. Set up the word instance property as an array of lower case letter.
// 2. Set up another instance property to store guessed letters.
// 3. Create a method that gives you the word puzzle back.

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = ['c'];
};

Hangman.prototype.getPuzzle = function () {
    
    let puzzle = '';
    
    this.word.forEach((letter) => {
        if (letter === ' ' || this.guessedLetters.includes(letter)) {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    });

    return puzzle;
};

const game1 = new Hangman('letter', 2);

console.log(game1.getPuzzle());

const game2 = new Hangman('lovely test', 3);

console.log(game2.getPuzzle());
