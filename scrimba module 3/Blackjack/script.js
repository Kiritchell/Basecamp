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
        isAlive = false }

        messageToPlayer.innerHTML = message
}

function newCard(){
    let card = 5
    sum += card
    cards.push(card)
    renderGame()
}

//console.logs
console.log(cards)
console.log(sum)
console.log(hasBlackjack)
console.log(isAlive)


//Practice