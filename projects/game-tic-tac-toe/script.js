// v.1.2.8



function tttGame(){

document.getElementById('win').innerHTML = '';

var playArr = [
"", "", "",
"", "", "",
"", "", ""
];

/*var playArr = [
"0", "1", "2",
"3", "4", "5",
"6", "7", "8"
];*/


const tttPlayerName = 'Player';
const tttPlayerSymbol = 'x';
const tttPlayer2Name = 'PC';
const tttPlayer2Symbol = '0';
var check = '';

var print = '';

// pc first
if(Math.floor(Math.random() * 2) == 1){
var pcFirstIndex = Math.floor(Math.random() * 9);
playArr[pcFirstIndex] = "0";
}



function drawResult(arr){
arr.forEach((element, index) => {
//document.getElementById(index).innerHTML = ''+index+' '+element+'';
document.getElementById(index).innerHTML = "&nbsp;"+element+"&nbsp;";
})
}

//drawResult(startArr);






// draw
playArr.forEach(main);


function main(element, index) {

if(index % 3 == 0){ print += '<div class="width: 100%"></div>'; }
print += '<button  id="'+index+'" class="light3 button buttonTtt border2">&nbsp;'+element+'&nbsp;</button>';
document.getElementById('result').innerHTML = print;
}
print = '';


// getClick
playArr.forEach(main2);
function main2(element, index) {
document.getElementById(index).addEventListener("click", fuCheckClick);
}






// clickAction
function fuCheckClick(event) {

var clickedId = event.target.id;
var win = '';
var error = false;
var pcSmartLevel = 30;

pcSmartLevel = Math.floor(Math.random() * pcSmartLevel);
//pcSmartLevel = 0;


winCheck(playArr, tttPlayerSymbol);
winCheck(playArr, tttPlayer2Symbol, check);

if(check == ''){





if(playArr[clickedId] != ''){
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/error.ogg" id="bgAudio">';
error = true;
}







if(check == ''){

if(playArr[clickedId] == ''){
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/click.ogg" id="bgAudio">';
playArr[clickedId] = tttPlayerSymbol;
winCheck(playArr, tttPlayerSymbol);
}


// pc
if(check == ''&&error == false){

//var playArr2 = playArr.concat(playArr2);
var playArr2 = [];



// if future pc win
if(check == ''&&pcSmartLevel != 0){
playArr2 = [];
playArr2.push(...playArr);

playArr2.forEach((element, index) => {
if(check == ''&&playArr[index] == ''){
playArr2[index] = tttPlayer2Symbol;
if(winCheck(playArr2, tttPlayer2Symbol) != ''){ playArr[index] = tttPlayer2Symbol; check = 'ok'; }
playArr2[index] = '';
}
})
}

// if future player win
if(check == ''&&pcSmartLevel != 0){
playArr2 = [];
playArr2.push(...playArr);
playArr.forEach((element, index) => {
if(check == ''&&playArr[index] == ''){
playArr2[index] = tttPlayerSymbol;
if(winCheck(playArr2, tttPlayerSymbol) != ''){ playArr[index] = tttPlayer2Symbol; check = 'ok'; }
playArr2[index] = '';
}
})
}

if(check == ''){
var randomPcArrIndex = [];
playArr.forEach((element, index) => {
if(playArr[index] == ''){
randomPcArrIndex.push(index)
}
})

var rndIndex = shuffle(randomPcArrIndex);
console.log(rndIndex[0]);
playArr[rndIndex[0]] = tttPlayer2Symbol;
check = 'ok';
console.log('random empty'+rndIndex[0]);
}
randomPcArrIndex = [];

winCheck(playArr, tttPlayer2Symbol);


}

}


}









// win
function winCheck(playArr, symbol, checkIfEmpty){
console.log(checkIfEmpty);

if(checkIfEmpty == ''||checkIfEmpty == undefined){

let winCheck2 = '';

if(playArr[0] == symbol&&playArr[1] == symbol&&playArr[2] == symbol){
winCheck2 = 'win';
}
if(playArr[3] == symbol&&playArr[4] == symbol&&playArr[5] == symbol){
winCheck2 = 'win';
}
if(playArr[6] == symbol&&playArr[7] == symbol&&playArr[8] == symbol){
winCheck2 = 'win';
}
if(playArr[0] == symbol&&playArr[4] == symbol&&playArr[8] == symbol){
winCheck2 = 'win';
}
if(playArr[6] == symbol&&playArr[4] == symbol&&playArr[2] == symbol){
winCheck2 = 'win';
}
if(playArr[0] == symbol&&playArr[3] == symbol&&playArr[6] == symbol){
winCheck2 = 'win';
}
if(playArr[1] == symbol&&playArr[4] == symbol&&playArr[7] == symbol){
winCheck2 = 'win';
}
if(playArr[2] == symbol&&playArr[5] == symbol&&playArr[8] == symbol){
winCheck2 = 'win';
}


if(winCheck2 == ''){
var tie = 'yes';
playArr.forEach((element, index) => {
if(playArr[index] == ''){
tie = 'no';
}
})

}
if(tie == 'yes'){ winCheck2 = 'tie' }


check = '';
if(winCheck2 == 'win'||winCheck2 == 'tie'){ check = 'ok'; } 

return winCheck2;
}
}












if(winCheck(playArr, tttPlayerSymbol) == 'win'){
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/win.ogg" id="bgAudio">';
document.getElementById('win').innerHTML = '<span class="orange">'+tttPlayerName+' Win</span>';
}

if(winCheck(playArr, tttPlayer2Symbol) == 'win'){
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/game-over.ogg" id="bgAudio">';
document.getElementById('win').innerHTML = '<span class="red">Game Over</span>';
}


if(winCheck(playArr, tttPlayerSymbol) == 'tie'&&check != 'ok'||winCheck(playArr, tttPlayer2Symbol) == 'tie'){
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/ok.ogg" id="bgAudio">';
document.getElementById('win').innerHTML = '<span class="">Tie</span>';
}








check = '';
error = '';

drawResult(playArr);

}




function shuffle(array) {
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

}


tttGame();

document.getElementById('tttStartButton').onclick = function() {
tttGame();
}


