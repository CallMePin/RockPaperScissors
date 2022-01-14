
function computerPlay() {
    var answer = ["Rock", "Paper", "Scissors"];
    return randomAnswer = answer[Math.floor(Math.random() * answer.length)];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        return "You lose! Paper beats Rock";
    } else {
        return "You win! Rock beats Scissors";
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log("You've chosen " + playerSelection);
console.log("The computer has chosen " + computerSelection);
console.log(playRound(playerSelection, computerSelection));