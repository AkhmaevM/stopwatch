let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById('displayTime');
let startBtn = document.querySelector('.startWatch') 
let stopBtn = document.querySelector('.stopWatch') 
let resetBtn = document.querySelector('.resetWatch') 

let timer = null;

function stopwatch(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes === 60 ){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    displayTime.innerHTML = h + ':' + m + ':' + s
}

function startWatch(){
    if(timer !==null){
        clearInterval(timer)
    }
   timer = setInterval(stopwatch, 1000);
}


function stopWatch(){
    clearInterval(timer)
}

function resetWatch(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}

startBtn.addEventListener('click', startWatch);
stopBtn.addEventListener('click', stopWatch);
resetBtn.addEventListener('click', resetWatch);
