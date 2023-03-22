
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = " "

//Getting Elements
let messageToPlayer = document.querySelector('#messageToPlayer')
let sumToPlayer = document.querySelector('#sumEl')
let cardsToPlayer = document.getElementById('cardsEl')

function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsToPlayer.textContent = "Cards: "
    for (let i=0; i<cards.length; i++){
        cardsToPlayer.textContent += cards[i] + " "
    }
    sumToPlayer.innerHTML = sum

    if (sum <= 20){message = "Want to Draw Again? 🃏"}
    else if (sum === 21){message = "BlackJack! 🎉"
        hasBlackjack = true}
    else {message = "Bust Loser 😭"
        isAlive = false}
        messageToPlayer.innerHTML = message
}



function newCard(){
    if (isAlive && hasBlackjack ===false){
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