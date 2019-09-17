//first step is to write a code to guess what letter the computer could be thinking//
// This also needs to be in an array change the () to [] duhhhhhhmmmy;
var computerOptions = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

var win = 0;
var lose = 0;
var humanGuessAllowed = 10;
var humanGuessArr = [];
var humanGuessCount = 8;



//document.getElementById("#humanGuess").innerHTML = humanGuess;
//document.getElementById("#computerGuess").innerHTML = computerGuess;
//document.getElementById("#humanGuessAllowed").innerHTML = humanGuessAllowed;

//now we need to create a function to capture the users guess, this was something I used from the rock paper scissor activity//  
document.onkeyup = function (event) {

    humanGuessArr.push(event.key);
    //push arr pushes up to 9 keys//
    humanGuess = event.key;
    document.getElementById("humanGuess").innerHTML = "The pressed key was: " + humanGuessArr;
    console.log(humanGuessArr)
    //humanGuessAllowed = 10;
    // This if statement says
    // if humanguess euqual to compguess AND humanGuessCount is greater than 0 increment win and set humamGuessCount to 8
    // this is ok 
    if (humanGuess === computerGuess && humanGuessCount > 0) {
        win++;
        humanGuessArr.length = 0;
        humanGuessAllowed = 10;
        humanGuessCount = 8;
        // forgot to add this to reset it
        computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    }
    // if humanGuess does not match compGuess and humanGuessCount does not equal zero
    // then humanGuessAllowed minus else humanGuessCount -1 
    // humanGuessCount should be === 0 
    // because u only wanna dec allowed guesses when human guest count is zero not when it doesnt equal zero
    if (humanGuess !== computerGuess && humanGuessCount === 0) {
        // you forgot to reset human count to 8 if they lose 
        // and reset the humanGuessArr to empty
        humanGuessArr.length = 0;
        humanGuessCount = 8;
        humanGuessAllowed--;
    } else {
        humanGuessCount--;
    }

    if (humanGuessCount === 0 && humanGuessAllowed === 0) {
        lose++;
        //reset if they lose u forgot that 
        humanGuessArr.length = 0;
        humanGuessAllowed = 10;
        humanGuessCount = 8
        // console.log(humanGuessAllowed)
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
