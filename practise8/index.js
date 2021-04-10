const div=document.querySelector('.container')

div.addEventListener('dragenter',function(e){
    this.classList.add('border')
    setTimeout(()=>{
        this.classList.add('hide')
    },0)
})
div.addEventListener('dragend',function(e){
    this.classList.remove('border')
    this.classList.remove('hide')
})