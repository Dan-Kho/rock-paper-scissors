// script.js

function getComputerChoice () {
    let rand = Math.floor(Math.random() * 3);
    let choice = (rand == 0) ? "rock" : (rand == 1) ? "paper" : "scissors";
    return choice;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return console.log(`You Tied! You both selected ${computerSelection[0].toUpperCase()}${computerSelection.slice(1)}.`);
    }

    return console.log("Try Again.");;
}

let playerSelection = "PaPer";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));