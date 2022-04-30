let password1 = document.getElementById('pass1')
let password2 = document.getElementById('pass2')
let password3 = document.getElementById('pass3')
let password4 = document.getElementById('pass4')

function Generate(){
var randomstring = Math.random().toString(36).slice(-12);
password1.textContent=randomstring
var randomstring2 = Math.random().toString(36).slice(-12);
password2.textContent=randomstring2
var randomstring3 = Math.random().toString(36).slice(-12);
password3.textContent=randomstring3
var randomstring4 = Math.random().toString(36).slice(-12);
password4.textContent=randomstring4
}

function copy(that){
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
    alert("Copied Password!")
    }