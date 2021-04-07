const imgBox = document.querySelector('.imgBox')
const whiteBox = document.querySelectorAll('.whiteBox')

// imgBox.addEventListener('dragstart', function (e) {
//     this.classList.add('hold')
//     setTimeout(() => {
//         this.classList.add('hide')
//     }, 0);
// })
// imgBox.addEventListener('dragend', function (e) {
//     this.classList.remove('hide')
// })

// for (let sin of whiteBox) {
//     sin.addEventListener('dragover', function (e) {
//         e.preventDefault()
//     })
//     sin.addEventListener('dragenter', function (e) {

//     })
//     sin.addEventListener('dragleave', function (e) {

//     })
//     sin.addEventListener('drop', function (e) {
//         this.appendChild(imgBox)
//     })
// }


imgBox.addEventListener('dragstart', function (e) {
    this.classList.add('border')

    setTimeout(() => {
        this.classList.add('hide')
    }, 0);

})

imgBox.addEventListener('dragend', function (e) {
    this.classList.remove('hide')
    this.classList.remove('border')
})

for (let sinBox of whiteBox) {
    sinBox.addEventListener('dragover', function (e) {
        this.appendChild(imgBox)
        this.classList.add('overEffect')
    })
    sinBox.addEventListener('dragleave', function (e) {
        this.classList.remove('overEffect')
    })
    sinBox.addEventListener('dragenter', function (e) {

    })
    sinBox.addEventListener('drop', function (e) {
        this.classList.add('overEffect')
    })
}