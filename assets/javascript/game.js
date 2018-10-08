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
// var directionsText = document.getElementById("directions-text");
// var userChoiceText = document.getElementById("userchoice-text");
var currentWord = document.getElementById("wordInput");
var winsText = document.getElementById("winCount");

console.log('Before: ', winsText);
// winsText.textContent = "Testing";


    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        // Determines which key was pressed.
        var userGuess = event.key;
  
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var activeWord = words[Math.floor(Math.random() * words.length)];
        currentWord.textContent = activeWord;
    }  