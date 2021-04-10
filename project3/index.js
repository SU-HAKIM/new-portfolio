let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ab consectetur debitis esse neque nisi porro reprehenderit voluptatum Fugit, modi, mollitia!'
let arrOfItem = str.split(' ')
const show = document.querySelector('#show')
const form = document.querySelector('#form')
const cardBody = document.querySelector('.card__body')
const countDown = document.querySelector('#countDown')
const type = document.querySelector('#type')
const button = document.querySelector('#button')
const showScore = document.querySelector('#score')
let indexIncrement = 0
let score = 0
show.textContent = arrOfItem[indexIncrement]


form.addEventListener('submit', function (e) {
    e.preventDefault()
    let text = type.value
    if (text == show.textContent) {
        indexIncrement++
        if (indexIncrement >= arrOfItem.length) {
            indexIncrement = 0
        }
        score++
        show.textContent = arrOfItem[indexIncrement]
        showScore.textContent = score
        type.value = ''
        if (score == 50) {
            let div = document.createElement('div')
            div.className = 'successMessage'
            div.innerHTML = `<h1>wow!you have passed first milestone</h1><span class='reset'>&times</span>;`
            cardBody.appendChild(div)
            type.disabled = true
            cardBody.addEventListener('click', function (e) {
                if (this.contains(e.target)) {
                    if (e.target.classList.contains('reset')) {
                        e.target.parentElement.remove()
                        type.disabled = false
                    }
                }
            })
        }
    } else {
        score -= 1
        showScore.textContent = score
    }
})
