const close = document.querySelector('#close')
const modal = document.querySelector('#modal')

close.addEventListener('click', function(){
    modal.style.display = 'none'
})

setTimeout(function(){modal.style.display='block'},500)

const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', function(e){
e.preventDefault()
console.log('form submitted')
})