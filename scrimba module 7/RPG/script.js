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
    const { elementId, name, avatar, health, diceRoll, diceCount } = data;
    const diceHtml = diceRoll.map(function(num){
        return `<div class="dice">${num}</div>`
    })

    document.getElementById(elementId).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                ${diceHtml.join('')}
            </div>
        </div>`
}

renderCharacter(hero);
renderCharacter(monster);