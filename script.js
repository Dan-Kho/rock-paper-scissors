// script.js

function getComputerChoice () {
    let rand = Math.floor(Math.random() * 3);
    let choice = (rand == 0) ? "rock" : (rand == 1) ? "paper" : "scissors";
    return choice;
}

function playRound (playerSelection, computerSelection) {
    let playerSelection = playerSelection.toLowerCase();

    return playerSelection;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));