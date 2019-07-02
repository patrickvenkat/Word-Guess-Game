// VARIABLES
// ==========================================================================

var carMakeandModel = ["Nissan Sentra", "GMC Sierra", "Jeep Grand Cherokee", "Jeep Cherokee", "Jeep Wrangler", "Toyota Highlander"];

var directionsText = document.getElementById("directions-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var userChoiceText = document.getElementById("userchoice-text");
var userWinsText = document.getElementById("user-wins-text");

// ****Processing starts here****

// Randomly chooses a choice from the options array. This is the Computer's guess.

// Set the first iteration boolean to true;
var firstIteration = 1;
// Set the reamining unfilled letters to 0;
var remainingCounter = 0;
// Create a String array and push each character into an array.
var computerGuessArray = [];
// var MOdifiedComputerGuessArray = [];
var userGuessArray = [];
// Declare more variables
var userGuess;
var computerGuess;
var randomNUmber;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    //alert("computers original guess just after entering onkeyup:   " + computerGuess);
    //alert("random number was:" + randomNUmber);
    userWinsText.textContent = "";
    
    // Determines which key was pressed.
    userGuess = event.key;
    userGuess = String(userGuess);
    //alert(userGuess);

if (firstIteration === 1) {
    // alert("start of first iteration");
    randomNUmber = Math.floor(Math.random() * carMakeandModel.length);
    computerGuess = carMakeandModel[randomNUmber];
    
    // Create a String array and push each character into an array.
    computerGuessArray = [];
    // var MOdifiedComputerGuessArray = [];
    userGuessArray = [];
    for (i = 0; i < computerGuess.length; i++){
        computerGuessArray.push(computerGuess.slice(i, i+1))
    }
    //alert("ComputerGuessArray" + computerGuessArray);
    
    // Replace the characters of the string with _
    for (i = 0; i < computerGuessArray.length; i++){
        if (computerGuessArray[i] == " ")  {
            computerGuessArray[i] = " - ";
        }
        else {
            computerGuessArray[i] = " _ ";
        }
    }
    
    // Convert the array back to string.
    // MOdifiedComputerGuess = computerGuessArray.join(" ");
    computerChoiceText.textContent = "Here's the word(Hyphens(-) are actually spaces in the word):    " + computerGuessArray.join(" ");
    
    computerGuessArray = [];
    for (i = 0; i < computerGuess.length; i++){
        computerGuessArray.push(computerGuess.slice(i, i+1))
    }
    //alert("end of first iteration")
    //alert("computers original guess1:   " + computerGuess);
    //alert("end of first iteration")
}
    // Rebuild the array since it was modified to have only '_'.
    // computerGuessArray = [];
    // for (i = 0; i < computerGuess.length; i++){
    //     computerGuessArray.push(computerGuess.slice(i, i+1))
    // }

    //alert("computers original guess1:   " + computerGuess);

    // If user entered letter is there in the word the perform the following
    //alert("computers original guess before entering if loop:   " + computerGuess);
    if (firstIteration != 1){

        firstIteration = 0;
        // if (LetterPositionInWord >= 0) {
      //  alert("computers original guess2:   " + computerGuess);
      //  alert("Remind me of the user guess:  " + userGuess);
            
        for (i = 0; i < computerGuessArray.length; i++){
            if (computerGuessArray[i] == userGuess) {
                userGuessArray[i] = userGuess;
        //    alert("Inside If" + userGuessArray[i]);
            }
            else if( computerGuessArray[i] == userGuessArray[i]){
                userGuessArray[i] = computerGuessArray[i];
            }
            else if (computerGuessArray[i] == " ")  {
                userGuessArray[i] = " - ";
            }
            else {
                userGuessArray[i] = " _ ";
                remainingCounter++;
            }
        }

        if (remainingCounter === 0){
            computerChoiceText.textContent = "Here's the word(Hyphens(-) are spaces in the word:    " + userGuessArray.join(" ");
            userWinsText.textContent = "You Win! Good job!. Press any key to restart the game";
            firstIteration = 1;
        }
        else {
            computerChoiceText.textContent = "Here's the word(Hyphens(-) are spaces in the word:    " + userGuessArray.join(" ");
        }
        remainingCounter = 0;
    }
    else{
        firstIteration = 0;
        // alert("Fisrt Iteration: " + firstIteration);
        // alert("computers original guess - First Iteration reset:   " + computerGuess);
    }
    return false;
}