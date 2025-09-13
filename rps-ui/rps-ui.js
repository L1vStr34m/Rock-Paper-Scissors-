/*
**

-Project   : Rock Paper Scissors GUI
-Author    : Suguro 
-Github      | github.com/L1vStr34m

**
*/

const buttons = document.querySelectorAll("#choices button");
const humanScoreSpan = document.getElementById("human-score");
const computerScoreSpan = document.getElementById("computer-score");
const roundResult = document.getElementById("round-result");
const computerMoveP = document.getElementById("computer-move");
const finalResultDiv = document.getElementById("final-result");
const restartBtn = document.getElementById("restart-btn");

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randIndex = Math.floor(Math.random() * 3);
  return choices[randIndex];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    roundResult.textContent = `It's a tie! You both chose ${humanChoice}.`;
    return "tie";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    return "human";
  } else {
    roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    return "computer";
  }
}

function updateScores(winner) {
  if (winner === "human") {
    humanScore++;
    humanScoreSpan.textContent = humanScore;
  } else if (winner === "computer") {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
  }
}

function checkGameOver() {
  if (roundsPlayed >= 5) {
    buttons.forEach((btn) => (btn.disabled = true));

    if (humanScore > computerScore) {
      finalResultDiv.textContent = `You won the game! Final Score: You ${humanScore} - Computer ${computerScore}`;
    } else if (computerScore > humanScore) {
      finalResultDiv.textContent = `You lost the game! Final Score: You ${humanScore} - Computer ${computerScore}`;
    } else {
      finalResultDiv.textContent = `The game is a tie! Final Score: You ${humanScore} - Computer ${computerScore}`;
    }

    finalResultDiv.classList.remove("hidden");
    restartBtn.classList.remove("hidden");
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  humanScoreSpan.textContent = 0;
  computerScoreSpan.textContent = 0;
  roundResult.textContent = "Make your move!";
  computerMoveP.textContent = "";
  finalResultDiv.textContent = "";
  finalResultDiv.classList.add("hidden");
  restartBtn.classList.add("hidden");
  buttons.forEach((btn) => (btn.disabled = false));
}

// Event listeners for buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    roundsPlayed++;

    computerMoveP.textContent = `Computer chose: ${computerChoice}`;
    const winner = playRound(humanChoice, computerChoice);
    updateScores(winner);
    checkGameOver();
  });
});

restartBtn.addEventListener("click", resetGame);
