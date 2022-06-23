const typesOfGreetings = ["Hello", "Bonjour", "Hola", "Nǐn hǎo", "Salve", "Konnichiwa", "Guten Tag", "Olá", "Anyoung haseyo", "Asalaam alaikum", "Shikamoo", "Goedendag", "Yassas", "Dzień dobry", "Selamat siang", "Shalom",]
const greeting = document.getElementById('header')
const button = document.getElementById('buttonPop')

button.addEventListener ('click', function getGreeting(){
    greeting.textContent = typesOfGreetings[Math.floor(Math.random()*typesOfGreetings.length)], 
    document.getElementById("greeting-background").style.visibility = "initial";});