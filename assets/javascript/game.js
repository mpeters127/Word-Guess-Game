//make words array

let words =['cowboy','horse','saloon','poker','blackjack','sixshooter','gold','miner','rustler','gambler']

//set variables 

  //empty variables
let randomWord = "";
let letters = [];
let blanks = 0;
let blanksAndCorrect = [];
let wrongGuess = []

  //counters
let wins = 0;
let losses = 0;
let numGuesses = 9;

//The game begins

function Game(){
  //selects words
  randomWord = words[Math.floor(Math.random() * words.length)];
  //separates word into its own array
  letters = randomWord.split("");
  //blank spaces for letters in word
  blanks = letters.length;
  //loop generating _'s for blanks
  for (let i = 0; i < blanks; i++) {
    blanksAndCorrect.push("_");
  }

  //populates html with ___. This is what I was struggling with initially
  document.getElementById("currentWord").innerHTML = " " + blanksAndCorrect.join(" ");

  //lets get some console logs going. Need to get better about this
  console.log(randomWord);
  console.log(letters);
  console.log(blanks);
  console.log(blanksAndCorrect);
}

//reset
function reset() {
  numGuesses = 9;
  wrongGuess = [];
  blanksAndCorrect = [];
  Game()
}

//checking letters

function checkLetters(letter) {
  let letterInWord = false;
  
  for (let i = 0; i < blanks; i++) {
    if (randomWord[i] == letter) {
      letterInWord = true;
    }
  }

  if (letterInWord) {
    for (let i = 0; i < blanks; i++) {
      if (randomWord[i] == letter) {
        blanksAndCorrect[i] = letter
      }
    }
  }

  else {
    wrongGuess.push(letter);
    numGuesses--;
  }
  console.log(blanksAndCorrect);
}

//checking for win/loss
function complete(){

  //if won
  if (letters.toString() == blanksAndCorrect.toString()){
    wins++;
    reset();
    document.getElementById("wins").innerHTML = " " + wins;
  }

  //if loss
  else if (numGuesses === 0) {
    losses++;
    reset();
    document.getElementById("losses").innerHTML = " " + losses;
  }
  document.getElementById("currentWord").innerHTML = " " + blanksAndCorrect.join(" ");
  document.getElementById("numGuesses").innerHTML = " " + numGuesses;
}
Game()

document.onkeyup = function(event){
  var guesses = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(guesses);
  complete();
  console.log(guesses);

  document.getElementById("wrongGuess").innerHTML = " " + wrongGuess.join(" ");
}