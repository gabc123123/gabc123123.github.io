// v.3.7.9





function mainAll(mode33){

document.getElementById('text').value = '';
var task = '';
var  geturl = window.location;
var url = new URL(geturl);

var mode = url.searchParams.get("mode");

if(mode33 != ''){ mode = mode33; }

var lastEror = '';

if(mode != null){ localStorage.setItem("mode", mode); }else{
if(localStorage.getItem("mode")){ mode = localStorage.getItem("mode"); }
}
if(mode == null){ mode = 'quote'; }


document.getElementById("refresh").innerHTML = `<a href="#" onclick="modeGet('`+mode+`');">refresh</a>`;








var modeList = Array("abc", "quote", "input", "free");
var modeListPrint = '';
modeList.forEach(FunctionModeList);
function FunctionModeList(item, index) {
if(mode == item){
modeListPrint += `<a class="tag light border2" style="color: var(--c3);">`+item+`</a>`+`
`;
}else{
modeListPrint += `<a class="tag op light border2" href="#" onclick="modeGet('`+item+`');">`+item+`</a>`;
}
}
document.getElementById("mode").innerHTML = modeListPrint;



/*window.onload = function() {
    if(!window.location.hash) {
		if(mode == null){
        window.location = window.location + '#loaded';
        window.location.reload();

	}
    }
}*/


if(mode == 'quote'){

var quote;



quote = quoteJson;

if(quote != null){
const random = Math.floor(Math.random() * quote.length);
//console.log(quote[random]['text']);
task = quote[random]['text'];

}

main(task);
}




if(mode == 'abc'){
task = "           abcdefghijklmnopqrstuvwxyz";
main(task);
}

if(mode == 'input'){
document.getElementsByClassName("input")[0].innerHTML = '<div class="wrapper"><form actiion="index.html"><textarea rows="2" name="q" placeholder=" input text for task"></textarea><input type="submit"></form></div><br /><br />';
}


if(mode == 'input'){
var input = url.searchParams.get("q");

document.getElementById("bookmarklet").style.display = "inline-block";

if(input != null){ input = input.replace(/%/g, "%25"); localStorage.setItem("input", input); task = input; }else{
if(localStorage.getItem("input")){ task = localStorage.getItem("input"); }
}


let taskgo1 = encodeURIComponent(task);
//let taskgo2 = decodeURIComponent(task);
document.getElementById("mode2").innerHTML = ' <a href="../../?q='+taskgo1+' tg">tg</a>';


main(task);
}














if(mode == 'free'){
document.getElementById('text').rows = '7';
main(task);
}





//setTimeout(function () {
function main(task){

//task = task.replace(/%/g, "%25");



task = decodeURIComponent(task);

var letters = [...task]; 




if(mode == 'abc'){

letters = letters.join("");
letters = letters.repeat(5);
letters = [...letters]; 

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
//console.log(arr);
}

shuffleArray(letters);

}



let text = '';


text = letters.join("");

//console.log(letters);
var a = {
"`":"'", "·":"*", "•":"*", "›":">",
"’":"'", "—":"-", "«":'"', "»":'"',
'“':'"', '”':'"', "…":"...",
"–":"-", "‘":'"'
};


function transliterate(word){
word = [...word];
return word.map(function (char) {
return a[char] || char; 
}).join("");
}

if(mode == 'abc'){ text = text.replace(/\s{2,}/g, ' '); /* rm 2 space */ }

letters = encodeURIComponent(text);

letters = letters.replace(/\r\n/g, "\n");
letters = letters.replace(/%0A/g, "\n");
letters = letters.replace(/  /g, " ");

letters = letters.replace(/%E2%80%8C/g, ""); //ZERO WIDTH SPACE
letters = letters.replace(/%0D%0A/g, "\n");
letters = letters.replace(/%0A/g, "\n");
letters = letters.replace(/%0D/g, "\n");
letters = letters.replace(/%C2%A0/g, " ");





letters = decodeURIComponent(letters);
letters = transliterate(letters);

letters = letters.replace(/\r\n/g, "\n");
letters = letters.replace(/%0A/g, "\n");
letters = letters.replace(/  /g, " ");

letters = letters.replace(/%E2%80%8C/g, ""); //ZERO WIDTH SPACE
letters = letters.replace(/%0D%0A/g, "\n");
letters = letters.replace(/%0A/g, "\n");
letters = letters.replace(/%0D/g, "\n");
letters = letters.replace(/%C2%A0/g, " ");

//letters = letters.replace(/\s{2,}/g, ' ');

//console.log([...letters]);




//letters = letters.replace(/[\r\n]/gm, " ");
/*letters = letters.replace(/\s\s+/g, ' ');
letters = letters.replace(/  /g, " ");
letters = letters.replace(/\s{2,}/g, ' ');
letters = letters.replace(/  /g, " ");*/

letters = letters.trim(); 
letters = [...letters]; 
task = letters; // modifed

//console.log(letters);


var text2 = '';
letters.forEach(myFunction2);
function myFunction2(item, index) {
text2 += item; 
}


function replaceCode(a){
a = a.replace(/</g, "&lt;");
a = a.replace(/>/g, "&gt;");
return a;
}

/*letters = replaceCode(letters.join(""));
letters =  [...letters];*/

document.getElementById("result").innerHTML = replaceCode(text2);












var key = '';
var key2 = ''; 

inputGetKey = document.getElementById('text');
inputGetKey.onkeydown = function(e) {
key = e.keyCode || e.charCode;
key2 = e.key; 
}


document.getElementsByName("input2")[0].addEventListener('input', inputCheck);
var dateArr = [];
var secArr= [];
var totalError = 0;


var lastMaxInputlength = 0;


function inputCheck(e){
document.getElementsByClassName("input")[0].innerHTML = '';

var error = 0;

var acurancy = 100;
var errorColor = '';
var id = 'id0';
var text11 = '';
var text33 = '';
var lastError = '';
const errorLimit = 500 - 1;

var wpmRecord = localStorage.getItem("wpmRecord");
if(wpmRecord == null||wpmRecord < 0||wpmRecord == undefined){ wpmRecord =  0; }


// input value
var q = e.target.value;

//var answerArr = q.split ("");
var answerArr = [...q]; // convert input string to array for check
//console.log(answerArr);

// check
var text = '';

// print task 2 ant result if have input (


/*
// scroll with interval test
var scrollToVar = '';
if(answerArr.length % 140 == 0){
scrollToVar = '<span id="scrollTo"></span>'; 
}else if(confDevice == 'mobile'){
scrollToVar = '<span id="scrollTo"></span>';
}
text = '<span class="green">'+text11+'</span>'+scrollToVar+text33;
document.getElementById("result").innerHTML = text;
if(scrollToVar !=  ''){ document.getElementById("scrollTo").scrollIntoView(true); }
*/





letters.forEach(myFunctionCheckAll);
function myFunctionCheckAll(item, index) {


//console.log(answerArr[index]+'=['+item+']');


if( answerArr.length >= lastMaxInputlength){ 	lastMaxInputlength = answerArr.length; }






//text += item; 
//console.log(item);
//console.log(answerArr[index]);
var check = 'no';
if(item == answerArr[index]&&error <= errorLimit){
check = 'yes';
//id = 'id'+index;
lastEror = 'green';

item = replaceCode(item);
text11 += item;
/*if(item == ' '){
text11 += item;
}else{
text11 += item;
}*/


}else if(item != answerArr[index]&&answerArr[index] != undefined&&error <= errorLimit){
check = 'yes';
lastEror = 'red';
item = replaceCode(item);



switch(item) {
case '\n':
case '\r':
text11 += `<span class="red">⏎\n</span>`;
break;
case ' ':
text11 += '<span class="redBg">'+item+'</span>';
break;
default:
text11 += '<span class="red">'+item+'</span>';
}


//console.log(answerArr.length-1);
//console.log(index);
//console.log(answerArr.length - 1+'='+index);

/*if(answerArr.length  <= letters.length){
inputGetKey.onkeydown = function(e) {

if(answerArr.length - 1 == index){
var key = e.keyCode || e.charCode;
var key2 = e.key; 
if(key != '229'&&key != 8&&key != 46&&key2 != 'Backspace'&&key2 != 'Delete' ){
totalError++;
}
// mobile 
if(key == '229'&&lastMaxInputlength == answerArr.length&&letters[lastMaxInputlength - 1] != answerArr[lastMaxInputlength - 1]){ totalError++; }

}
}}*/
	
	
/*if(answerArr.length  <= letters.length){
totalError++;
}*/
error++;

}

if(check == 'no'){
text33 += item; 
}

check = '';

}

text = '<span class="green">'+text11+'</span><span id="scrollTo"></span>'+replaceCode(text33);
document.getElementById("result").innerHTML = text;
document.getElementById("scrollTo").scrollIntoView(true);




/* stat */


if(letters.length >= answerArr.length&&mode != 'free'||mode == 'free'){
dateArr.push(Date.now());

//dateArr = dateArr.slice(-400);
var sec = 0;
if(dateArr[dateArr.length-2] != undefined){
const millis = dateArr[dateArr.length-1]-dateArr[dateArr.length-2];
//sec = Math.floor(millis/1000);
sec = ((millis % 60000) / 1000);
secArr.push(sec);
}


}
//secArr = secArr.slice(-400);
//console.log(secArr);

var timeAverage = 0;
secArr.forEach(myFunction2);
function myFunction2(item, index) {
timeAverage = timeAverage + item; //console.log(item);
}

timeAverage = timeAverage/secArr.length;


var wps = timeAverage*5;
var wpm = 1*60/wps;
wpm = wpm.toFixed(0);



if(isNaN(wpm)){ wpm = 0; }

if(error >= 1) { errorColor = 'red'; }else{ errorColor = 'green'; }

if(lastEror == 'red'){

// totalError
if(key != '229'&&key != 8&&key != 46&&key2 != 'Backspace'&&key2 != 'Delete' ){ totalError++; }
if(key == '229'){ 
if(lastMaxInputlength == answerArr.length){ totalError++; } // only last new error on mobile
}



lastEror = 'none';
document.getElementById("text").style.borderTop = "9px solid var(--red)";
if(error <= 60){
//document.getElementById("sound").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/error.mp3">'; 
}

}else{
document.getElementById("text").style.borderTop = "9px solid var(--d2)";
}









if(answerArr.length <= letters.length){
acurancy = totalError * 100 / answerArr.length;
acurancy =  100 - acurancy.toFixed(0);
}else{ acurancy = '0 '; }

//document.getElementById("stat").innerHTML = sec+' | '+timeAverage.toFixed(2)+' sec. || '+error+' <span class="'+errorColor+'">error</span>';
document.getElementById("stat").innerHTML = 
'<span>wpm:</span> <!--'+wpmRecord+'/ --><span>' +wpm+'</span> || <span title="Total Error">error: ≈'
+totalError+'</span>/<span  class="'+errorColor+'">'+error+'</span> || acurancy: ≈'+acurancy+'%'
;

/*scrollTo();
function scrollTo(){
document.getElementById("scrollTo").scrollIntoView(true);
}*/










if(letters.length == answerArr.length && error <= 0&&mode != 'free'&&task.length >= 3){



var recordMsg = " ";



/*if(wpm < wpmRecord){
recordMsg = wpm/wpmRecord*100;
recordMsg = 100-speedUp;
recordMsg = speedUp.toFixed(0);
recordMsg = ' (<span class="green"> '+recordMsg+'%+ for record</span>)';
}*/




if(wpm == wpmRecord){
recordMsg = ' <span class="yellow"> Old Record!!!</span>';
}

if(wpm > wpmRecord){
recordMsg = ' <span class="red"> New Record!!!</span>';
localStorage.setItem("wpmRecord", wpm);
}

var wpmProgress = " ";
var prevWpm = localStorage.getItem("prevWpm");
localStorage.setItem("prevWpm", wpm);

if(prevWpm == null ||prevWpm == Infinity){ prevWpm =  0; }
wpmProgress = wpm - prevWpm;
if(wpmProgress < 0){
wpmProgress = ' (<span class="red">'+wpmProgress+'</span>)';
}else{
wpmProgress = ' (<span class="green">+'+wpmProgress+'</span>)';
}


var acurancyProgress = "0";
var prevAcurancy = localStorage.getItem("prevAcurancy");
localStorage.setItem("prevAcurancy", acurancy);

if(prevAcurancy == null ||prevAcurancy == Infinity||prevAcurancy == NaN){ prevAcurancy =  0; }
acurancyProgress = acurancy - prevAcurancy;
if(acurancyProgress < 0){
acurancyProgress = ' (<span class="red">'+acurancyProgress+'</span>)';
}else{
acurancyProgress = ' (<span class="green">+'+acurancyProgress+'</span>)';
}


let winMsg = '<div class="button light border2" style="text-align: center; width: 100%;"><div><h1 class="orange" >Win!!! </h1><span  title="word per minute" style="color: var(--c3);">WPM: <span class="">'+wpm+'</span>'+recordMsg+'</span> '+wpmProgress+' <span>acurancy: ≈<span class="">'+acurancy+'</span>%</span> '+acurancyProgress+'</div></div>';

document.getElementsByClassName("win")[0].innerHTML = winMsg;
document.getElementsByClassName("win")[1].innerHTML = winMsg;
document.getElementById("sound").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/ok.mp3">';
}else {
document.getElementsByClassName("win")[0].innerHTML = '';
document.getElementsByClassName("win")[1].innerHTML = '';
}



document.getElementById('countSymbolTask').innerHTML = 'task: '+task.length+' input: '+answerArr.length+'';

}




}


}





function modeGet(mode){
mainAll(mode);
}

mainAll('');
