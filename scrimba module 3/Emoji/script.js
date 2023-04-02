let myEmojis = ["🏃", "⚾️", "🎄"]
const emojiContainer = document.querySelector("#emoji-paragraph")
const addEmojiButton = document.querySelector("#add-button")
const unshiftEmojiButton = document.querySelector('#unshift-button')
let input = document.querySelector('#input')
const popButton = document.querySelector('#pop-button')
const shiftButton = document.querySelector('#shift-button')
// for (let i = 0; i < myEmoji.length; i++){
//     emojiContainer.innerHTML += (`${myEmojis[i]}  `)
// }


addEmojiButton.addEventListener('click', function(){
    emojiContainer.innerHTML = ''
    myEmojis.push(input.value)
    input.value = ""
    emojiContainer.append(input.value)
    render()
})

unshiftEmojiButton.addEventListener('click', function(){
    emojiContainer.innerHTML = ''
    myEmojis.unshift(input.value)
    input.value = ""
    emojiContainer.append(input.value)
    render()
})

shiftButton.addEventListener('click', function(){
    emojiContainer.innerHTML = ''
    myEmojis.shift(input.value)
    input.value = ""
    emojiContainer.append(input.value)
    render()
})


popButton.addEventListener('click', function(){
    emojiContainer.innerHTML = ''
    myEmojis.pop(input.value)
    input.value = ""
    emojiContainer.append(input.value)
    render()
})

function render(){
for (let i = 0; i < myEmojis.length; i++){
    const emoSpan = document.createElement('span')
    emoSpan.textContent = myEmojis[i]
    emojiContainer.append(emoSpan)
}

}

render()