// was told to put code in .js//

//first step is to write a code to guess what letter the computer is thinking//

var computerOptions = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

//now create variables for wins and loses and numbers of guesses for humans and computer, the variables start at 0, then increase//

var humanGuess = 0;
var computerGuess = 0;
var wins = 0;
var lose = 0;
var humanGuessAllowed = 10;

//now we need to create a function to capture the users guess//
//this was something I used from the rock paper scissor activity//
document.onkeypress = fuction(event) {
    var humanGuess = event.key;
    document.getElementById("demo").innerHTML = "The pressed key was: " + humanGuess;
}

console.log(humanGuess);

//now we create function to have the computer randomly pick a letter//
var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];

//need to create a condition that allows human guess up to 10 times, maybe do a loop?

//now I should use else if to give conditions for win or lose//
if (humanGuess === computerOption) {
    wins++
}

else (humanGuess !== computerGuess) {
    lose++
}
//need to decrease the number of guesses also

if (humanGuessAllowed = 0) {
    lose++
}

