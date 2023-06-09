const hero = {
    elementId: "hero",
    name: "Gandalf",
    avatar: "gandalf.webp",
    health: 60,
    diceRoll: [3,1,4],
    diceCount: 3
}

const monster = {
    elementId: "monster",
    name: "Balrog",
    avatar: "balrog.webP",
    health: 10,
    diceRoll: [2],
    diceCount: 1
}

function renderCharacter(data) {
    const {elementId, name, avatar, health, diceRoll, diceCount } = data;
let diceHTML = ' '

for (let i=0;i<diceCount;i++){
    diceHTML +=  `<div class="dice">${diceRoll[i]}</div>`
}


    document.getElementById(elementId).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                ${diceHTML}
            </div>
        </div>`
}

// CHALLENGE
// Update this for loop so it uses a value from the
// new diceRoll array to render out the dice so the
// wizard's dice have values of 3, 1 and 4, and the
// orc's single dice has a value of 2.


renderCharacter(hero);
renderCharacter(monster);