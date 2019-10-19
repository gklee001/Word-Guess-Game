//Options the computer has to be able to guess
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//variables for wins, loses, guessing allowed before getting a negative point, an array to hold those guesses, human guess count will go down once when the human guess allowed goes to zero. 
var win = 0;
var lose = 0;
var humanGuessAllowed = 10;
var humanGuessArr = [];
var humanGuessCount = 8;
var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
console.log("computer guess " + computerGuess);
console.log(computerOptions.length)

document.onkeyup = function (event) {

    humanGuessArr.push(event.key);
    //push arr pushes up to 9 keys//
    humanGuess = event.key;
    // document.getElementById("humanGuess").innerHTML = "The pressed key was: " + humanGuessArr;
    console.log(humanGuessArr)
    //humanGuessAllowed = 10;
    console.log(humanGuess, computerGuess, humanGuessAllowed)
    if (humanGuess === computerGuess && humanGuessAllowed > 0) {
        win++;
        humanGuessAllowed = 10;
        computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        humanGuessArr = [];
    }


    if (humanGuess !== computerGuess && humanGuessCount != 0) {
        humanGuessAllowed--;
        console.log(humanGuessAllowed)
    } else {
        //humanGuessCount--;
    }
    if (humanGuessAllowed == 0) {
        lose++;
        humanGuessAllowed = 10;
        humanGuessArr = [];
    }


    if (humanGuessCount === 0 && humanGuessAllowed != 0) {
        lose++;
        humanGuessAllowed = 10;
        console.log(humanGuessAllowed)
    }

    document.getElementById("humanGuessAllowed").innerHTML =
        humanGuessArr;
    document.getElementById("win").innerHTML =
        win;
    document.getElementById("lose").innerHTML =
        lose;

    document.getElementById("computerGuess").innerHTML = computerGuess;
    document.getElementById("humanGuessCount").innerHTML = humanGuessAllowed;

    //add another reset function

};



    //want to display this information onto HTML??? Its not working,

    //need to declare an empty array for left over guesses


    //now we create function to have the computer randomly pick a letter//

    // var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    // console.log(computerGuess);

    //need to create a condition that allows human guess up to 10 times, maybe do a loop? now I should use else if to give conditions for win or lose also need to decrease the number of guesses also//
