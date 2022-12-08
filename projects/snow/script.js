// v.2.0.0




let n = 0;
var print = "";
let min = 20;
let max = 60;
var snowflake = Math.floor(Math.random() * (max - min + 1) + min);

while (n <= snowflake) {
	print +=
		`<div class="snowflake" style="position: absolute; top:` +
		Math.floor(Math.random() * 100) +
		`%; left:` +
		Math.floor(Math.random() * 100) +
		`%">❄️</div>`;
	n++;

}

print = `

<div class="group">
<div class="item">`+print+`</div>
<div class="item2">`+print+`</div>
</div>

`;


document.getElementById("snowPrint").innerHTML = print;



