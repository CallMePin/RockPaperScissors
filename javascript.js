

function computerPlay() {
    var answer = ["Rock", "Paper", "Scissors"];
    return randomAnswer = answer[Math.floor(Math.random() * answer.length)];
}

console.log(computerPlay());