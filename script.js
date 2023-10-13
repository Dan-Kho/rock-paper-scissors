// script.js

function getComputerChoice () {
    let rand = Math.floor(Math.random() * 3);
    let choice = (rand == 0) ? "rock" : (rand == 1) ? "paper" : "scissors";
    return choice;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return `You Tied! You both selected ${computerSelection[0].toUpperCase()}${computerSelection.slice(1)}.`;
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") return "You Lose! Paper beats Rock.";
        else return "You Win! Rock beats Scissors.";
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") return "You Win! Paper beats Rock.";
        else return "You Lose! Scissors beats Paper.";
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") return "You Lose! Rock beats Scissors.";
        else return "You Win! Scissors beats Paper.";
    } else return "Incorrect Error. Try Again!";
}

let playerSelection = "PaPer";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));