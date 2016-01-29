var computerBot = Math.floor(Math.random() * 100) + 1;
var userGuess;
var totalGuess = 0;
playerButton.disabled = false;

//input and output fields
var playerInput = document.querySelector("#input");
var output = document.querySelector("#output");


//Main function
function Main() {
  totalGuesses = totalGuesses +=1;
  userGuess = parseInt(input.value);
    if (userGuess > computerBot) {
      output.innerHTML = "Too high. You have made " + totalGuesses + " guesses.";
    } else if (userGuess < computerBot) {
        output.innerHTML = "Too low. You have made " + totalGuesses + " guesses.";
    } else if (userGuess === computerBot) {
      output.innerHTML = "Yes - You Guessed Right!";
    }

// check guesses
if(totalGuesses >= 6) {
  output.innerHTML = "<h3>You have used your 6 guesses<br/>The number is</h3> " + computerBot;
  playerButton.disabled = true;
  }
}