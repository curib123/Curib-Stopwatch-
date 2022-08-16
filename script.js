let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;


let setTimer = " ";

let startbtn = document.querySelector('#start-btn');
let stopbtn = document.querySelector('#stop-btn');
let resetbtn = document.querySelector('#reset-btn');

startbtn.onclick = () => {
    startbtn.classList.add('active');
    stopbtn.classList.remove('stopActive');
    
    setTimer = setInterval(() =>{
     ms++;
     
     if (ms < 10) {
         ms = "0" + ms;
         
     }
     
     if (ms == 100) {
         sec++;
         ms = 0;
         
         if (sec < 10) {
         sec = "0" + sec;
          document.querySelector('#seconds').innerText = sec;
         }else{
          document.querySelector('#seconds').innerText = sec;
         }
   
        
     }
     
     if (sec == 60) {
         min++;
         sec = 0;
         if (min < 10) {
         
         min = "0" + min;
           document.querySelector('#minutes').innerText = min;
         }else{
             document.querySelector('#minutes').innerText = min;
         }
     }
     
     if (min == 60) {
         hr++;
         hr = 0;
         if (hr < 10) {
         
         he = "0" + hr;
           document.querySelector('#hours').innerText = hr;
         }else{
             document.querySelector('#hours').innerText = hr;
         }
     }
     
    
     document.querySelector('#milliseconds').innerText = ms;
       
    },10);
    
    
    
}

stopbtn.onclick = () => {
    startbtn.classList.remove('active');
    stopbtn.classList.add('stopActive');
    clearInterval(setTimer);
}

resetbtn.onclick = () => {
    startbtn.classList.remove('active');
    stopbtn.classList.remove('stopActive');
    clearInterval(setTimer);
    document.querySelector('#milliseconds').innerText = "00";
    document.querySelector('#seconds').innerText = "00";
    document.querySelector('#minutes').innerText = "00";
    document.querySelector('#hours').innerText = "00";
}


   