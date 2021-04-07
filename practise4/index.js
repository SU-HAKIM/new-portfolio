const textArea = document.querySelector('#type')
const button = document.querySelector('#click')
const showResult = document.querySelector('#showResult')
textArea.disabled = true

button.addEventListener('click', function (e) {
    if (this.textContent == 'Start') {
        textArea.disabled = false
        this.textContent = 'Done'
        let date = new Date()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        // another event
        textArea.addEventListener('input', function (e) {
            let text = textArea.value
            let arr = text.split(' ')
            if (arr.length == 50) {
                this.disabled = true
                button.textContent = 'Start'
                this.value = ''
                let newDate = new Date()
                let newMinutes = newDate.getMinutes()
                let newSeconds = newDate.getSeconds()
                let resMinutes = newMinutes - minutes
                let resSeconds = newSeconds - seconds

                showResult.innerHTML = `You have taken ${resMinutes} minute ${resSeconds} seconds`
            }
        })
    }
})

