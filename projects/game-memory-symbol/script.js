// v.3.0.1


const limitMaintl = 20;

var i = 0;
var i2 = 0;
var tl = 0;
var print = '';
var result = '';
var resultStart = '';
var resultTmp = '';

var arrTask = [];
var arrResultFinal = [];
var arrLastTwo = [];




const counts =[];

var symbolList = '';

/*var symbolList += 
"โพโฟรรฆ๐๐โตโงโ โฆคโโพโฆโขโผ๐ธ๐โ๐โณโฝโฆฐโฌฮฮฒโถโฌ๐๐โฏโโจโจโจโจโโฝโณโจโโโงซโชโดโโธโฃโโโโ=โ๐น๐โฅโโงโโโโโโฆโดโโ โโโโโโฌยฆ\โงโโขโชฎโโโโฉโฐโฆฒโโโโบโปโโโโยฎโโโโงโงโฒโฃโท:โ@โโโกโฏโฎโยฉโโตโจฏโโฏโคธโคตโโโคฝโโโโคผยคโถโทโโโกโ โธโกโโฃโโฆฑโฅฅโโโฆฯโฒรทโะโ$โโโโกโโโโโธโบโนโโจโโโฅโคโตโฟโพโฅฏะัโฟโโชโชโโยฝโยผโโโโโยพโโโโโโโนโคฅโคฆโฟโฉโชโจโญโทโโฌโซโโจโโ โคโงโคโฅโฎโกโงโฮผโโโโคงโยถโฐโฑโฯโโโพโฐฮจโซโ ";*/

symbolList += 
"๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐คฃ ๐ฅฒ โบ๏ธ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ฅฐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐คช ๐คจ ๐ง ๐ค ๐ ๐ฅธ ๐คฉ ๐ฅณ ๐ ๐ ๐ ๐ ๐ ๐ ๐ โน๏ธ ๐ฃ ๐ ๐ซ ๐ฉ ๐ฅบ ๐ข ๐ญ ๐ค ๐  ๐ก ๐คฌ ๐คฏ ๐ณ ๐ฅต ๐ฅถ ๐ฑ ๐จ ๐ฐ ๐ฅ ๐ ๐ค ๐ค ๐คญ ๐คซ ๐คฅ ๐ถ ๐ ๐ ๐ฌ ๐ ๐ฏ ๐ฆ ๐ง ๐ฎ ๐ฒ ๐ฅฑ ๐ด ๐คค ๐ช ๐ต ๐ค ๐ฅด ๐คข ๐คฎ ๐คง ๐ท ๐ค ๐ค ๐ค ๐ค  ๐ ๐ฟ ๐น ๐บ ๐คก ๐ฉ ๐ป ๐ โ ๏ธ ๐ฝ ๐พ ๐ค ๐ ๐บ ๐ธ ๐น ๐ป ๐ผ ๐ฝ ๐ ๐ฟ ๐พ";

symbolList += 
"๐ ๐ค ๐ โ ๐ ๐ ๐ค ๐ค โ๏ธ ๐ค ๐ค ๐ค ๐ค ๐ ๐ ๐ ๐ ๐ โ๏ธ ๐ ๐ โ ๐ ๐ค ๐ค ๐ ๐ ๐ ๐คฒ ๐ค ๐ โ๏ธ ๐ ๐คณ ๐ช ๐ฆพ ๐ฆต ๐ฆฟ ๐ฆถ ๐ฃ ๐ ๐ฆป ๐ ๐ซ ๐ซ ๐ง  ๐ฆท ๐ฆด ๐๐๐ ๐ ๐ ๐ฉธ";

