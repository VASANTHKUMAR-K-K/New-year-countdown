const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")




console.log(new Date())

// const currentyear=new Date().getFullYear();
//console.log(currentyear+1)

// const newyear=new Date(`January 1 ${currentyear+1} 00:00:00`)
// console.log(newyear);
 



function updatetime(){
    const currentyear=new Date().getFullYear();
    const newyear=new Date(`January 1 ${currentyear+1} 00:00:00`)
    const currentdate=new Date();
    const difference= newyear - currentdate;
    const d=Math.floor(difference/1000/60/60/24)
    console.log(d)
    const h=Math.floor((difference/1000/60/60)%24)
   // console.log(h)
    const m=Math.floor((difference/1000/60)%60)
    //console.log(m)
    const s=Math.floor((difference/1000)%60)
   // console.log(s)
   //console.log(d+" "+h+" "+m)

  days.innerHTML=d<10?"0"+d:d;
  hours.innerHTML=h<10?"0"+h:h;
  minutes.innerHTML=m<10?"0"+m:m;
  seconds.innerHTML=s<10?"0"+s:s;

}
setInterval(updatetime,1000);

/*
1000ms=1sec
60sec=1min
60 min=1hr
24 hrs=1 day
*/

