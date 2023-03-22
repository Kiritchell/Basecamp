let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = " "

//Getting Elements
let messageToPlayer = document.querySelector('#messageToPlayer')
let sumToPlayer = document.querySelector('#sumEl')
let cardsToPlayer = document.getElementById('cardsEl')

function startGame(){
    renderGame()
}

function renderGame(){
    cardsToPlayer.textContent = "Cards: "
    for (let i=0; i<cards.length; i++){
        cardsToPlayer.textContent += cards[i] + " "
    }
    sumToPlayer.innerHTML = sum

    if (sum <= 20){message = "Want to Draw Again? 🃏"}
    else if (sum === 21){message = "Bingo! 🎉"
        hasBlackjack = true}
    else {message = "Bust Loser 😭"
        isAlive = false
        newButton.innerHTML = "Start over?"}
        messageToPlayer.innerHTML = message
}

function newCard(){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
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
//console.logs
console.log(cards)
console.log(sum)
console.log(hasBlackjack)
console.log(isAlive)


//Practice

