const password = document.querySelector('.password')
const button = document.querySelector('.btn-primary')
const addPass = document.querySelector('.btn-danger')
const getPassword = document.querySelector('.getPassword')
const ok = document.querySelector('.ok')
const givePassword = document.querySelector('.givePassword')
const input = document.querySelector('.form-control')
const form = document.querySelector('form')
let takePassword = null

window.onload = function (e) {
    addPass.addEventListener('click', function (e) {
        getPassword.classList.toggle('hide')
    })
    ok.addEventListener('click', function (e) {
        takePassword = givePassword.value
        localStorage.setItem('password', takePassword)
        getPassword.classList.add('hide')
        addPass.innerText = 'Change Password'
    })
    if (localStorage.getItem('password')) {
        password.classList.remove('hide')
        addPass.innerText = 'Change Password'
    }
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        let text = input.value
        let pass = localStorage.getItem('password')
        if (text == pass) {
            password.classList.add('hide')
        } else {
            alert('wrong password')
            input.value = ''
        }
    })
}