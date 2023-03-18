let power = 0
let writtenPower = document.getElementById('power-el')
let saveEl = document.getElementById('save-el')

function increase(){
    power += 1
    writtenPower.innerHTML = power
}

function decrease(){
    power -= 1
    writtenPower.innerHTML = power
}


function save(){
    let pastPower = power + " - "
    saveEl.innerHTML += pastPower
    console.log(power)

}




// practice
power = 0
writtenPower.innerHTML = power