var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

    document.onkeyup = function() {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        lettersGuessed.push(userGuess);

        var computerGuess = options[Math.floor(Math.random()*optiions.length)];

    if (userGuess==computerGuess) {
            wins++;
            guessesLeft = 9;
            lettersGuessed = [];
            alert("You Guessed right! " + wins);
    } 
    else if (guessesLeft==0){
            losses++;
            guessesLeft = 9;
            lettersGuessed = [];
            alert("Almost Got It..... - Click OK to Continue");
    }
    else {
            alert("Psychic Level = None");
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