// Create an array of words
var words = [
    "winter",
    "throne",
    "sword",
    "king",
    "dragon",
    "fire",
    "ice",
    "castle"]

// Create variable to store wins
var wins=0;

// Create an empty array to store guessed letters
var guessed = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var currentWord = document.getElementById("wordInput");
var winsText = document.getElementById("winCount");

var activeWord = words[Math.floor(Math.random() * words.length)];
var guessedLetters = [];
var validLetters = activeWord.split("");   // array of letters
var correctGuesses = 0;
var incorrectGuesses = 0;


for (var i = 0; i < validLetters.length; i++){
    guessedLetters.push("_");
}

// Print empty "word" to the screen
currentWord.textContent = guessedLetters.join("");
winsText.textContent = wins;


console.log("Length of word: " + activeWord.length);
console.log("Correct Guesses: "+correctGuesses);
console.log("Active word: " + activeWord);
console.log("letters: "+ validLetters);
console.log('Before: ', winsText);

// winsText.textContent = "Testing";


    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        // Determines which key was pressed.
        var userGuess = event.key;
  
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        console.log();
        console.log(activeWord);

        if (activeWord.includes(userGuess)){
            correctGuesses++;            
            guessedLetters[validLetters.indexOf(userGuess)] = userGuess;        
            currentWord.textContent = guessedLetters.join("");
            
            if (correctGuesses === validLetters.length){
                wins++;
                winsText.textContent = wins;
                correctGuesses = 0;
                
            }

        } else {
            incorrectGuesses++;
        }

    }
    