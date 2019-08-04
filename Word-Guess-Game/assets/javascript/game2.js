var words =['cowboy','horse','saloon','poker','blackjack','sixshooter','gold','miner','rustler']

var wins = 0;

var losses = 0;

var numGuesses = 10;

var guessChoices = [];

document.onkeyup = function(event) {

  var userGuess = event.key;

  var word = words[Math.floor(Math.random() * words.length)];
  var answerArray = [];
  for (var i = 0; i<word.length; i++){
      answerArray[i] = ' _ ';
  }  

 if (options.indexOf(userGuess) > -1) {

   if (userGuess === computerGuess) {
     wins++;
     numGuesses = 10;
     guessChoices = [];
   }

   if (userGuess != computerGuess) {
     numGuesses --;
     guessChoices.push(userGuess);
   }

   if (numGuesses === 0) {

   numGuesses = 9;
   losses ++;
   guessChoices = [];

   }
 
 }
};