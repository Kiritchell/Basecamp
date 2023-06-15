function getDiceRollArray(diceCount) {
    let newDiceRolls = [];
    for (let i = 0; i < diceCount; i++) {
        newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    return newDiceRolls;
}

/*
Challenge
1. Create a function called getDiceHtml.
2. getDiceHtml should map over the array of dice rolls
   returned from getDiceRollArray to generate the html
   we need to render our dice with random values. This is
   the HTML: `<div class="dice">DICE VALUE HERE</div>`
3. Think about the parameters and arguments!
4. Down in renderCharacter(), set diceHtml equals to our
   new getDiceHtml function. Remember to give it the argument
   it needs.
5. Delete any code we no longer need.
**hint.md for help**
*/

function getDiceHtml(diceCount){
    return getDiceRollArray(diceCount).map(function(num){
        return `<div class="dice">${num}</div>`
    }).join('')
}


const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceCount: 3
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceCount: 1
}

function renderCharacter(data) {
    const { elementId, name, avatar, health, diceCount } = data;
    const diceHtml = getDiceHtml(diceCount)

    document.getElementById(elementId).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                ${diceHtml}
            </div>
        </div>`;
}

renderCharacter(hero);
renderCharacter(monster);

console.log(monster)


const hotel1 = {
	name: 'Safari View',
	rooms: 30,
	stars: '⭐⭐⭐⭐⭐',
	costPerNightAdult: 240,
	costPerNightChild: 180,
}

const hotel2 = {
	name: 'Leopard Mansion',
	rooms: 96,
	stars: '⭐⭐⭐',
	costPerNightAdult: 120,
	costPerNightChild: 180,
}


function NationalParkHotels(data){
    this.name = data.name
    this.rooms = data.rooms
    this.stars = data.stars
    this.costPerNightAdult = data.costPerNightAdult
    this.costPerNightChild = data.costPerNightChild

	function sum(num1,num2){
        return data.costPerNightAdult*num1 + data.costPerNightAdult*num2}
	console.log()

	this.summarizeHotel = function(){
		console.log(`A one night stay at the ${this.name} for 2 adults and 2 children is $${sum(2,2)} Dollars`)
	}
}


const hotela = new NationalParkHotels(hotel1)
const hotelab = new NationalParkHotels(hotel2)

hotela.summarizeHotel()
hotelab.summarizeHotel()
