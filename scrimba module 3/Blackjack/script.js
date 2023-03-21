let firstCard = 2
let secondCard = 9
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = " "

//Getting Elements
let messageToPlayer = document.querySelector('#messageToPlayer')
let sumToPlayer = document.querySelector('#sumEl')
let cardsToPlayer = document.querySelector('#cardsEl')

function startGame(){
    renderGame()
}

function renderGame(){
    if (sum <= 20){message = "Want to Draw Again? 🃏"}
    else if (sum === 21){message = "Bingo! 🎉"
        hasBlackjack = true}
    else {message = "Bust Loser 😭"
        isAlive = false }
        messageToPlayer.innerHTML = message
        sumToPlayer.innerHTML = sum
        cardsToPlayer.innerHTML = cards[0] + (" ") + cards[1]
}

function newCard(){
    let thirdCard = 5
    sum += thirdCard
    cards.push(thirdCard)
    console.log(cards)
    renderGame()
}

//console.logs
console.log(cards)
console.log(sum)
console.log(hasBlackjack)
console.log(isAlive)
console.log(messageToPlayer.innerHTML)


//Practice

for (let count = 1; count < 15; count += -2){
    console.log(count)
}