symbolList += 
"๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ ๐ซ ๐ ๐ ๐ ๐ฅญ ๐ ๐ฅฅ ๐ฅ ๐ ๐ ๐ฅ ๐ฅฆ ๐ฅฌ ๐ฅ๐ถ๐ซ ๐ฝ ๐ฅ ๐ซ ๐ง ๐ง ๐ฅ ๐  ๐ฅ ๐ฅฏ ๐ ๐ฅ ๐ฅจ ๐ง ๐ฅ ๐ณ ๐ง ๐ฅ ๐ง ๐ฅ ๐ฅฉ ๐ ๐ ๐ฆด ๐ญ ๐ ๐ ๐ ๐ซ ๐ฅช ๐ฅ ๐ง ๐ฎ ๐ฏ ๐ซ ๐ฅ ๐ฅ ๐ซ ๐ฅซ ๐ ๐ ๐ฒ ๐ ๐ฃ ๐ฑ ๐ฅ ๐ฆช ๐ค ๐ ๐ ๐ ๐ฅ ๐ฅ  ๐ฅฎ ๐ข ๐ก ๐ง ๐จ ๐ฆ ๐ฅง ๐ง ๐ฐ ๐ ๐ฎ ๐ญ ๐ฌ ๐ซ ๐ฟ ๐ฉ ๐ช ๐ฐ ๐ฅ๐ฏ๐ฅ ๐ผ ๐ซ โ๏ธ ๐ต ๐ง ๐ฅค ๐ง ๐ถ ๐บ ๐ป ๐ฅ ๐ท ๐ฅ ๐ธ ๐น ๐ง ๐พ ๐ง ๐ฅ ๐ด๐ฝ๐ฅฃ ๐ฅก ๐ฅข ๐ง";








// romove dublicate

symbolList = symbolList.replace(/ย /g, ''); // space
symbolList = symbolList.replace(/\s/g, '');
symbolList = symbolList.replace(/\s+/g, '');
symbolList = symbolList.replace(/ /g, '');

symbolList = encodeURIComponent(symbolList);
symbolList = symbolList.replace(/%EF%B8%8F/g, '');
symbolList = decodeURIComponent(symbolList);




symbolList = [...symbolList];
symbolList = [...new Set(symbolList)]; // rm dublicate
console.log(symbolList); 
/*
// https://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
symbolList = symbolList.filter(function (el) {
return el != null && el != '';
});
console.log(symbolList); // %EF%B8%8F
*/

var symbolList2 = '';
var checkSymbol = '';
symbolList.forEach(function (x) {
counts[x] = (counts[x] || 0) + 1;
checkSymbol = x;
if(counts[x] >= 2||checkSymbol == ''){
//alert(x+' = '+counts[x]);
checkSymbol = '';
}else{
symbolList2 += checkSymbol;
}
});

 symbolList = [...symbolList2];
 var symbol = [...symbolList2];









symbol =  [...symbolList];



function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
//console.log(arr);
}

shuffleArray(symbol);

//  remove dublicate

//console.log(counts);
//console.log(symbol.length);










var maingeturl = window.location;
var mainurl = new URL(maingeturl);
var maintl = mainurl.searchParams.get("tl");

if(maintl != null){ localStorage.setItem("tl", maintl); }else{
if(localStorage.getItem("tl")){ maintl = localStorage.getItem("tl"); }
}
if(maintl == null){ maintl = '4'; }

if(maintl >= limitMaintl){ maintl = limitMaintl; } // limit Get


symbol = symbol.slice(0, maintl * maintl / 2);


symbol = symbol.join("");
symbol = symbol.repeat(2);
symbol = [...symbol]; 

shuffleArray(symbol);

arrTask = symbol;


//console.log(JSON.stringify(arrTask));

/*jsonArrTask = JSON.stringify(symbol);
console.log(jsonArrTask);
console.log(jsonArrTask[1]);
jsonArrTask = JSON.parse(jsonArrTask);
console.log(jsonArrTask[ jsonArrTask.length-1]['symbol']);
*/



print = '';
i = 2;
while (i < symbolList.length&&tl <= symbolList.length * 2) {
tl = i * i;
if(tl < symbolList.length * 2&&i <= limitMaintl){
//symetry
if(i * i / 2 % i == 0){
if(maintl == i){
print += '<span><a class="button light4 border2 op" style="padding: 0px 7px; " href="?tl='+i+'">'+i+'x'+i+'</a></span>';
}else{
print += '<span><a class="button light border2 op" style="padding: 0px 7px;" href="?tl='+i+'">'+i+'x'+i+'</a></span>';
}
}
//console.log(tl);
//arrSymbol.push({"row": i, "tl":tl}); 



} 
i++;
}

document.getElementById("tableLenght").innerHTML = print;



// input
var msCom = 'start';
var msStap = 1;

var arrInputHistory = [];


if(msCom == 'start') {

if(maintl * maintl / 2 % maintl == 0){
arrResultFinal = '*'.repeat(maintl * maintl);
}else{
arrResultFinal = '*'.repeat(maintl * maintl  - 1);
}

arrResultFinal = [...arrResultFinal];

drawResult(arrResultFinal, maintl, 'result');
drawResult(arrResultFinal, maintl, 'result2');
}







