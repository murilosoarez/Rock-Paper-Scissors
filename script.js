
function restartPage(dialogOpen, dialog, main) {

    if ((dialogOpen)) {
        dialog.style.opacity = '1'
        main.style.filter = 'blur(5px)'
    }


    
}

class Player {

    plays = ['rock', 'paper', 'scissor']
    points = 0

    constructor(player) {
        this.player = player 
    }

    incrementPoints() {
        return this.points ++
    }

    randomizePlay(max) {
        return this.plays[Math.floor(Math.random() * max)]
    }

}

document.addEventListener('DOMContentLoaded',() => {
    
    let dialogOpen = true
    
    let main = document.getElementById('main')
    let dialog = document.querySelector('dialog')
    let buttons = document.querySelectorAll('button')
    let result = document.getElementById('result')
    
    let Score = document.getElementsByClassName('Score')
    
    let player = new Player(document.getElementById('player'))
    let opponent = new Player(document.getElementById('opponent'))
    
    let playContainers = document.getElementsByClassName('Play')

    restartPage(dialogOpen, dialog, main)

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

        // Gets the play ID (is it rock, paper or scissors?)
        playerPlay = event.target.id 
        opponentPlay = document.getElementById(opponent.randomizePlay(2))

        playContainers[0].innerHTML = (event.target.innerHTML)
        playContainers[1].innerHTML = (opponentPlay.innerHTML)

        if (player.points === 5 || opponent.points === 5) {
            result.style.color = 'red'
            if (player.points == 5) { result.innerHTML = 'Player 1 won!'}
            if (opponent.points == 5) { result.innerHTML = 'Player 2 won!'}
        }
        else {
            dialogOpen = true
            checkWinner(playerPlay, opponentPlay.id)
            setTimeout(restartPage, 2000, dialogOpen, dialog, main, playContainers)
        }
    }


    function checkWinner(p, op) {

        if (p === op) {
            result.innerHTML = "It's a tie"
        }
        
        else if (p == 'paper' && op == 'rock' || p == 'rock' && op == 'scissor' || p == 'scissors' && op == 'paper') {
            result.innerHTML = 'Player 1 wins!'
            player.incrementPoints()
            Score[0].innerHTML = player.points
        }
        
        else {
            result.innerHTML = 'Player 2 wins!'
            opponent.incrementPoints()
            Score[1].innerHTML = opponent.points
      
        }

    }
})
