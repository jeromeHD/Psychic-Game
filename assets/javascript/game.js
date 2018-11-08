var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = []

    document.onkeyup = function() {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess);

        lettersGuessed.push(userGuess);

        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
        console.log(computerGuess);

    if (userGuess==computerGuess) {
            wins++;
            guessesLeft = 9;
            lettersGuessed = [];
            alert("The psychic is strong in you! " + wins);
    } 
    else if (guessesLeft==0){
            losses++;
            guessesLeft = 9;
            lettersGuessed = [];
            alert("Pyschic level Nonexistent! - Click OK to Continue");
    }
    else {
            alert("Again!!!");
            guessesLeft--;
    }

    var html = "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter I'm thinking of</p>" +
    "<p>Wins: " + wins + "</p>" + 
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses left: " + guessesLeft + "</p>" +
    "<p>Your Guesses so far: " + lettersGuessed + "</p>";

    document.querySelector("#game").innerHTML = html;
    }