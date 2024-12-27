const buttons = document.querySelectorAll("button");
const displayScore = document.querySelectorAll("#score > p");
const winnerDisplay = document.querySelector("#winner");
let humanScore = 0;
let computerScore = 0;

viewScores();

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent);
  });
});

function viewScores(){
    displayScore[0].textContent = "Your score: " + humanScore;
    displayScore[1].textContent = "The computer score: " + computerScore;
    showWinner();
    
}

function restartScores(){
    humanScore = 0;
    computerScore = 0;
    displayScore[0].textContent = "Your score: " + humanScore;
    displayScore[1].textContent = "The computer score: " + computerScore;
    winnerDisplay.textContent = "";
};

function showWinner(){
    if (humanScore == 5 ){
        winnerDisplay.textContent = "You win!";
    } else if (computerScore == 5){
        winnerDisplay.textContent = "You lose!";
    }
};

function getComputerChoise(){
    let choise;
    let intValue = getRandomInt(3);
    switch(intValue){
        case 0:
            choise = "rock";
            break;
        case 1:
            choise = "paper";
            break;
        case 2:
            choise = "scissors";
    }
    return choise;
}

function playRound (e){
    let humanChoise = e.toLowerCase();
    let computerChoise = getComputerChoise();

    if (humanScore >= 5 ){
        restartScores();
    } else if (computerScore >= 5){
        restartScores();
    }

    if(humanChoise === computerChoise){
        winnerDisplay.textContent = "Draw!";
    }else if(humanChoise === "rock" && computerChoise === "paper"){
        winnerDisplay.textContent = "You lose! paper beats rock";
        computerScore = computerScore + 1;
    } else if(humanChoise === "paper" && computerChoise === "scissors"){
        winnerDisplay.textContent = "You lose! scissors beats paper";
        computerScore = computerScore + 1;
    } else if(humanChoise === "scissors" && computerChoise === "rock"){
        winnerDisplay.textContent = "You lose! rock beats scissors";
        computerScore = computerScore + 1;
    }else{
        winnerDisplay.textContent = "You win! " + humanChoise + " beats " + computerChoise;
        humanScore = humanScore + 1;
    }
    viewScores();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}