// VARIABLES
// ==========================================================================

var carMakeandModel = ["Nissan Sentra", "GMC Sierra", "Jeep Grand Cherokee", "Jeep Cherokee", "Jeep Wrangler", "Toyota Highlander"];

// var car = {
//     "Nissan Sentra": 213046,
//     "GMC Sierra": 224554,
//     "Jeep Grand Cherokee": 224908,
//     "Jeep Cherokee": 239437,
//     "Jeep Wrangler": 240032,
//     "Toyota Highlander": 244511,
//     make: "Honda",
//     model: "Fit",
//     color: "Blue Raspberry",
//     mileage: 3000,
//     isWorking: true
// };

var directionsText = document.getElementById("directions-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remainingAttemptsText = document.getElementById("remaining-attempts-text");
var incorrectAttempts = 5;

// MAIN PROCESS
// ==============================================================================

// Randomly chooses a choice from the options array. This is the Computer's guess.
var randomNUmber = Math.floor(Math.random() * carMakeandModel.length);
var computerGuess = carMakeandModel[randomNUmber];

alert(computerGuess);

var computerGuessArray = [];
var MOdifiedComputerGuessArray = [];
for (i = 0; i < computerGuess.length; i++){
    computerGuessArray.push(computerGuess.slice(i, i+1))
}

alert("ComputerGuessArray" + computerGuessArray);

for (i = 0; i < computerGuessArray.length; i++){
    if (computerGuessArray[i] == " ")  {
        computerGuessArray[i] = " - ";
    }
    else {
        computerGuessArray[i] = " _ ";
    }
}

MOdifiedComputerGuess = computerGuessArray.join(" ");
// MOdifiedComputerGuess = computerGuess.replace(/[" "]/gi, " - ");
// MOdifiedComputerGuess = MOdifiedComputerGuess.replace(/[a-z]/gi, " _ ");
computerChoiceText.textContent = "Here's the word(Hyphens(-) are actually spaces in the word):    " + MOdifiedComputerGuess;
remainingAttemptsText.textContent = "The number of remaining incorrect attempts is " + incorrectAttempts;

 // This function is run whenever the user presses a key.
 
 var firstIteration = true;

document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    userGuess = String(userGuess);

    alert(userGuess);
    alert(computerGuess);
    var LetterPositionInWord = carMakeandModel[randomNUmber].search(userGuess);

    alert("letter in position" + LetterPositionInWord);

    
    // Rebuild the array, since it was modified.
    computerGuessArray = [];
    if (firstIteration) {
        for (i = 0; i < computerGuess.length; i++){
            computerGuessArray.push(computerGuess.slice(i, i+1))
            firstIteration = false;
        }
    }
    MOdifiedComputerGuessArray = computerGuessArray;

    alert("MOdifiedComputerGuessArrray" + MOdifiedComputerGuessArray);
    
    MOdifiedComputerGuess = MOdifiedComputerGuessArray.join(" ");

    alert("MOdifiedComputerGuess" + MOdifiedComputerGuess);

    // while (i < incorrectAttempts){
    // var sRegExInput = new RegExp(userGuess);
    if (LetterPositionInWord >= 0){
        alert("computers original guess:   " + computerGuess);
        alert("Remind me of the user guess" + userGuess);
        alert("computerGuessArray[0]" + computerGuessArray[0]);
        
        for (i = 0; i < computerGuessArray.length; i++){
            if (MOdifiedComputerGuessArray[i] == userGuess) {
               MOdifiedComputerGuessArray[i] = userGuess;
               alert("Inside If" + MOdifiedComputerGuessArray[i]);
            }
            else if (MOdifiedComputerGuessArray[i] == " ")  {
                MOdifiedComputerGuessArray[i] = " - ";
            }
            else {
                MOdifiedComputerGuessArray[i] = " _ ";
            }
        }

        alert(MOdifiedComputerGuessArray);
        MOdifiedComputerGuess = MOdifiedComputerGuessArray.join(" ");

        // MOdifiedComputerGuess = computerGuess.replace(/[" "]/gi, "-");
        // alert("RegEx" + sRegExInput);
        // MOdifiedComputerGuess = MOdifiedComputerGuess.replace(/[userGuess]/gi, "&");
        // MOdifiedComputerGuess = MOdifiedComputerGuess.replace(/[a-z]/gi, " _ ");
        // MOdifiedComputerGuess = MOdifiedComputerGuess.replace(/["&"]/g, userGuess);
        
        computerChoiceText.textContent = "Here's the word(Hyphens(-) are spaces in the word:    " + MOdifiedComputerGuess;
    }

    //     If (incorrectLetter) {
    //         i++;
    //     }

    // }
    

      // Display the user and computer guesses, and wins/losses/ties.
    //   userChoiceText.textContent = "You chose: " + userGuess;
    //   computerChoiceText.textContent = "The computer chose: " + computerGuess;
    //   winsText.textContent = "wins: " + wins;
    //   lossesText.textContent = "losses: " + losses;
    //   tiesText.textContent = "ties: " + ties;
}