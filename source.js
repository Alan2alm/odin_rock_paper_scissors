let humanScore = 0;
let computerScore = 0;

console.log("hello, world!");
console.log(getComputerChoise());
playRound();

function viewScores(){
    console.log("Your score: " + humanScore);
    console.log("The computer score: " + computerScore);
}

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

function getHumanChoise(){
    let choise = String(prompt("what will you play? rock/paper/scissors?")).toLowerCase();
    switch(choise){
        case "rock":
            console.log(choise);
            return choise;
            break;
        case "paper":
            console.log(choise);
            return choise;
            break;
        case "scissors":
            console.log(choise);
            return choise;
            break;
        default:
            getHumanChoise();
    }
}

function playRound (){
    let humanChoise = getHumanChoise();
    let computerChoise = getComputerChoise();
    if(humanChoise === computerChoise){
        console.log("Draw!");
    }else if(humanChoise === "rock" && computerChoise === "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore = computerScore + 1;
    } else if(humanChoise === "paper" && computerChoise === "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore = computerScore + 1;
    } else if(humanChoise === "scissors" && computerChoise === "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore = computerScore + 1;
    }else{
        console.log("You win! " + humanChoise.tou + " beats " + computerChoise);
        humanScore = humanScore + 1;
    };
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}