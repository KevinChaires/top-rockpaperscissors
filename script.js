function getComputerChoice(){
    let rand = Math.floor(Math.random() *  (3) + 1);
    let choice;
    if(rand === 1){
        choice = 'rock';
    }
    else if(rand === 2){
        choice = 'paper';
    }
    else{
        choice = 'scissors';
    }
    return choice;
}


function playRound(playerSelection, computerSelection){
    let result;
    if (playerSelection === computerSelection){
        result = `A tie! Both you and the computer chose ${playerSelection}!`;
    }
    //Player chose Rock
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        result = 'You lose. Paper beats Rock.';
        computerCount = computerCount + 1;
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        result = 'You win! Rock beats Scissors.'
        playerCount = playerCount + 1;
    }
    //Player chose Paper
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        result = 'You win! Paper beats Rock.';
        playerCount = playerCount + 1;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        result = 'You lose. Scissors beat Paper.';
        computerCount = computerCount + 1;
    }
    //Player chose Scissors
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        result = 'You lose. Rock beats Scissors.';
        computerCount = computerCount + 1;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        result = 'You win! Scissors beat Paper.'
        playerCount = playerCount + 1;
    }
    else{
       result = 'Error. Either you chose an invalid choice, or I made a mistake!';
    }
    return(result);
}

function gameWinner(){
    let result;
    let playerNumber = parseInt(playerCount);
    let computerNumber = parseInt(computerCount);
    if(playerNumber === computerNumber){
        result = `A tie! ${playerNumber} vs ${computerNumber}`
    }
    else if(playerNumber > computerCount){
        result = `You won! ${playerNumber} vs ${computerNumber}`
    }
    else if(playerNumber < computerCount){
        result = `You lost! ${playerNumber} vs ${computerNumber}`
    }
    return result;
}

let playerCount = 0;
let computerCount = 0;  

function game(){
    console.log('This is a game of Rock, Papers, Scissors against the computer');
  
    for (let i = 0; i < 5; i++){
        var round = i+1;
        console.log('Round ' + round);
        var playerSelection = prompt('Choose Rock, Paper or Scissors').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection, playerCount, computerCount));
    }
    console.log(gameWinner());
}

game();