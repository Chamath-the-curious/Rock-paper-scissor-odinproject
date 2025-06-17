
function getComputerChoice() {
    const elements = ["rock", "paper", "scissor"];
    
    const randomElement = Math.floor(Math.random() * elements.length);
    return elements[randomElement];
}

function getHumanChoice() {
    let humanChoice = prompt("Pick an element: ");
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (!typeof(humanChoice) == undefined) {
            humanChoice = humanChoice.toLowerCase();
        }

        if (humanChoice == computerChoice) {
            console.log("Try again!");
        } 

        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock.");
                computerScore += 1;
            } else if (computerChoice == "scissor") {
                console.log("You win! Rock beats scissor.");
                humanScore += 1;
            }
        }

        if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You win! Paper beats Rock.");
                humanScore += 1;
            } else if (computerChoice == "scissor") {
                console.log("You lose! Scissor beats Paper.");
                computerScore += 1;
            }
        }

        if (humanChoice == "scissor") {
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats Scissor.");
                computerScore += 1;
            } else if (computerChoice == "paper") {
                console.log("You win! Scissor beats Paper.");
                humanScore += 1;
            }
        }
    }

    let numberOfRounds = 0;

    while (numberOfRounds < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        numberOfRounds += 1
    }

    return [humanScore, computerScore];
}

function declareWinner(scoreBoard) {
    if (scoreBoard[0] == scoreBoard[1]) {
        console.log("It's a draw!")
    } else if (scoreBoard[0] > scoreBoard[1]) {
        console.log("Congratulations! You win.");
    } else if (scoreBoard[0] < scoreBoard[1]) {
        console.log("You lost!");
    }
}

let scoreBoard = playGame();
declareWinner(scoreBoard);