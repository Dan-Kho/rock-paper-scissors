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
    } else return "Incorrect Input. Try Again!";
}

function roundResults (result, playerScore, computerScore) {
    console.log(result);
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
    return;
}

function game () {
    let playerSelection = "Scissors";
    
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result.search("Tied") === 4) {
            roundResults (result, playerScore, computerScore);
            continue;
        } else if (result.search("Win") === 4) {
            playerScore++;
            roundResults (result, playerScore, computerScore);
        } else if (result.search("Lose") === 4) {
            computerScore++;
            roundResults (result, playerScore, computerScore);
        } else {
            roundResults (result, playerScore, computerScore);
            continue;
        }
    }

    if (playerScore === computerScore) { return "You Tied! Game Over.";}
    else if (playerScore > computerScore) {return "You Win! Game Over.";}
    else {return "You Lose! Game Over.";}
}

console.log(game());