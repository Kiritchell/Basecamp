import { catsData } from './cat data.js'



function getEmotionsArray(cats) {
    const emotionsArray = []
    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
            /*
            Challenge:
            1. Refactor this nested for of so that an
               emotion is only pushed to emotionsArray
               if it is not already in emotionsArray.
               Extra kudos if you use the "logical not"
               operator - feel free to google it!
            */

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


// let emoCont = document.querySelector('.emotion-container')
// let radioItems = ''


// function write(){
// for (let anything of catsData){
//     for (let emo of anything.emotionTags){

//         radioItems +=
//         `
//         <div class="emotions">
//         <label for="${emo}">${emo}</label>
//         <input
//         class="emotions"
//         name="emotions"
//         type="radio"
//         id="${emo}"
//         value=${emo}>
//         </div>`

// }
// emoCont.innerHTML = radioItems
// }

// }

// write()



// emoCont.addEventListener('click', function(e){
//     console.clear()
//     let activeEmotion = e.target.id
//     console.log(activeEmotion)
// })

// // addItemBtn.addEventListener('click', function(){

// //             if(shoppingList.includes(itemInput.value)){
// //                 console.log('no duplicates')
// //             }
// //             else{
// //                 shoppingList.push(itemInput.value)
// //                 render()
// //             }
// //             itemInput.value = ''
// //     })