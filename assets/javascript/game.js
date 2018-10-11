
// Create an array of words
var words = [
    "winter",
    "throne",
    "sword",
    "king",
    "dragon",
    "fire",
    "ice",
    "castle"];

    function populateWord(activeWord){
        //clear arrays if there is anything inside them
        validLetters.length = 0;
        guessedLetters.length = 0;
    
        // set validLetters array - populate it with an array of letters that make up newWord
        validLetters = activeWord.split("");   // array of letters
        console.log ("VALIDLETTERS: "+ validLetters);
    
        // populate guessedLetters array with an underscore for each letter 
        for (var i = 0; i < validLetters.length; i++){
            guessedLetters.push("_");
        }
    
        
        // Print empty "word" to the screen
        currentWord.textContent = guessedLetters.join("");
        winsText.textContent = wins;
    
    }
    



// Create variables that hold references to the places in the HTML where we want to display things.
var currentWord = document.getElementById("wordInput");
var winsText = document.getElementById("winCount");
    
//declare Word object
var myWord = {
    newWord: "",
    
    // method to generate a new word
    generate: function() {
        // Get a random word and store it to the activeWord variable
        this.newWord = words[Math.floor(Math.random() * words.length)];
        return this.newWord;
    }   
 
}

// Create variable to store wins
var wins=0;

// Create an empty array to store guessed letters
var guessedLetters = [];
var validLetters = [];
var correctGuesses = 0;
var incorrectGuesses = 0;

var activeWord = myWord.generate();
    console.log ("ACTIVEWORD: "+ activeWord);

populateWord(activeWord);


console.log("word: " +activeWord);


console.log("Length of word: " + activeWord.length);
console.log("Correct Guesses: "+correctGuesses);
console.log('Before: ', winsText);

// winsText.textContent = "Testing";


    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        // Determines which key was pressed.
        var userGuess = event.key;
  
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        console.log();
        console.log(activeWord);

        if ((activeWord).includes(userGuess)){
            correctGuesses++;            
            guessedLetters[(validLetters).indexOf(userGuess)] = userGuess;        
            currentWord.textContent = guessedLetters.join("");
            
            if (correctGuesses === (validLetters).length){
                wins++;
                winsText.textContent = wins;
                correctGuesses = 0;
                activeWord = myWord.generate();
                populateWord(activeWord);
            }

        } else {
            incorrectGuesses++;
        }

    }
    