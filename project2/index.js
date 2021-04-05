const timeWrapper=document.getElementById('current-time')

function showTime(){
    let data=new Date()
    let hour=data.getHours()
    let minute=data.getMinutes()
    let second=data.getSeconds()
    let noti;

    //tasks

    if(hour > 12){
        noti='PM'
        hour=hour-12
    }else{
        noti='AM'
        hour=hour
    }

    timeWrapper.innerText=`${hour} : ${minute} : ${second} ${noti}`

    setTimeout(()=>{
        showTime()
    },1000)
}
document.addEventListener('DOMContentLoaded',function(e){
    showTime()
})

