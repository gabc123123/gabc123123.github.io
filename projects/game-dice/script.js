// v.1.2.1






var dice = {
"1":"⚀",
"2":"⚁",
"3":"⚂",
"4":"⚃",
"5":"⚄",
"6":"⚅"
};

var pointsPlayer = '0';
var pointsPc = '0';


const diceKeyArr = Object.keys(dice);
const diceValArr = Object.values(dice);

function randomDice(){
let random = Math.floor(Math.random() * (diceKeyArr.length));
return random;
}

var colorPlayerWin = '';
var colorPcWin = '';


document.getElementById("panel").innerHTML = `
<button class="gDbtn light border2"  id="myBtn">roll</button>
<button class="gDbtn light border2 op" onclick="fuReload()">reload</button>
`;
document.getElementById("myBtn").addEventListener("click", displayResult); 

displayResult()

function displayResult(){
var rand = randomDice();
var rand2 = randomDice();
var player = diceValArr[rand];
var pc = diceValArr[rand2];
var player2 = diceKeyArr[rand];
var pc2 = diceKeyArr[rand2];

var win = '';
if(player2 > pc2){
win = '<span class="orange"><b>Player Win</b></span>';
win += '<audio style="display:none" autoplay="false" src="/audio/ok.ogg">';
colorPlayerWin = 'green';
colorPcWin = '';
pointsPlayer++;
}
if(player2 < pc2){
win = '<span class="red"><b>PC Win</b></span>';
win += '<audio style="display:none" autoplay="false" src="/audio/error.ogg">';
colorPlayerWin = '';
colorPcWin = 'green';
pointsPc++;
}
if(player2 == pc2){
win = '<span class=""><b>Tie</b></span>';
win += '<audio style="display:none" autoplay="false" src="/audio/neutral.ogg">';
colorPlayerWin = 'green';
colorPcWin = 'green';
}

document.getElementById("result").innerHTML = `
<div class="gDice">

<div class="gDicePlayer">
<div class="gDname2 `+colorPlayerWin+`">`+player+`</div><br>
<div class="gDname op">player</div>
<div class="gDname op">`+pointsPlayer+`</div>
</div>

<div class="gDicePlayer">
<div class="gDname2 `+colorPcWin+`">`+pc+`</div><br>
<div class="gDname op">pc</div>
<div class="gDname op">`+pointsPc+`</div>
</div>

</div>
`;
document.getElementById("result2").innerHTML = '<span>'+win+'</span>';
}
 


fuWorker('on');

