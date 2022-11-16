// v.1.2.0





var playArr = [
"", "", "",
"", "", "",
"", "", ""
];

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

if(index % 3 == 0){ document.getElementById('result').innerHTML += '<div class="width: 100%"></div>'; }
document.getElementById('result').innerHTML += '<button  id="'+index+'" class="light3 button border2">&nbsp;'+element+'&nbsp;</button>';

}



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
var makePcWrong = Math.floor(Math.random() * 2);




if(playArr[clickedId] != ''){
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/error.mp3" id="bgAudio">';
error = true;
}





if(winCheck(playArr) == ''){



winCheck(playArr);
if(playArr[clickedId] == ''){
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/click.mp3" id="bgAudio">';
playArr[clickedId] = 'x';
winCheck(playArr);
}


// pc
if(winCheck(playArr) == ''&&error == false){

var check = '';

//var playArr2 = playArr.concat(playArr2);
var playArr2 = [];
playArr2.push(...playArr);

if(check != 'ok'&&makePcWrong == 0){
playArr2.forEach((element, index) => {
if(check != 'ok'&&playArr[index] == ''){
playArr2[index] = '0';
if(winCheck(playArr2) == 'PC Win!!!'){ playArr[index] = '0'; check = 'ok'; }
playArr2[index] = '';
}
})
}

if(check != 'ok'&&makePcWrong == 0){
playArr.forEach((element, index) => {
if(check != 'ok'&&playArr[index] == ''){
playArr2[index] = 'x';
if(winCheck(playArr2) == 'Player Win!!!'){
playArr[index] = '0';
check = 'ok';
}
playArr2[index] = '';
}
})
}

/*if(check != 'ok'){
var randomPcArrIndex = [];
playArr.forEach((element, index) => {
if(check != 'ok'){
if(playArr[index] == ''){
randomPcArrIndex.push(index)
}

shuffle(randomPcArrIndex);
randomPcArrIndex = randomPcArrIndex[0];
playArr[index] = '0';
check = 'ok';
}
})
}*/



if(check != 'ok'){
var randomPcArrIndex = [];
playArr.forEach((element, index) => {
if(playArr[index] == ''){
randomPcArrIndex.push(index)
}
})

var rndIndex = shuffle(randomPcArrIndex);
playArr[rndIndex[0]] = '0';
check = 'ok';
}

/*
if(check != 'ok'){
playArr.forEach((element, index) => {
if(check != 'ok'){
if(playArr[index] == ''){
playArr[index] = '0';
check = 'ok';
}
}
})
}*/

check = '';




}

}











// win
function winCheck(playArr){
let winCheck2 = '';

if(playArr[0] == 'x'&& playArr[1] == 'x' &&playArr[2] == 'x'){
winCheck2 = 'Player Win!!!';
}
if(playArr[3] == 'x'&& playArr[4] == 'x' &&playArr[5] == 'x'){
winCheck2 = 'Player Win!!!';
}
if(playArr[6] == 'x'&& playArr[7] == 'x' &&playArr[8] == 'x'){
winCheck2 = 'Player Win!!!';
}
if(playArr[0] == 'x'&& playArr[4] == 'x' &&playArr[8] == 'x'){
winCheck2 = 'Player Win!!!';
}
if(playArr[6] == 'x'&& playArr[4] == 'x' &&playArr[2] == 'x'){
winCheck2 = 'Player Win!!!';
}
if(playArr[0] == 'x'&& playArr[3] == 'x' &&playArr[6] == 'x'){
winCheck2 = 'Player Win!!!';
}
if(playArr[1] == 'x'&& playArr[4] == 'x' &&playArr[7] == 'x'){
winCheck2 = 'Player Win!!!';
}
if(playArr[2] == 'x'&& playArr[5] == 'x' &&playArr[8] == 'x'){
winCheck2 = 'Player Win!!!';
}





if(playArr[0] == '0'&& playArr[1] == '0' &&playArr[2] == '0'){
winCheck2 = 'PC Win!!!';
}
if(playArr[3] == '0'&& playArr[4] == '0' &&playArr[5] == '0'){
winCheck2 = 'PC Win!!!';
}
if(playArr[6] == '0'&& playArr[7] == '0' &&playArr[8] == '0'){
winCheck2 = 'PC Win!!!';
}
if(playArr[0] == '0'&& playArr[4] == '0' &&playArr[8] == '0'){
winCheck2 = 'PC Win!!!';
}
if(playArr[6] == '0'&& playArr[4] == '0' &&playArr[2] == '0'){
winCheck2 = 'PC Win!!!';
}
if(playArr[0] == '0'&& playArr[3] == '0' &&playArr[6] == '0'){
winCheck2 = 'PC Win!!!';
}
if(playArr[1] == '0'&& playArr[4] == '0' &&playArr[7] == '0'){
winCheck2 = 'PC Win!!!';
}
if(playArr[2] == '0'&& playArr[5] == '0' &&playArr[8] == '0'){
winCheck2 = 'PC Win!!!';
}



if(winCheck2 == ''){
var tie = 'yes';
playArr.forEach((element, index) => {
if(playArr[index] == ''){
tie = 'no'
}
})
if(tie == 'yes'){ winCheck2 = 'Tie!!!' }
tie = 'yes';
}

if(winCheck2 == 'PC Win!!!'||winCheck2 == 'Player Win!!!'||winCheck2 == 'Tie!!!'){ check = 'ok'; }




return winCheck2;
}







if(winCheck(playArr) == 'Player Win!!!'){
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/win.mp3" id="bgAudio">';
document.getElementById('win').innerHTML = '<span class="orange">Win!!!</span>';
}

if(winCheck(playArr) == 'PC Win!!!'){
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/game-over.mp3" id="bgAudio">';
document.getElementById('win').innerHTML = '<span class="red">Game Over!!!</span>';
}

if(winCheck(playArr) == 'Tie!!!'){
document.getElementById("alert").innerHTML = '<audio style="display:none" autoplay="false" src="/audio/ok.mp3" id="bgAudio">';
document.getElementById('win').innerHTML = '<span class="yellow">Tie!!!</span>';
}



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

