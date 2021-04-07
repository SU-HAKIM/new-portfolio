const youTube = document.querySelector('.youTube')
const instagram = document.querySelector('.instagram')
const twitter = document.querySelector('.twitter')

let YouTube = 3000
let Instagram = 2000
let Twitter = 1000
let difference = 200

let add = 0
let addA = 0
let addB = 0

function youTubeA() {
    // youTube
    if (Number.parseInt(youTube.innerHTML) < YouTube) {
        add += (YouTube / difference)
        youTube.innerHTML = add
        console.log(add)
        setTimeout(youTubeA, 1);
    } else {
        youTube.innerHTML = YouTube
    }
}

function instagramA() {
    // instagram
    if (Number.parseInt(instagram.innerHTML) < Instagram) {
        addA += (Instagram / difference)
        instagram.innerHTML = addA
        console.log(addA)
        setTimeout(instagramA, 1);
    } else {
        instagram.innerHTML = Instagram
    }
}

function twitterA() {
    // twitter
    if (Number.parseInt(twitter.innerHTML) < Twitter) {
        addB += (Twitter / difference)
        twitter.innerHTML = addB
        console.log(addB)
        setTimeout(twitterA, 1);
    } else {
        twitter.innerHTML = Twitter
    }
}

window.onload = function (e) {
    youTubeA()
    instagramA()
    twitterA()
}