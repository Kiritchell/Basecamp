let firstCard = 2
let secondCard = 9
let thirdCard = 5
let cards = [firstCard, secondCard, thirdCard]
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
    message = "Dealing New Card"
    thirdCard = 5
    sum += thirdCard
    renderGame()
}

//console.logs
console.log(cards)
console.log(sum)
console.log(hasBlackjack)
console.log(isAlive)
console.log(messageToPlayer.innerHTML)




let mySkills = ["bowstaff hunting", "nunchuck skills", "drawing"]

console.log(mySkills[1])