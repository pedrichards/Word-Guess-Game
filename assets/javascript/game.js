
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var wordChoices = [
        "pilaster",
        "column",
        "beam",
        "architrave",
        "buttress",
        "capital",
        "conch",
        "cornice",
        "frieze",
        "peristyle",
        "pilaster",
        "portico",
        "volutes",
        "dome",
        "gable",
        "joist",
        "vault",
        "mullion",
        "lintel",
        "tile",
        "window",
        "roof",
        "quoin",
        "post"];
    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var guesses = 13;
    var currentWord = 0;
    var currentGame = "";
    var guessedLetters = "";
    var currentWordArray = [];
    var userGuess = "";
    var currentGuessArray = [];
    var previousWord = "";

    // Create variables that hold references to the places in the HTML where we want to display things.
    var directionsText = document.getElementById("directions-text");
    var winsText = document.getElementById("wins-text");
    var currentWordText = document.getElementById("current-word-text");
    var guessesText = document.getElementById("number-remaining-guesses-text");
    var lettersText = document.getElementById("letters-already-guessed-text");
    var previousWordText = document.getElementById("previous-word-text");
    var winningText = document.getElementById("winning-text");
    var winsText = document.getElementById("wins-text");

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      // Determines which key was pressed.
      userGuess = event.key;
      
      
      if (currentGame === "") {
        currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
        currentWordArray = (Array.from(currentWord));
        for (var i = 0; i < currentWordArray.length; i++) {
            currentGame += "_";
        }
      }
      
      else {
        guessedLettersArray = (Array.from(guessedLetters));


        for (var i = 0; i < currentWordArray.length; i++) {
            var letterInWord = currentWordArray[i];
            if (userGuess === letterInWord) {
              currentGuessArray = (Array.from(currentGame));
              currentGuessArray[i] = userGuess;
              currentGame = currentGuessArray.join("");
            }
      }

      

      if ((guessedLettersArray.indexOf(userGuess) === -1) &&
       (currentGuessArray.indexOf(userGuess) === -1)){
                guessedLetters += userGuess.toUpperCase();
            }

      if ((guessedLettersArray.indexOf(userGuess) === -1) ||
      (currentGuessArray.indexOf(userGuess) === -1)){
      guesses = (guesses-1);
      }


      if (currentGame === currentWord) {
          winningText.textContent = "You win!";
          previousWord = currentWord;
          wins++;
          }
      else if (guesses === 0) {
        winningText.textContent = "You lose";
          }

      if ((guesses === 0) || (currentGame === currentWord)) {
          currentGame = "";
          guesses = 13;
          guessedLetters = "";

          }

    }
      
      
      currentWordText.textContent = currentGame;
      lettersText.textContent = "Letters Already Guessed" + guessedLetters;
      guessesText.textContent = "Remaining Guesses:" + guesses;
      winsText.textContent = "Wins:" + wins;
      previousWordText.textContent = previousWord;
      
      

        directionsText.textContent = "";

    };