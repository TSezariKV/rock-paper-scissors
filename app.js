const choiceButtons = document.querySelectorAll('.btn')
const playerChoiceText = document.querySelector('.playerChoiceText')
const botChoiceText = document.querySelector('.botChoiceText')
const resultsText = document.querySelector('.resultsText')
let playerChoice, botChoice

choiceButtons.forEach(choiceButton => choiceButton.addEventListener('click', function(e){
    playerChoice = e.target.dataset.choice
    botSelection()
    checkWinner()
    playerChoiceText.innerHTML = playerChoice
    botChoiceText.innerHTML = botChoice
    resultsText.innerHTML = checkWinner()
}))

function botSelection(){
    let randomIndex = Math.floor(Math.random() * 3)
    switch(randomIndex){
        case 1:
            botChoice = 'rock'
            break
        case 2:
            botChoice = 'paper'
            break
        case 3:
            botChoice = 'scissors'
    }
}

function checkWinner(){
    if(playerChoice === botChoice){
        return 'Tie'
    }else if(botChoice == 'rock'){
        return (playerChoice == 'paper') ? 'You Won!' : 'Bot Won!'
    }else if(botChoice == 'paper'){
        return (playerChoice == 'scissors')? 'You Won!' : 'Bot Won!'
    }else if(botChoice == 'scissors'){
        return(playerChoice == 'rock') ? 'You Won!' : 'Bot Won!'
    }
}