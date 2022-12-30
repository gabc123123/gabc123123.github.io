// v.1.0.2


var sec = 0;

function fuTimer(){

function normalize(a){
if(a <= 9){ a = '0'+a; }
return a;
}

sec++;

let hours = normalize(Math.floor(sec / 3600));
let minutes = normalize(Math.floor(sec % 3600 / 60));
let seconds = normalize(Math.floor(sec % 3600 % 60));
//console.log(hours+' '+minutes+' '+seconds);

let time2 = Date.now();
time2 = new Date(time2);
let hours2 = normalize(time2.getHours());
let minutes2 = normalize(time2.getMinutes());
let seconds2 = normalize(time2.getSeconds());
let time = hours2+':'+minutes2;

document.getElementById('result').innerHTML = hours+':'+minutes+':'+seconds;
document.getElementById('result2').innerHTML = time;
document.getElementsByTagName('title')[0].innerHTML = hours+':'+minutes+':'+seconds;
}

setInterval(fuTimer, 1000);

fuWorker('on');
