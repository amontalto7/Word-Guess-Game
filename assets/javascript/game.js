// Create variables that hold references to the places in the HTML where we want to display things.
var currentWord = document.getElementById("wordInput");
var winsText = document.getElementById("winCount");
var guessesText = document.getElementById("guessesLeft");
var leftImage = document.getElementById("imgLeft");
var guessedLettersText = document.getElementById("pGuessedLetters");
var resultsText = document.getElementById("results");
var audioElement = document.createElement("audio");
var stopButton = document.getElementById("btnStop");


console.log(guessedLettersText);


// Create variable to store wins
var wins = 0;

// Create an empty array to store guessed letters
var guessedLetters = [];
var validLetters = [];
var guessesLeft = 6;


// check if alpha
var isAlpha = function (ch) {
    return /^[A-Z]$/i.test(ch);
}

//declare Word object
var myWord = {
    newWord: "",
    // Create an array of words

    words: [
        "winter",
        "throne",
        "sword",
        "king",
        "dragon",
        "fire",
        "ice",
        "castle",
        "winterfell",
        "storm",
        "dwarf",
        "snow",
        "khaleesi",
        "dothraki"
    ],


    // method to generate a new word
    generate: function () {
        // Get a random word and store it to the activeWord variable
        this.newWord = this.words[Math.floor(Math.random() * this.words.length)];
        guessesLeft = 6;
        return this.newWord.toUpperCase();
    }

}

// function to populate word
function populateWord(activeWord) {
    //clear arrays if there is anything inside them
    validLetters.length = 0;
    guessedLetters.length = 0;

    // set validLetters array - populate it with an array of letters that make up newWord
    validLetters = activeWord.split("");   // array of letters

    // populate guessedLetters array with an underscore for each letter 
    for (var i = 0; i < validLetters.length; i++) {
        guessedLetters.push("_");
    }


    // Print empty "word" to the screen
    currentWord.textContent = guessedLetters.join("");
    winsText.textContent = wins;
    guessesText.textContent = guessesLeft;

}


var activeWord = myWord.generate();
console.log("ACTIVEWORD: " + activeWord);

populateWord(activeWord);

function resetWord() {
    activeWord = myWord.generate();
    populateWord(activeWord);
    guessesText.textContent = guessesLeft;
    guessedLettersText.textContent = "";
}


// populate Guesses Remaining field

// commenting out below few lines- this was an experiment that partly works but is more complicated than it needs to be
// var newSpan = document.createElement("span");
// var spanNode = document.createTextNode(guessesLeft);
// newSpan.appendChild(spanNode);

guessesText.textContent = guessesLeft;

resetWord();

console.log("word: " + activeWord);
// click event for stop button
stopButton.onclick = function (event) {
    audioElement.pause();
}


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {


    // Determines which key was pressed.
    var userGuess = event.key;

    // check if it's a letter
    if (isAlpha(userGuess)) {

        userGuess = userGuess.toUpperCase();

        console.log(activeWord);

        // populate guessedLetters array with new guessed letter if correct
        if ((activeWord).includes(userGuess)) {
            for (var i = 0; i < validLetters.length; i++) {
                if (validLetters[i] === userGuess) {
                    guessedLetters[i] = userGuess;
                }
            }

            // output correctly guessed letters
            currentWord.textContent = guessedLetters.join("");

            // if you guessed all the letters, you win!
            if (guessedLetters.includes("_") === false) {
                wins++;
                winsText.textContent = wins;
                leftImage.src = "assets/images/dragonwin.jpg";
                audioElement.setAttribute("src", "assets/mp3/game_of_thrones_beat.mp3");
                audioElement.play();
                resultsText.textContent = "Winter is coming, but not today. You win!";
                setTimeout(function () {
                    resetWord();
                }, 3000);
            }

        } else {
            if (guessedLettersText.textContent.includes(userGuess) === false) {
                guessesLeft--;
                guessesText.textContent = guessesLeft;
                guessedLettersText.append(userGuess + ", ");

                // if you run out of guesses, you lose
                if (guessesLeft === 0) {
                    leftImage.src = "assets/images/youlose.jpg";
                    audioElement.setAttribute("src", "assets/mp3/rains_of_castamere.mp3");
                    audioElement.play();
                    resultsText.textContent = "The night is dark and full of terrors. You lose.";
                    resetWord();

                }
            }
        }
    }
}
