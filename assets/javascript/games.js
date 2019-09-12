//first step is to write a code to guess what letter the computer could be thinking//

var computerOptions = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

var win = 0;
var lose = 0;
var humanGuessAllowed = 10;
var humanGuess = 0;



//document.getElementById("#humanGuess").innerHTML = humanGuess;
//document.getElementById("#computerGuess").innerHTML = computerGuess;
//document.getElementById("#humanGuessAllowed").innerHTML = humanGuessAllowed;

//now we need to create a function to capture the users guess, this was something I used from the rock paper scissor activity//  
document.onkeyup = function (event) {

    humanGuess = event.key;
    document.getElementById("humanGuess").innerHTML = "The pressed key was: " + humanGuess;
    console.log(humanGuess)


    if (humanGuess == computerGuess) {
        win++;
        humanGuessAllowed = 10;
        humanGuess = 0;

    }
    if (humanGuess !== computerGuess) {
        humanGuessAllowed--;
    }

    else if (humanGuessAllowed === 0) {
        lose++;
        humanGuessAllowed = 10;
        console.log(humanGuessAllowed)
    }

    document.getElementById("humanGuessAllowed").innerHTML =
        humanGuessAllowed;

    document.getElementById("win").innerHTML =
        win;
    document.getElementById("lose").innerHTML =
        lose;


    //add another reset function

};

//want to display this information onto HTML??? Its not working,

//need to declare an empty array for left over guesses


//now we create function to have the computer randomly pick a letter//

var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
console.log(computerGuess)

//need to create a condition that allows human guess up to 10 times, maybe do a loop? now I should use else if to give conditions for win or lose also need to decrease the number of guesses also




