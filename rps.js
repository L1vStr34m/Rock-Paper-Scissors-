/* 
** Rock Paper Scissors game
*  This game will be played entirely in the console.

** TIPS : You can start the game in the console with:
*  How to start the GAME : 
*  playGame();


** Author  : Suguro 
** Github  | github.com/L1vStr34m

**
*/

// Get the computer choice
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 1 / 3) {
        return "rock";
    } else if (rand < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Get the human choice
function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:");
    if (!choice) {
        alert("Invalid input. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
    return choice.toLowerCase();
}

// Play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
        return "tie";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return "human";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return "computer";
    }
}

// Play the entire game (5 rounds)
function playGame() {
    console.clear();
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${i}:`);
        const winner = playRound(humanChoice, computerChoice);

        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }

        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}\n`);
    }

    if (humanScore > computerScore) {
        console.log(`You won the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the game! Final score: You ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final score: You ${humanScore} - Computer ${computerScore}`);
    }
}
