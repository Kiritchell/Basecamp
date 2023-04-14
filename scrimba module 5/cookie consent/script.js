const close = document.querySelector('#close')
const modal = document.querySelector('#modal')

close.addEventListener('click', function(){
    modal.style.display = 'none'
})

setTimeout(function(){modal.style.display='block'},3000)