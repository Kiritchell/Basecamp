let wizard = {
    id:'hero',
    name:'Gandalf',
    avatar:'gandalf.webp',
    health:60,
    dice:6,
}

let monster = {
    id:'monster',
    name:'Balrog',
    avatar:'balrog.webp',
    health:10,
    dice:4,
}


let heroCard =`<div id="${wizard.id}">
    <div class="character-card">
          <h4 class="name">${wizard.name}</h4>
          <img class="avatar" src="${wizard.avatar}" />
          <p class="health">health: <b> ${wizard.health} </b></p>
          <div class="dice-container"><div class="dice">${wizard.dice}</div></div>
    </div>
</div>`

let monsterCard =`<div id="${monster.id}">
<div class="character-card">
    <h4 class="name">${monster.name}</h4>
    <img class="avatar" src="${monster.avatar}" />
    <p class="health">health: <b> ${monster.health} </b></p>
    <div class="dice-container"><div class="dice">${monster.dice}</div></div>
</div>
</div>
`


function render(){

    document.getElementById('main-board').innerHTML=heroCard+monsterCard
}
render()