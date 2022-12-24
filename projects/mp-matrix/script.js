// v.2.0.0
// only for many random div with different position


var n = 0;
var print = "";
let min = 40;
let max = 90;

var min2 = 5;
var max2 = 15;

var snowflake = Math.floor(Math.random() * (max - min + 1) + min); 


//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

function shuffle(array) { //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

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

var string = `012345678901234567890123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzあいうえおかきくけこさしすせ たちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑを`;

function rnd() { return Math.floor(Math.random() * 100); }

function rndSymbolString(string){
let n = Math.floor(Math.random() * (max2 - min2 + 1) + min2);
string = string.split('');
string = shuffle(string);
string = string.join('');
string = string.substr(0, n);

return string;
}


while (n <= snowflake) {
let randPos = rnd();
let randPos2 = rnd();
	print +=
		`<div class="snowflake" style="position: absolute; top:` +
		randPos +
		`%; left:` +
		randPos2 +
		`%;">`+rndSymbolString(string)+`</div>`;
n++;

}

print = `

<div class="group">
<div class="item">`+print+`</div>
<div class="item2">`+print+`</div>
</div>

`;


document.getElementById("snowPrint").innerHTML = print;



