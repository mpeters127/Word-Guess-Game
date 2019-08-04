        //make a word array
        var words =['cowboy','horse','saloon','poker','blackjack','sixshooter','gold','miner','rustler']
        //select random word
        var word = words[Math.floor(Math.random() * words.length)];
        //make an array that displays the same number of blanks as letters in the word
        var answerArray = [];
            for (var i = 0; i<word.length; i++){
                answerArray[i] = ' _ ';
            }
            //create variable that shows remaining number of letters
        var remainingLetters = word.length;
        //remaining letters
        while (remainingLetters > 0) {
            alert(answerArray.join(''));
            //prompt guess
            var guess = prompt('Take your shot! Pick a letter!');
            //ability to exit game
            if (guess == null){
                break;
            }else if (guess.length > 1){
                alert ("You've gone too far partner!");
            //correct guess
            }for (var j = 0; j <word.length; j++){
                if (word[j] === guess){
                  answerArray[j] = guess;
                  remainingLetters--
                  alert('Nice shot!');
                  break;}
              }
      alert(answerArray.join(''));}
      alert("GOOD SHOOTIN' TEX! You guessed " +word)