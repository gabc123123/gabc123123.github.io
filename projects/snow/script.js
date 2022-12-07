// v.1.0.0




let n = 0;
var div = "";
while (n <= 500) {
	div +=
		`<div class="snowflake" style="position: absolute; top:` +
		Math.floor(Math.random() * 100) +
		`%; left:` +
		Math.floor(Math.random() * 100) +
		`%">❄️</div>`;
	n++;

}



document.getElementById("snowPrint").innerHTML = div;