result = '';
//arrTask.forEach(main);






print = `<button  class="op light button border2 small">history</button>`;
document.getElementById('inputHistory').innerHTML = print;
result = '';



function drawResult(aaa, maintl, printPlace){
i2 = 1;
print = '';
aaa.forEach(myFunction11);
function myFunction11(item, index) {
if(item == '*') { item = '&nbsp;'; }
//console.log(item);
if(item == undefined){ print += ''; } else {
//print += '<button  id="'+index+'" class="light button border2  value="">'+index+item+'</button>';
print += `<button  id="`+index+`" class="light3 button border2" onclick="main('`+index+`')">`+item+`</button>`;
//document.getElementById(index).innerHTML =  item;
}

if(maintl <= 10){
if(i2 == maintl){ print += '<br />'; i2 = 0;   }
}

i2++;
}

if(printPlace == 'result2'){
i2 = 1;
print = '';
aaa.forEach(myFunction15);
function myFunction15(item, index) {
if(item == '*') { item = '&nbsp;'; }
if(item == undefined){ print += ''; } else {
//print += '<button class="light3 button border2">'+item+'</button>';
document.getElementById(index).innerHTML =  item;
}
if(maintl <= 10){
if(i2 == maintl){ print += '<br />'; i2 = 0;   }
}
i2++;
}
}

if(printPlace == 'inputHistory'){
print = '';
aaa.forEach(myFunction33);
function myFunction33(index, item) {
//if(item == undefined){ print += ''; } else {}

print += `<button  class="op light button border2">`+symbol[index]+`</button>`;
}
}

if(printPlace != 'result2'){
document.getElementById(printPlace).innerHTML = print;
}
print = '';
}


















let arrInputHistoryPrint = [];

function main(index) {

var checkSound = '';

arrInputHistory.push(index);
arrInputHistory = arrInputHistory.slice(-5);
arrInputHistoryPrint.push(index);

if(msStap == 3){ msStap = 1;}

item = arrTask[index];
msCom = '';

var currentInputIndex = arrInputHistory[arrInputHistory.length - 1];

var currentInputSymbol = symbol[currentInputIndex];
if(arrInputHistory.length >= 2){
var prevInputIndex = arrInputHistory[arrInputHistory.length - 2];
var prevInputSymbol = symbol[prevInputIndex];
}else{
var prevInputIndex = '';
var prevInputSymbol = '';
}



if(currentInputIndex == prevInputIndex){msCom = 'error';}
if(arrResultFinal[currentInputIndex] != '*'){ msCom = 'error'; }



if(msCom != 'error'){
arrLastTwo = arrLastTwo.slice(-2);
if(currentInputIndex == arrLastTwo[0]||currentInputIndex == arrLastTwo[1]){ 
if(msStap == 1){
msCom = 'error';
document.getElementById(arrLastTwo[0]).innerHTML =  arrTask[arrLastTwo[0]];
document.getElementById(arrLastTwo[1]).innerHTML =  arrTask[arrLastTwo[1]];
}
}else{
drawResult(arrResultFinal, maintl, 'result2');
arrLastTwo.push(currentInputIndex);
}

}


if(msCom == 'error'){
msStap--;
// if error
arrInputHistory.pop();
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/error.ogg">';
checkSound = 'exit';
}


if(msCom != 'error'){
document.getElementById(currentInputIndex).innerHTML =  currentInputSymbol;

if(msStap == 2){

if(item == currentInputSymbol&&item == prevInputSymbol){
// small win
arrResultFinal[index] = item;
arrResultFinal[prevInputIndex] = item;
drawResult(arrResultFinal, maintl, 'result2');
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/ok.ogg">';
checkSound = 'exit';
}else{

drawResult(arrResultFinal, maintl, 'result2');


document.getElementById(currentInputIndex).innerHTML =  currentInputSymbol;
document.getElementById(prevInputIndex).innerHTML =  prevInputSymbol;

}


}





}





if(JSON.stringify(arrResultFinal) === JSON.stringify(arrTask)){
document.getElementById("win").innerHTML = '<span class="orange">Win</span>';
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/win.ogg">';
checkSound = 'exit';
}




drawResult(arrInputHistoryPrint.slice(-5), maintl, 'inputHistory'); // enable disable input history


com = '';

//console.log(msStap);
msStap++;
msCom = '';

/*
// click sound
if(checkSound == ''){
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/click.ogg">';
}
*/

}




fuWorker('on');










