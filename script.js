
function getComputerChoice() {
    const elements = ["rock", "paper", "scissor"];
    
    const randomElement = Math.floor(Math.random() * elements.length());
    return randomElement;
}

