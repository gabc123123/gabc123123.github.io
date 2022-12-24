// v.1.0.0

var  geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");
if(q == null){ q = 5; }

let letter = "abcdefghijklmnopqrstuvwxyz";
letter = [...letter];

let number = "01234567890123456789";
number = [...number];

// https://medium.com/@khaledhassan45/how-to-shuffle-an-array-in-javascript-6ca30d53f772
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
return arr;
}

function dublicate(arr, n) {
b = [];
for(var x = 0; x < n; ++x){
for(var i = 0; i < arr.length; ++i){
b.push(arr[i]);
}
}
return arr = b;
}

function cuttext(text, n){ return  text = text.substr(0, n); }

function printarr(arr){
let result = '';
for(let i = 0; i < arr.length; i++){
result += arr[i];
}
return result;
}

letter = dublicate(letter, 100);
number = dublicate(number, 100);

shuffle(letter);
result = printarr(letter);
result = cuttext(result, q);
document.getElementById("letter").innerHTML = result; 

shuffle(number);
result = printarr(number);
result = cuttext(result, q);
document.getElementById("number").innerHTML = result; 

letternumber = letter.concat(number);
shuffle(letternumber);
result = printarr(letternumber);
result = cuttext(result, q);
document.getElementById("letternumber").innerHTML = result; 




result = '';
var nav = "5,6,7,8,9,10,50,100,300,500,1000";
nav = nav.split(",");
for(let i = 0; i < nav.length; i++){
if(q == nav[i]){
result += '<span class="button">'+nav[i]+'</span>';
}else{
result += '<a class="button brand" href="?q='+nav[i]+'">'+nav[i]+'</a>';
}
}

document.getElementById("q").innerHTML = result; 
