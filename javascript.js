
function computerPlay() {
    var answer = ["Rock", "Paper", "Scissors"];
    return randomAnswer = answer[Math.floor(Math.random() * answer.length)];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper" || 
                playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors" ||
                playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = window.prompt("Please choose Rock, Paper, or Scissors");
        const computerSelection = computerPlay();
        console.log("Round " + i);
        console.log("You've chosen " + playerSelection);
        console.log("The computer has chosen " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
