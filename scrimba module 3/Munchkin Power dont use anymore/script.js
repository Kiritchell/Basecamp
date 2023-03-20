let powerWritten = document.getElementById('power-el')
let pastPower = document.getElementById('past-power')
let power = 0
let roundNumberClicks = document.getElementById('save-btn')
let count = 0
let result = 0

function increase(){
  power += 1
  powerWritten.innerHTML = power
}

function decrease(){
  power -= 1
  powerWritten.innerHTML = power
}



function save(){
  roundNumberClicks.onclick = function(){
    count += 1;
    console.log(count)
    pastPower.innerHTML += 'Round ' + count + '  =  ' + power + '<br>'

  }

}
