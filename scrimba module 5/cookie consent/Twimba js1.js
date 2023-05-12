import { tweetsData } from './TweetsData.js'

                                   /* Declated Variables  */
const chirpInput = document.querySelector('#tweet-input')
const chirpBtn = document.querySelector('#tweet-btn')
const chirpFeed = document.querySelector('#feed')


                                   /* Event Listeners */

chirpBtn.addEventListener('click', function(e){
    let target = e.target.id
    console.log(chirpInput.value)
    console.log(target)
    chirpInput.value = '' /* empties text input */
})


                                  /* Functions */

function getFeedHtml(){
    let feedHtml = ''

    tweetsData.forEach(function(tweet){

         feedHtml +=
        ` <div class="tweet">
        <div class="tweet-inner">
            <img src="${tweet.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${tweet.handle}</p>
                <p class="tweet-text">${tweet.tweetText}</p>
                <div class="tweet-details">
                    <span class="tweet-detail">
                    ${tweet.replies.length}
                    </span>
                    <span class="tweet-detail">
                    ${tweet.likes}
                    </span>
                    <span class="tweet-detail">
                    ${tweet.retweets}
                    </span>
                </div>
            </div>
        </div>
    </div>`
})

return feedHtml
}


function render(){
chirpFeed.innerHTML = getFeedHtml()
}
                                  /* Testing Functions */

render()