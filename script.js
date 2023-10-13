// script.js

function getComputerChoice () {
    let rand = Math.floor(Math.random() * 3);
    let choice = (rand == 0) ? "Rock" : (rand == 1) ? "Paper" : "Scissors";
    return choice;
}