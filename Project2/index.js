const prompt = require("prompt-sync")();
// Generates random number between 1 and 100, user guesses number, checks to see if guess is correct/incorrect, checks wether guess is higher or lower than random number, prompts to guess again, records number of guesses upon guess.

// Generate random number logic.
const randomNum = 1 + Math.round(Math.random() * 100);

// Counter logic
// Guesses counter.
let numOfGuess = 0;
function counter() {
  numOfGuess++;
}

// Check logic
function check(guess) {
  if (guess == randomNum) {
    return win(guess);
  } else {
    return lose(guess);
  }
}

// Win logic.
function win(guess) {
  console.log("Correct.");
  console.log(`Number: ${randomNum}`);
  console.log(`Guess: ${guess}`);
  console.log(`Guess Total: ${numOfGuess}`);
}

// Lose logic.
function lose(guess) {
  if (guess > randomNum) {
    console.log("Lower. Try again.");
    console.log(`Guess Total: ${numOfGuess}`);
  } else {
    console.log("Higher. Try again.");
    console.log(`Guess Total: ${numOfGuess}`);
  }
  return guesser();
}

// End game logic
function end() {
  console.log("You have ended the game.");
  return console.log(`Random Number: ${randomNum}`);
}

// Error logic
function inputError() {
  throw new Error("Input Error. Check your input.");
}

// Game Logic
function guesser() {
  counter();
  let guess = prompt("Pick a number between 1-100. ");
  if (!isNaN(guess)) {
    return check(guess);
  } else if (guess === "end") {
    return end();
  } else {
    console.log(typeof guess);
    return inputError();
  }
}

guesser();
