
function getComputerChoice() {
    const elements = ["rock", "paper", "scissor"];
    
    const randomElement = Math.floor(Math.random() * elements.length);
    return elements[randomElement];
}

function getHumanChoice() {
    let humanChoice = prompt("Pick an element: ");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;