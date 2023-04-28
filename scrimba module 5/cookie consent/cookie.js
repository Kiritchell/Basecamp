
const close = document.querySelector('#close')
const modal = document.querySelector('#modal')
const modalText = document.querySelector('.modal-text')
const nameInput = document.querySelector('#name-input')
const info = document.querySelector('.info')
const info2=document.querySelector('.info2')
const buttonDiv = document.querySelector('.button-div-2')
const declineBtn = document.querySelector('.decline-btn')

close.addEventListener('click', function(){
    modal.style.display = 'none'
})

setTimeout(function(){modal.style.display='block'},500)/*here change none to block*/

const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', function(e){
    e.preventDefault()

const loginFormData= new FormData(loginForm)

const loginName = loginFormData.get('Name')
const loginEmail = loginFormData.get('Email')
console.log(loginName +' ' + loginEmail)

    console.log('form submitted')
    modalText.textContent = 'Spam requested! Good luck getting rid of it! 👻'
    setTimeout(function(){
        modalText.textContent= 'Sold data to Russia'
    }, 1000)
        setTimeout(function(){
            modalText.innerHTML=`${loginName} sucks`
            info.style.display='none'
            info2.style.display='none'
            buttonDiv.style.display='none'
        },2000)
setTimeout(function(){
    close.disabled=false
},2001)

})

declineBtn.addEventListener('mouseover', function(){
    buttonDiv.classList.toggle('reverse')
    console.log('hover')
})
/* cookie consent end */