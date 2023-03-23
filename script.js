let seconds = 00;
let tens = 00;

let appendTens = document.getElementById('tens');

let appendSeconds = document.getElementById('second');

let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');

let interval;

buttonStart.addEventListener('click',()=>{
  
    interval = setInterval(startTimer,10);
   
    // myInterval = setInterval(function, milliseconds)

})


function startTimer(){
    tens++;

    if(tens <= 9)
    {
        appendTens.innerHTML = '0' + tens;
    }
    if(tens > 9)
    {
        appendTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = '0' + 0;
    }

    if(seconds > 9)
    {
        appendSeconds.innerHTML = seconds;
    }
}


buttonStop.addEventListener('click',()=>{
    clearInterval(interval);
})

buttonReset.addEventListener('click',()=>{
    clearInterval(interval);
    tens = 00;
    seconds = 00; 
    appendTens.innerHTML = ' 00'; 
    appendSeconds.innerHTML = '00';

})
