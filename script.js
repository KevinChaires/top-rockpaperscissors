function getComputerChoice(){
    let rand = Math.floor(Math.random() *  (3) + 1);
    let choice;
    if(rand === 1){
        choice = 'Rock';
    }
    else if(rand === 2){
        choice = 'Paper';
    }
    else{
        choice = 'Scissors';
    }
    return choice;
}

getComputerChoice();