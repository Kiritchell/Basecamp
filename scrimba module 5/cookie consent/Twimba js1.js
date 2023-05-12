import { tweetsData } from './TweetsData.js'

                                   /* Declated Variables  */
const chirpInput = document.querySelector('#tweet-input')
const chirpBtn = document.querySelector('#tweet-btn')
const chirpFeed = document.querySelector('#feed')


                                   /* Event Listeners */

chirpBtn.addEventListener('click', function(e){
    let target = e.target.id
    console.log(chirpInput.value)
    chirpInput.value = '' /* empties text input */
})

document.addEventListener('click', function(e){
    if(e.target.dataset.reply){
        let currentReply=e.target.dataset.reply
        console.log('reply', e.target.dataset.reply)
    }
    else if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
    else if(e.target.dataset.retweet){
        console.log('retweet', e.target.dataset.retweet)
    }
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
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${tweet.uuid}"></i>
                    ${tweet.replies.length}
                    </span>
                    <span class="tweet-detail">
                    <i class="fa-regular fa-heart"
                    data-like="${tweet.uuid}"></i>
                    ${tweet.likes}
                    </span>
                    <span class="tweet-detail">
                    <i class="fa-solid fa-retweet"
                    data-retweet="${tweet.uuid}"></i>
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


function handleLikeClick(tweetID){
    const targetTweetObj = tweetsData.filter(function(tweet){
       return tweet.uuid === tweetID
    })[0]

    if(targetTweetObj.isLiked===false){
        targetTweetObj.likes++
    }else{
        targetTweetObj.likes--
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked

    render()
}

                                  /* Testing Functions */

render()



