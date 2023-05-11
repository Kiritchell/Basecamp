import { tweetsData } from './TweetsData.js'

/* Declated Variables  */
const chirpInput = document.querySelector('#tweet-input')
const chirpBtn = document.querySelector('#tweet-btn')

chirpBtn.addEventListener('click', function(e){
    let target = e.target.id
    console.log(target)
})

