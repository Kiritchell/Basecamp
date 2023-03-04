let header = document.getElementById('header')
let agePara = document.getElementById('ageP')
let age = 27
let name = "Kirk"
let greeting = ["Hello", " Bonjour", " こんにちは", "Hola", "Guten Tag", "Nǐn Hǎo.", "Olá", "Asalaam Alaikum" ]
const a = Math.floor(Math.random()*(3-1))+1
const b = Math.floor(Math.random() * (10 - 1)) + 1;
const c = Math.floor(Math.random()*(100-1)) + 1;
// const min = parseInt(prompt("Enter a min value: "));
// const max = parseInt(prompt("Enter a max value: "));
// const userRandomNumber = Math.floor(Math.random()*(max-min)+1)
const array=["Kirk", "Finn", "Katie"]
const randomElement = array[Math.floor(Math.random() * array.length)];
const randomGreeting = greeting[Math.floor(Math.random()*greeting.length)];

header.textContent = `${randomGreeting} ${name}`

function giveAge(){
  agePara.textContent = `My name is  ${name} and I am ${age} years old.`
}
giveAge()

console.log(a)
console.log(b)
console.log(c)
console.log(randomElement)

function checkEqual(a, b) {
  return a==b?"Equal":"Not Equal"
  }
  console.log(checkEqual(1,2))

  function checkSign(num) {
    return (num > 0)?"positive"
    :(num==0)?"zero"
    : "negative"
    }
    
