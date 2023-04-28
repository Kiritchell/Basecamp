import { catsData } from './cat data.js'


let emoCont = document.querySelector('.emotion-container')
let radioItems = ''

function write(){
for (let anything of catsData){
    for (let emo of anything.emotionTags){
        radioItems +=
        `
        <div class="emotion-container">
        <label for="${emo}">${emo}</label>
        <input
        class="emotions"
        name="emotions"
        type="radio"
        id="${emo}"
        value=${emo}>
        </div>`

}
emoCont.innerHTML = radioItems
}
}
write()

