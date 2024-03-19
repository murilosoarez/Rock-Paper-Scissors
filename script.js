
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function restartPage(dialogOpen, dialog, main) {

    if ((dialogOpen)) {
        dialog.style.opacity = '1'
        main.style.filter = 'blur(5px)'
    }
    
}

document.addEventListener('DOMContentLoaded',() => {
    
    let dialogOpen = true
    
    let main = document.getElementById('main')
    let dialog = document.querySelector('dialog')
    let buttons = document.querySelectorAll('button')
    let result = document.getElementById('result')
    
    let plays = ['rock', 'paper', 'scissors']
    let Score = document.getElementsByClassName('Score')
    
    let playerContainer = document.getElementById('player')

    let playerScore = 0
    let opponentScore = 0
    
    restartPage(dialogOpen, dialog, main)
    
    let opponentContainer = document.getElementById('opponent')


    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            startGame(event)
        })
    }) 

    function startGame(event) {

        if (dialogOpen) {
            dialogOpen = false;
            dialog.style.opacity = '0'
            main.style.filter = 'blur(0px)'
        }
        
        playerResult = event.target.id 
        opponentResult = sortOpponent(plays)

        playerContainer.innerHTML = event.target.innerHTML
        opponentContainer.innerHTML = document.getElementById(opponentResult).innerHTML
        
        getResult(playerResult, opponentResult)

        dialogOpen = true

        if (playerScore == 5 || opponentScore == 5) {
            result.style.color = 'red'
            if (playerScore == 5) {result.innerHTML = "<h1> Player wins! </h1>"}
            if (opponentScore == 5) {opponentScore.innerHTML = "<h1> Player wins! </h1>"}
        } 
        else {
            setTimeout(restartPage, 2000, dialogOpen, dialog, main)
        }

    }

    function sortOpponent(op) {
        return op[getRandomInt(3)]
    }

    function getResult(player, op) {

        if (result.hasChildNodes()) {
            result.removeChild(result.firstChild)
        }

        if (player == op) {
            result.innerHTML = "<h1> It's a tie! </h1>"
        }

        else if (player == 'paper' && op == 'scissor' || player == 'rock' && op == 'scissor' || player == 'scissor' && op == 'paper' || player == 'paper' && op == 'rock') {
            playerScore += 1
            Score[0].innerHTML = playerScore
            result.innerHTML = "<h1> Player wins this round! </h1>"
        }

        else {
            opponentScore += 1
            Score[1].innerHTML = opponentScore
            result.innerHTML = "<h1> Opponent wins this round! </h1>"
        }

    }


}) 
