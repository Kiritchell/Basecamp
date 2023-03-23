let player = {
    name:"Mysterious Player",
    chips:150,
    isAlive:false,
}

let cards = []
let sum = 0
let hasBlackjack = false
let message = " "

//Getting Elements

let messageToPlayer = document.querySelector('#messageToPlayer')
let sumToPlayer = document.querySelector('#sumEl')
let cardsToPlayer = document.getElementById('cardsEl')
let playerEl = document.querySelector('#playerEl')


function startGame(){

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    player.isAlive=true
    cardsToPlayer.textContent = "Cards: "
    for (let i=0; i<cards.length; i++){
        cardsToPlayer.textContent += cards[i] + " "
    }
    sumToPlayer.innerHTML = sum

    if (sum <= 20){message = "Want to Draw Again? 🃏"}
    else if (sum === 21){message = "BlackJack! 🎉"
        hasBlackjack = true
        player.chips += 50}
    else {message = "Bust Loser 😭"
        player.isAlive = false
        player.chips += -50}
        messageToPlayer.innerHTML = message
        playerEl.innerHTML = player.name + (' has ') + player.chips +  (' Chips ')

}

function hold(){
    if (player.isAlive && sum > 12){
    player.chips += 25
    cards = []
    renderGame()}
}

function newCard(){
    if (player.isAlive && hasBlackjack ===false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()}
}


function getRandomCard() {
    let random = Math.floor( Math.random()*13 ) + 1
    if (random > 10) {
        return 10
    } else if (random === 1) {
        return 11
    } else {
        return random
    }
}

console.log (player.chips +player.isAlive)