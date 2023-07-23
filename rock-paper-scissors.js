function Game(){
    for(let i = 0; i < 5; i++){ 
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
}

function getComputerChoice(){
    /*generate random integer 0-2*/
    let x = Math.floor(Math.random() * 3);
    if (x == 0){
        return "rock";
    }else if(x == 1){
        return "paper";
    }else{
        return "scissors";
    }
}

function getPlayerChoice(){
    let playerChoice = window.prompt("Choose Rock Paper or Scissors:");
    return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return `Tie, you and the computer both chose ${playerSelection}`;
    }
    else if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return "You lose, paper beats rock.";
        }else{
            return "You win! Rock beats scissors";
        }
    }else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            return "You lost, rock beats scissors."
        }else{
            return "You win! Scissors beats paper."
        }
    }else if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
            return "You lose, scissors beats paper."
        }else{
            return "You win! Paper beats rock."
        }
    }
}