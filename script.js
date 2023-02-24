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
        userColor(5);
        PCColor(5);
    }
    //Player chose Rock
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        result = 'You lose. Paper beats Rock.';
        computerCount = computerCount + 1;
        userChoice.textContent = '🪨';
        PCChoice.textContent = "📃";
        userColor(3);
        PCColor(1);
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        result = 'You win! Rock beats Scissors.'
        playerCount = playerCount + 1;
        userColor(1);
        PCColor(3);
        userChoice.textContent = '🪨';
        PCChoice.textContent = '✂️';
    }
    //Player chose Paper
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        result = 'You win! Paper beats Rock.';
        playerCount = playerCount + 1;
        userChoice.textContent = "📃";
        PCChoice.textContent = '🪨';
        userColor(1);
        PCColor(3);
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        result = 'You lose. Scissors beat Paper.';
        computerCount = computerCount + 1;
        userChoice.textContent = "📃";
        PCChoice.textContent = '✂️';
        userColor(3);
        PCColor(1);
    }
    //Player chose Scissors
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        result = 'You lose. Rock beats Scissors.';
        computerCount = computerCount + 1;
        userColor(3);
        PCColor(1);
        userChoice.textContent = '✂️';
        PCChoice.textContent = '🪨';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        result = 'You win! Scissors beat Paper.'
        playerCount = playerCount + 1;
        userChoice.textContent = '✂️';
        PCChoice.textContent = "📃";
        userColor(1);
        PCColor(3);
    }
    else{
       result = 'Error. Either you chose an invalid choice, or I made a mistake!';
       //userColor(5);
       //PCColor(5);
    }
    return(result);
}

function gameWinner(){
    let result;
    let playerNumber = parseInt(playerCount);
    let computerNumber = parseInt(computerCount);
    let ender = 0;
    if(playerNumber === computerNumber){
        ender = userColor(1);
        ender = PCColor(1);
        result = `A tie! ${playerNumber} vs ${computerNumber}`
    }
    else if(playerNumber > computerCount){
        ender = userColor(2);
        ender = PCColor(4);
        result = `You won! ${playerNumber} vs ${computerNumber}`
    }
    else if(playerNumber < computerCount){
        ender = userColor(4);
        ender = PCColor(2);
        result = `You lost! ${playerNumber} vs ${computerNumber}`
    }
    
        return result;
}


let playerCount = 0;
let computerCount = 0;  
let round = 0;

function game(playerSelected){


    //INICIALIZACION
    currentRound.textContent = 'Round ' + (round+1);


    //SELECCION USUARIO
    let playerSelection = playerSelected;

    //SELECCION PC
    const computerSelection = getComputerChoice();

    //EJECUCION RONDA
    notifier.textContent = playRound(playerSelection, computerSelection, playerCount, computerCount);

    //MODIFICACION ELEMENTOS
    userScore.textContent = `USER: ${playerCount}`;
    PCScore.textContent = `PC: ${computerCount}`;
    round++;

    //ENDGAME
    if(playerCount === 5 || computerCount === 5 ){
        notifier.textContent = gameWinner();
        playerRock.disabled = true;
        playerPaper.disabled = true;
        playerScissors.disabled = true;
        return;
    }

}


//Interactive Buttons

let playerSelected = '';

const playerRock = document.querySelector('#rock');
playerRock.addEventListener("click", () =>{
    let playerSelected = playerRock.id;
    game(playerSelected);
});

const playerPaper = document.querySelector('#paper');
playerPaper.addEventListener("click", () =>{
    let playerSelected = playerPaper.id;
    game(playerSelected);
});

const playerScissors = document.querySelector('#scissors');
playerScissors.addEventListener("click", () =>{
    let playerSelected = playerScissors.id;
    game(playerSelected);
});




//Notifications System
const notifications = document.querySelector('.notifications')

//Round Number
let currentRound = document.createElement('p');
currentRound.textContent= "";
notifications.appendChild(currentRound);

//Notifier
const notifier = document.querySelector('#notifier');

//USER AND PC SCORE
let userScore = document.querySelector('#userScore');
userScore.textContent = 'USER: 0';

let PCScore = document.querySelector('#PCScore');
PCScore.textContent = 'PC: 0';

//USER AND PC CHOICE
let userChoice = document.querySelector("#userChoice");
userChoice.textContent = '___';
let PCChoice = document.querySelector("#PCChoice");
PCChoice.textContent = '___';

//IMAGEN USUARIO
let userPic = document.querySelector(".user");
let userImg = document.querySelector(".userIMG")

function userColor (number){
    switch(number){
        case 1: //ROUND WON - LIGHT GREEN
            userPic.style.backgroundColor = "#7CFA7F";
            userImg.src = "./media/user0.png";
            break;
        case 2: //GAME WON - STRONG GREEN
            userPic.style.backgroundColor = "#54BD37";
            userImg.src = "./media/user2.png";
            break;
        case 3: //LOST ROUND - LIGHT RED
            userPic.style.backgroundColor = "#F5625D";
            userImg.src = "./media/user3.png";
            break;
        case 4: //LOST GAME - STRONG RED
            userPic.style.backgroundColor = "#F5160F";
            userImg.src = "./media/user4.png";
            break;
        default:
            userPic.style.backgroundColor = "#7CFA7F";
            userPic.style.backgroundColor = "#00C8FA";
            break;
    }
    return number;
}

//IMAGEN PC
let PCPic = document.querySelector('.PC');
let PCImg = document.querySelector('.PCIMG');
function PCColor (number){
    switch(number){
        case 1: //ROUND WON - LIGHT GREEN
            PCPic.style.backgroundColor = "#7CFA7F";
            PCImg.src = "./media/PC1.png";
            break;
        case 2: //GAME WON - STRONG GREEN
            PCPic.style.backgroundColor = "#54BD37";
            PCImg.src = "./media/PC2.png";
            break;
        case 3: //LOST ROUND - LIGHT RED
            PCPic.style.backgroundColor = "#F5625D";
            PCImg.src = "./media/PC3.png";
            break;
        case 4: //LOST GAME - STRONG RED
            PCPic.style.backgroundColor = "#F5160F";
            PCImg.src = "./media/PC4.png";
            break;
        default:
            PCImg.src = "./media/PC1.png";
            PCPic.style.backgroundColor = "#00C8FA";
            break;
    }
    return number;
}