const modal = document.querySelector('#modal')
const form = document.querySelector('#form')

modal.style.display="none"

setTimeout(function(){
    modal.style.display="block"
},0)

form.addEventListener('submit', function(e){
    e.preventDefault()

const dataFromForm = new FormData(form)

const formName = dataFromForm.get('Name')
const formEmail = dataFromForm.get('Email')
const formPassword = dataFromForm.get('Password')


console.log(formName)
console.log(formEmail)
console.log(formPassword)
})