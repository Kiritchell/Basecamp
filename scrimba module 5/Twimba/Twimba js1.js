import { tweetsData } from './TweetsData.js'

import { v4 as uuidv4 } from 'https://jspm.dev/uuid';


                                   /* Declated Variables  */
const chirpInput = document.querySelector('#tweet-input')
const chirpFeed = document.querySelector('#feed')


                                   /* Event Listeners */

document.addEventListener('click', function(e){
    if(e.target.id === 'tweet-btn'){

    handleChirpClick()

    if(chirpInput.value){
        tweetsData.unshift({
            handle: `da-real-scrimba`,
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: chirpInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid:uuidv4()})

    render()}

    window.localStorage.setItem("tweetsData", JSON.stringify(tweetsData));

    chirpInput.value = '' /* empties text input */

    /* end of new */

    }
    if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply)
    }
    else if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
    else if(e.target.dataset.retweet){
        handleRetweetTweet(e.target.dataset.retweet)
    }
    })


                                  /* Functions */

function getFeedHtml(){
    let feedHtml=''
    let newObject = window.localStorage.getItem("tweetsData");
    newObject = JSON.parse(newObject)
    console.log(newObject[0].handle)
    tweetsData.forEach(function(tweet){

let faRetweetClass = ''
let faHeartClass = 'fa-regular'
if(tweet.isLiked){
    faHeartClass='fa-solid'}
if(tweet.isRetweeted){
    faRetweetClass='retweeted'}

let repliesHTML = ''

if(tweet.replies.length>0){
    tweet.replies.forEach(function(reply){
        repliesHTML+=
        `<div class="tweet-reply">
        <div class="tweet-inner">
            <img src="${reply.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${reply.handle}</p>
                    <p class="tweet-text">${reply.tweetText}</p>

                </div>

            </div>

        </div>
        `

    })

}

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
                    <i class="${faHeartClass} fa-heart"
                    data-like="${tweet.uuid}"></i>
                    ${tweet.likes}
                    </span>
                    <span class="tweet-detail">
                    <i class="${faRetweetClass} fa-solid fa-retweet"
                    data-retweet="${tweet.uuid}"></i>
                    ${tweet.retweets}
                    </span>
                </div>
            </div>
        </div>
        <div class="hidden" id="replies-${tweet.uuid}">
        ${repliesHTML}
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

function handleRetweetTweet(tweetID){
    const targetTweetObj = tweetsData.filter(function(tweet){
       return tweet.uuid === tweetID
    })[0]

    if(targetTweetObj.isRetweeted===false){
        targetTweetObj.retweets++
    }else{
        targetTweetObj.retweets--
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted

    render()
}

function handleReplyClick(replyId){
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}

function handleChirpClick(){
    return chirpInput.value
}
                                  /* Testing Functions */

render()



