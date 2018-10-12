

    function populateWord(activeWord){
        //clear arrays if there is anything inside them
        validLetters.length = 0;
        guessedLetters.length = 0;
    
        // set validLetters array - populate it with an array of letters that make up newWord
        validLetters = activeWord.split("");   // array of letters
        
        // populate guessedLetters array with an underscore for each letter 
        for (var i = 0; i < validLetters.length; i++){
            guessedLetters.push("_");
        }
    
        
        // Print empty "word" to the screen
        currentWord.textContent = guessedLetters.join("");
        winsText.textContent = wins;
        guessesText.textContent = guessesLeft;
    
    }
    
// Create variables that hold references to the places in the HTML where we want to display things.
var currentWord = document.getElementById("wordInput");
var winsText = document.getElementById("winCount");
var guessesText = document.getElementById("guessesLeft");
var leftImage = document.getElementsByClassName("leftpic");


// Create variable to store wins
var wins=0;

// Create an empty array to store guessed letters
var guessedLetters = [];
var validLetters = [];
var correctGuesses = 0;
var guessesLeft = 5;


//declare Word object
var myWord = {
    newWord: "",
    // Create an array of words

    words : [
    "winter",
    "throne",
    "sword",
    "king",
    "dragon",
    "fire",
    "ice",
    "castle"],

    
    // method to generate a new word
    generate: function() {
        // Get a random word and store it to the activeWord variable
        this.newWord = this.words[Math.floor(Math.random() * this.words.length)];
        guessesLeft = 5;
        return this.newWord;
    }   
 
}

var activeWord = myWord.generate();
    console.log ("ACTIVEWORD: "+ activeWord);

populateWord(activeWord);

// populate Guesses Remaining field

// commenting out below few lines- this was an experiment that partly works but is more complicated than it needs to be
// var newSpan = document.createElement("span");
// var spanNode = document.createTextNode(guessesLeft);
// newSpan.appendChild(spanNode);

guessesText.textContent = guessesLeft;



console.log("word: " +activeWord);


// winsText.textContent = "Testing";


    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        // Determines which key was pressed.
        var userGuess = event.key;
  
        // Randomly chooses a choice from the options array. This is the Computer's guess.
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
            guessesLeft--;
            guessesText.textContent = guessesLeft;
            if (guessesLeft === 0) {
                leftImage.src = "assets/images/youlose.jpg";
                var audioElement = document.createElement("audio");
                audioElement.setAttribute("src", "assets/mp3/rains_of_castamere.mp3");
                audioElement.play();
            
            }
        }
    }
    