/* v.1.1.0 */
// https://developer.mozilla.org/docs/Web/API/Element/mousemove_event


var xxx = document.getElementById("btn");
var xxx2 = document.getElementById("ads2");




const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

myPics.width = window.innerWidth;
myPics.height = window.innerHeight;

// When true, moving the mouse draws on the canvas
let isDrawing = false;

let x = 0;
let y = 0;
let rect = '';

var bg = '#EFEFEF';
var color = '#141414';

var a1 = 'notdraw';
var a2 = 'notdraw';

if (confThemeEmbed == 'dark') {
bg = '#141414';
color = '#EFEFEF';
}

document.getElementById("color").value = color; 

/*myPics.width = window.innerWidth;
myPics.height = window.innerHeight;*/

context.beginPath();
context.fillStyle = bg;
context.fillRect(0,0,window.innerWidth, window.innerHeight);



context.closePath();


const resize = () => {
myPics.width = window.innerWidth;
myPics.height = window.innerHeight;

context.beginPath();
context.fillStyle = bg;
context.fillRect(0,0,window.innerWidth,window.innerHeight);
context.closePath();
}
resize()
window.addEventListener('resize', resize);








myPics.addEventListener('mousedown', e => {
x = e.offsetX;
y = e.offsetY;
isDrawing = true;
});


myPics.addEventListener('touchstart', e => {
rect = myPics.getBoundingClientRect();
x = e.targetTouches[0].pageX - rect.left;
y = e.targetTouches[0].pageY - rect.top;
isDrawing = true;
});


myPics.addEventListener('mousemove', e => {
if (isDrawing === true) {
drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
//document.getElementById("btn").innerHTML = ''; 
xxx.style.display = "none";
xxx2.style.display = "none";
  }
});

myPics.addEventListener('touchmove', e => {
if (isDrawing === true) {
rect = myPics.getBoundingClientRect();
x3 = e.targetTouches[0].pageX - rect.left;
y3 = e.targetTouches[0].pageY - rect.top;

drawLine(context, x, y, x3, y3);

x = e.targetTouches[0].pageX - rect.left;
y = e.targetTouches[0].pageY - rect.top;


//document.getElementById("btn").innerHTML = ''; 
xxx.style.display = "none";
xxx2.style.display = "none";
}

});

window.addEventListener('mouseup', e => {
if (isDrawing === true) {
x = e.offsetX;
y = e.offsetY;
//  drawCircle(context, x, y)
drawLine(context, x, y, e.offsetX, e.offsetY);

isDrawing = false;
img();
}

 
});


myPics.addEventListener('touchend', e => {
  if (isDrawing === true) {
let rect = myPics.getBoundingClientRect();
x3 = e.changedTouches[0].pageX - rect.left;
y3 = e.changedTouches[0].pageY - rect.top;
//  drawCircle(context, x, y)
drawLine(context, x, y, x3, y3);

    isDrawing = false;
          img();
  }

});






window.addEventListener('mouseout', e => {
x = e.offsetX;
y = e.offsetY;
});

/*myPics.addEventListener('touchleave', e => {
let rect = myPics.getBoundingClientRect();
x3 = e.changedTouches[0].pageX - rect.left;
y3 = e.changedTouches[0].pageY - rect.top;
});

myPics.addEventListener('touchcancel', e => {
let rect = myPics.getBoundingClientRect();
x3 = e.changedTouches[0].pageX - rect.left;
y3 = e.changedTouches[0].pageY - rect.top;
});*/

myPics.oncontextmenu = (e) => {
//alert('test');
 isDrawing = false;
x = 0;
y = 0;
}




function drawLine(context, x1, y1, x2, y2) {




color = document.getElementById("color").value;




context.beginPath();
context.strokeStyle = color;
context.lineWidth = 3;
context.moveTo(x1, y1);
context.lineTo(x2, y2);
context.stroke();
context.closePath();





}

/*function drawCircle(context, x1, y1){
context.beginPath();
context.fillStyle = 'black';
context.arc(x1, y1, 1, 0, 2 * Math.PI);
context.fill();
context.closePath();
}*/


/**/


/*myPics.width = window.innerWidth;
myPics.height = window.innerHeight;
context.beginPath();
context.fillStyle = bg;
context.fillRect(0,0,window.innerWidth,window.innerHeight);
context.closePath();*/

function img(){

const canvas = document.getElementById('myPics');
const dataURL = canvas.toDataURL();
//console.log(dataURL);
var time = Math.floor(new Date().getTime() / 1000);
 document.getElementById("img").innerHTML = '<span><a class="text button light3 border2" href="'+dataURL+'" download="'+time+'">Save</a></span>'; 
 //<img src="'+dataURL+'" name="Flamingo" />



if (xxx.style.display === "none"||xxx.style.display === "") {
xxx.style.display = "block";
xxx2.style.display = "block";
  } else {
xxx.style.display = "none";
xxx2.style.display = "none";
  }


}

fuWorker('on');

