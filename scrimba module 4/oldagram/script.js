const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "looked cute, might delete later",
        likes: 205
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 40
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 800
    }
]

let profile = 0

let imageListener = document.querySelector('#image')

imageListener.addEventListener('dblclick', function profileCycle(){
    profile += 1
    let instname = document.querySelector('#name')
instname.innerHTML = posts[profile].name

let instlocation = document.querySelector('#location')
instlocation.innerHTML = posts[profile].location

let instusername = document.querySelector('#username')
instusername.innerHTML = posts[profile].username

let instlikes = document.querySelector('#likes')
instlikes.innerHTML = posts[profile].likes + '  Meaningless Nods'

let instcomment = document.querySelector('#comment')
instcomment.innerHTML = ' ' + posts[profile].comment


})

