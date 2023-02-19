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
    console.log(choice);
    return choice;
}

function playRound(playerSelection, computerSelection){
    let result;
    if (playerSelection === computerSelection){
        result = `A tie! Both you and the computer chose ${playerSelection}!`;
    }
    else if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            result = 'You lose. Paper beats Rock.';
        }
        else if(computerSelection === 'scissors'){
            result = 'You win! Rock beats Scissors.'
        }
    }
    else if (playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            result = 'You win! Paper beats Rock.';
        }
        else if (computerSelection === 'scissors'){
            result = 'You lose. Scissors beat Paper.';
        }
    }
    else if (playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            result = 'You lose. Rock beats Scissors.';
        }
        else if(computerSelection === 'paper'){
            result = 'You win! Scissors beat Paper.'
        }
    }
    else{
       result = 'Error.';
    }
    return(result);
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));