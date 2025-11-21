//  Create a Rock, Paper, Scissors game, conditions should be a win based on the user or cpu reaching 2/3 wins. Upon end list how many wins ties losses.
const prompt = require("prompt-sync")();
let playerWins = 0;
let cpuWins = 0;
let tie = 0;
let arrChoice = ["rock", "paper", "scissors"];

while (true) {
  let playerChoice = prompt(
    `Enter an input between "rock", "paper" or "scissors". Enter "end" to stop the game. `
  ).toLowerCase();
  let randomIndex = Math.floor(Math.round(Math.random() * 2));
  let cpuChoice = arrChoice[randomIndex];

  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors" ||
    playerChoice === "end"
  ) {
    if (playerChoice === cpuChoice) {
      console.log(`You: ${playerChoice} CPU: ${cpuChoice}. Tie.`);
      console.log(`Score: Player: ${playerWins} CPU: ${cpuWins}.`);
      tie++;
    } else if (playerChoice === "end") {
      break;
    } else if (
      (playerChoice === "rock" && cpuChoice === "scissors") ||
      (playerChoice === "paper" && cpuChoice === "rock") ||
      (playerChoice === "scissors" && cpuChoice === "paper")
    ) {
      console.log(`Player: ${playerChoice} CPU: ${cpuChoice}. Player wins.`);
      playerWins++;
      console.log(
        `Score: Player: ${playerWins} CPU: ${cpuWins}. Best 3/5 wins.`
      );
    } else {
      console.log(`Player: ${playerChoice} CPU: ${cpuChoice}. CPU wins.`);
      cpuWins++;
      console.log(
        `Score: Player: ${playerWins} CPU: ${cpuWins}. Best 3/5 wins.`
      );
    }

    if (playerWins === 3) {
      console.log(
        `Player wins the game. Wins: ${playerWins}, Losses: ${cpuWins}, Ties: ${tie}`
      );
      break;
    }

    if (cpuWins === 3) {
      console.log(
        `CPU wins the game. Wins: ${playerWins}, Losses: ${cpuWins}, Ties: ${tie}`
      );
      break;
    }
  } else {
    console.log("You've entered an invalid input.");
  }
}
