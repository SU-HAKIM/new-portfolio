const imgBox=document.querySelector('.imgBox')
const whiteBox=document.querySelectorAll('.whiteBox')


imgBox.addEventListener('dragstart',function(e){
    this.classList.add('border')
    setTimeout(()=>{
        this.classList.add('hide')
    },0)
})
imgBox.addEventListener('dragend',function(e){
    this.classList.remove('border')
    this.classList.remove('hide')
})

whiteBox.forEach(box=>{
    box.addEventListener('dragover',function(e){
    this.appendChild(imgBox);
    imgBox.classList.add('dropEffect')
    })
    box.addEventListener('dragenter',function(e){
        this.classList.add('overEffect')
    })
    box.addEventListener('dragleave',function(e){
        this.classList.remove('overEffect')

    })
    box.addEventListener('drop',function(e){
    })
})
