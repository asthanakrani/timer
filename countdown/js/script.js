let dy = document.getElementById ('dy');
let hr = document.getElementById ('hr');
let mn = document.getElementById ('mn');
let sc = document.getElementById ('sc');

const timer = () => {
     
    let days = 0;
    let hour = 0 ;
    let min = 0;
    let sec = 0 ;

    setInterval(()=>{

        sec ++;

        if(sec < 10){
            sc.innerHTML = "0"+ sec;
        }else{
            sc.innerHTML = sec;
        }      
        if(sec > 59){
            min++;
            sec = 0;
            sc.innerHTML = sec;
            mn.innerHTML = min;
        } 
        if(min > 59){
            hour++;
            min = 0;
            hr.innerHTML = hour;
            mn.innerHTML = min;
        }
        if(min < 10){
            mn.innerHTML ="0" + min;
        }else{
            mn.innerHTML = min;
        }
        if(hour >= 24){
            days++;
            hour = 0;
            hr.innerHTML
        }
        if(days < 10){
            dy.innerHTML= "0" + days;
        }else{
            dy.innerHTML= days;
        }
    },1000)
}
timer();