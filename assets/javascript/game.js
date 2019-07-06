// VARIABLES
// ==========================================================================

var carMakeandModel = ["Ford F150","Toyota Rav4","Chevrolet Silverado","Nissan Rogue","Honda CRV","Toyota Camry","Honda Civic","Chevrolet Equinox","Toyota Corolla","Ford Escape","Honda Accord","Ford Explorer","Nissan Altima","Toyota Tacoma", "Nissan Sentra", "GMC Sierra", "Jeep Grand Cherokee", "Jeep Cherokee", "Jeep Wrangler", "Toyota Highlander"];

var directionsText1 = document.getElementById("directions-text1");
var computerChoiceText = document.getElementById("computerchoice-text");
var incorrectKeysText = document.getElementById("incorrect-keys");
var userWinsText = document.getElementById("user-wins-text");

// Set the first iteration boolean to true;
var firstIteration = true;
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
    userWinsText.textContent = "";
    
    // Determines which key was pressed.
    userGuess = event.key;
    userGuess = String(userGuess);
    userGuess.toLocaleLowerCase();

    if (firstIteration == true) {
        randomNUmber = Math.floor(Math.random() * carMakeandModel.length);
        computerGuess = carMakeandModel[randomNUmber];
        
        // Create a String array and push each character into an array.
        computerGuessArray = [];
        userGuessArray = [];
        for (i = 0; i < computerGuess.length; i++){
            computerGuessArray.push(computerGuess.slice(i, i+1))
        }
        
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
        computerChoiceText.textContent = "Here's the word(Note: hyphens(-) represent spaces):    " + computerGuessArray.join(" ");
        
        // Rebuild the computer guessed array.
        computerGuessArray = [];
        for (i = 0; i < computerGuess.length; i++){
            computerGuessArray.push(computerGuess.slice(i, i+1))
        }
        
    }
    if (firstIteration == false){
        if (userGuess != " "){
            for (i = 0; i < computerGuessArray.length; i++){
                if (computerGuessArray[i].toLocaleLowerCase() == userGuess) {
                    userGuessArray[i] = computerGuessArray[i];
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
                computerChoiceText.textContent = "Here's the word(Note: hyphens(-) represent spaces):    " + userGuessArray.join(" ");
                computerChoiceText.style.color = "green";
                userWinsText.textContent = "You Win! Good job!.Press any key to restart the game";
                userWinsText.style.color = "blue";
                firstIteration = true;
            }
            else {
                computerChoiceText.textContent = "Here's the word(Note: hyphens(-) represent spaces):    " + userGuessArray.join(" ");
                directionsText1.textContent = " ";
            }
            remainingCounter = 0;
        }
    }
    else{
        firstIteration = false;
    }
}