
      
      
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
    button.addEventListener('click', playRound);
  
  function computerPlay() {
    var randomNumber = Math.floor(Math.random()*3) + 1;
    
    if (randomNumber == 1) {
      return 'rock';
    }
    else if (randomNumber == 2) {
      return 'paper';
    }
    else {
      return 'scissors';
    }
  }
  
  
  function playRound(computerSelection, playerSelection) {
    
    var computerSelection = computerPlay();
    var playerSelection = prompt('Rock, Paper or Scissors?');
    
    
    if ((playerSelection.toLowerCase() != 'rock') && (playerSelection.toLowerCase() != 'paper') && (playerSelection.toLowerCase() != 'scissors')){
      alert('You did something wrong');
      return 0;
    }
      
    else if (computerSelection == playerSelection.toLowerCase()) {
      console.log('It\'s a draw!');
      return -1
    }
    else if (computerSelection == 'rock' && playerSelection.toLowerCase() == 'paper') {
       console.log('You Win! Paper beats Rock');
        return ++playerScore
    }
    else if (computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors') {
      console.log('You Lose! Rock beats scissors');
      return ++computerScore
    }
    else if (computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock') {
      console.log('You Lose! Paper beats rock');
      return ++computerScore
    }
     else if (computerSelection == 'paper' && playerSelection.toLowerCase() == 'scissors') {
      console.log('You Win! Scissors beat rock');
      return ++playerScore
     }
     else if (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'rock') {
      console.log('You Win! Rock beats scissors');
      return ++playerScore
     }
      else {
      console.log('You Lose! Scissors beat paper');
      return ++computerScore
     }
    }
    
  
    
    
