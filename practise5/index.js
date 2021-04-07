const showFiled = document.getElementById('showTime')

function comingSoon() {
    let target = new Date(2021, 3, 15, 10, 0, 0).getTime()
    let now = new Date().getTime()
    let difference = target - now

    let days = Math.floor(difference / (1000 * 60 * 60 * 24))
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor(((difference % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((((difference % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) % (1000 * 60)) / 1000)

    showFiled.textContent = `${days}D : ${hours}h : ${minutes}m : ${seconds < 10 ? '0' + seconds : seconds}s`

    setTimeout(comingSoon, 1000);
}
document.addEventListener('DOMContentLoaded', function (e) {
    comingSoon()
})