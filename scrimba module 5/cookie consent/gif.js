import { catsData } from './cat data.js'



function getEmotionsArray(cats) {
    const emotionsArray = []
    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {

            if (!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

let emoCont = document.querySelector('.emotion-container')

function renderEmotionsRadios(cats) {

    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions) {
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emoCont.innerHTML = radioItems
}

renderEmotionsRadios(catsData)

emoCont.addEventListener('change', highlightCheckedOption)





function highlightCheckedOption(e){
let activeEmotion = document.getElementById(e.target.id)
let prevEmotion = document.querySelector(".highlight");
console.log(activeEmotion)
if(prevEmotion){
    prevEmotion.classList.remove('highlight')
}
activeEmotion.parentElement.classList.add('highlight');
}




const getImage=document.querySelector('#meme-submit')

getImage.addEventListener('click', getMatchingCatsArray)


function getMatchingCatsArray(e){

if(document.querySelector('input[type="radio"]:checked')){
    const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
    console.log(selectedEmotion)
}else(console.log('Select an Emotion'))

}
