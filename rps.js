function getComputerChoice() {
    choice = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * 3);
    return choice[i];
}

let score = document.querySelector("#score");

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return score.innerHTML = "Draw!";
    }
    if (((humanChoice === "rock") && (computerChoice ==="scissors")) ||
        ((humanChoice === "paper") && (computerChoice === "rock")) ||
        ((humanChoice === "scissors") && (computerChoice === "paper"))) {
            humanScore++;
            return score.innerHTML = "You Win!";
        }
    if (((humanChoice === "paper") && (computerChoice ==="scissors")) ||
        ((humanChoice === "scissors") && (computerChoice === "rock")) ||
        ((humanChoice === "rock") && (computerChoice === "paper"))) {
            computerScore++;
            return score.innerHTML = "You Lose!";
        }
}

let humanScore = 0;
let computerScore = 0;
let results = document.querySelector("#results");

function playGame(humanChoice) {
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    results.innerHTML = `Score: ${humanScore} - ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            return results.innerHTML = `You Win! ${humanScore} - ${computerScore}`;
        }
        if (humanScore < computerScore) {
            return results.innerHTML = `You Lose! ${humanScore} - ${computerScore}`
        } 
        if (humanScore === computerScore) {
            return results.innerHTML = `Draw! ${humanScore} - ${computerScore}`
        }      
    }
}

let buttons = document.querySelector("#buttons");
buttons.addEventListener('click', (Event) => {
    let target = Event.target;

    switch(target.id) {
        case "rock":
            playGame("rock");
            break;
        case "paper":
            playGame("paper");
            break;
        case "scissors":
            playGame("scissors");
            break;
    }
});
