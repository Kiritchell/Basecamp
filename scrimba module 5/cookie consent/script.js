const close = document.querySelector('#close')
const modal = document.querySelector('#modal')
const modalText = document.querySelector('.modal-text')
const nameInput = document.querySelector('#name-input')
const info = document.querySelector('.info')
const info2=document.querySelector('.info2')
const buttonDiv = document.querySelector('.button-div-2')

close.addEventListener('click', function(){
    modal.style.display = 'none'
})

setTimeout(function(){modal.style.display='block'},500)



const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('form submitted')
    modalText.textContent = 'Spam requested! Good luck getting rid of it! 👻'
    setTimeout(function(){
        modalText.textContent= 'Sold data to Russia'
    }, 1000)
        setTimeout(function(){
            modalText.innerHTML='You suck'
            info.style.display='none'
            info2.style.display='none'
            buttonDiv.style.display='none'
        },2000)

})