function getComputerChoice() {
    choice = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * 3);
    return choice[i];
}

function getHumanChoice() {
    choice = prompt("Choose what to play:");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    hchoice = humanChoice.toLowerCase();
    if (hchoice === computerChoice) {
        return console.log("Draw!");
    }
    if (((hchoice === "rock") && (computerChoice ==="scissors")) ||
        ((hchoice === "paper") && (computerChoice === "rock")) ||
        ((hchoice === "scissors") && (computerChoice === "paper"))) {
            humanScore++;
            return console.log("You Win!");
        }
    if (((hchoice === "paper") && (computerChoice ==="scissors")) ||
        ((hchoice === "scissors") && (computerChoice === "rock")) ||
        ((hchoice === "rock") && (computerChoice === "paper"))) {
            computerScore++;
            return console.log("You Lose!");
        }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        return console.log(`You Win! ${humanScore} - ${computerScore}`)
    }
    if (humanScore < computerScore) {
        return console.log(`You Lose! ${humanScore} - ${computerScore}`)
    } 
    if (humanScore === computerScore) {
        return console.log(`Draw! ${humanScore} - ${computerScore}`)
    } 
}

playGame();