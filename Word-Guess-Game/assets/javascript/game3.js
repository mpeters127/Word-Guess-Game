   //options available for the computer to select
   var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

   var wins = 0;
    let wins = document.querySelector('#rides')
   var losses = 0;
   var numGuesses = 9;
   var guessChoices = [];
   
  //user letter selection
   document.onkeyup = function(event) {

     var userGuess = event.key;
    //randomized computer guess
     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //options for user to select
     var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
     

    if (options.indexOf(userGuess) > -1) {
      //if user guesses correct they get a win and total guesses resets
      if (userGuess === computerGuess) {
        wins++;
        numGuesses = 9;
        guessChoices = [];
      }
      //if user guess is not comp guess
        //user loses a guess
        //the guess is pushed to guess choices
      if (userGuess != computerGuess) {
        numGuesses --;
        guessChoices.push(userGuess);
      }
      //if user runs out of guesses
        //number of guesses resets
        //number of losses goes up
      if (numGuesses === 0) {

      numGuesses = 9;
      losses ++;
      guessChoices = [];

      
    }

    var html = 
    "<h1> The Psychic Game </h1>" +
    "<p>Guess what letter I'm thinking of!</p>" +
  
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + numGuesses + "</p>" +
    "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = html;

    
    }
  };
