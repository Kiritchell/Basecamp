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


function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()


    if (catsArray.length === 1)
        {return catsArray[0].alt}
        else{
            function randomNumber(min, max) {
                return Math.floor(Math.random() * catsArray.length)
              }
              {return catsArray[randomNumber()].alt}
        }
}

function renderCat(){
getSingleCatObject()//temporary
}



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
// console.log(activeEmotion)
if(prevEmotion){
    prevEmotion.classList.remove('highlight')
}
activeEmotion.parentElement.classList.add('highlight');
}




const getImage=document.querySelector('#meme-submit')
const isGif = document.querySelector('#gif-checkbox')

getImage.addEventListener('click', renderCat)





function getMatchingCatsArray(e){
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value

        const matchingCatEmotion = catsData.filter(function(catSpecial){
            if (isGif.checked){
                console.log('true')
               return  catSpecial.emotionTags.includes(selectedEmotion) && catSpecial.isGif

            }
            else{
                return  catSpecial.emotionTags.includes(selectedEmotion) }

        })

       return matchingCatEmotion

}else(console.log('Select an Emotion'))


































getImage.addEventListener('click', function(){
    if (isGif.checked && document.querySelector('input[type="radio"]:checked') ){

        console.log('show gif')
    }
    else{
        console.log('pick yo emotion to get gif')
    }
})
}