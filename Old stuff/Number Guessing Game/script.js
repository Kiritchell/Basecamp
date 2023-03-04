const Guess = document.getElementById('guessBTN')
const Max = 101
const Min = 1
const randNumber = Math.floor(Math.random()*(Max-Min))+Min;
var inputNum = ""
var inputNum = document.getElementById("inputBox");
var hint = document.getElementById('hint');

//hint.textContent = "Hello";

window.onload = function() {
    inputNum.addEventListener("input", function() {
    console.log(inputNum.value); 
    window.localStorage.setItem('inputVal', inputNum.value );
  });
}

console.log(randNumber)
console.log(inputNum.value)

function Victory(){document.getElementById('winBox').classList.add('show')}

Guess.addEventListener('click', 
        function Check(){
    if (randNumber == localStorage.getItem('inputVal', inputNum.value))
        {console.log("Correct! 🥳"),
        Victory(),
        window.localStorage.clear()}

    else if (randNumber > localStorage.getItem('inputVal', inputNum.value)){hint.textContent ="Higher"}
    else {hint.textContent ="Lower"}})

