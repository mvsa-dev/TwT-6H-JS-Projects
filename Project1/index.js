const prompt = require("prompt-sync")();
const questions = 3;
let correctAnswers = 0;

const answer1 = prompt(
  "What are the three most important components of a PC build? "
);
const correctAnswer1 = "cpu, gpu, ram";

if (answer1.toLowerCase() === correctAnswer1) {
  console.log("You are correct.");
  correctAnswers++;
} else {
  console.log("Incorrect. Try again!");
}

const answer2 = prompt(
  "Of these parts, which one should make up most of the budget? "
);

const correctAnswer2 = "gpu";

if (answer2.toLowerCase() === correctAnswer2) {
  console.log("You are correct.");
  correctAnswers++;
} else {
  console.log("Incorrect. Try again!");
}

const answer3 = prompt(
  "What three components require a strict compatibility match to work? "
);

const correctAnswer3 = "cpu, mobo, ram";

if (answer3.toLowerCase() === correctAnswer3) {
  console.log("You are correct.");
  correctAnswers++;
} else {
  console.log("Incorrect. Try again!");
}

let percentage = Math.round((correctAnswers / questions) * 100);

if (percentage >= 80) {
  console.log(`You have scored ${percentage}% on this test. Congratulations.`);
} else {
  console.log(`You have scored ${percentage}% on this test. Try again.`);
}

// const prompt = require("prompt-sync")();
// const questions = 3;
// let correctCounter = 0;

// const answer1 = prompt("What is your name? ");
// const correctAnswer1 = "Mvsa";
// const answer2 = prompt("What is your mission? ");
// const correctAnswer2 = "Create, Develop, Love";
// const answer3 = prompt("To what end? ");
// const correctAnswer3 = "To serve God, eternally.";

// if (answer1 === correctAnswer1) {
//   console.log("Correct.");
//   correctCounter++;
// } else {
//   console.log("Incorrect.");
// }

// if (answer2 === correctAnswer2) {
//   console.log("Correct.");
//   correctCounter++;
// } else {
//   console.log("Incorrect.");
// }

// if (answer3 === correctAnswer3) {
//   console.log("Correct.");
//   correctCounter++;
// } else {
//   console.log("Incorrect.");
// }

// const result = Math.round((correctCounter / questions) * 100);

// console.log(`You are ${result}% on the way.`);
