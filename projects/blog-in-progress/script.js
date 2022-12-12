// v.1.0.0



function blog(printId, json, mode){


var id = '';
var post = '';
var tag = '';
var time = '';


var print = '';



json.forEach((item) => {

id = item['id'];
post = item['text']+' '+item['url'];
tag = item['tag'];
time = item['time'];

print += fuPrintPost(id, post, tag, time, mode);









});


document.getElementById(printId).innerHTML = print;


function fuPrintPost(id, post, tag, time, mode){

post = l(post);
tag = l(tag);
//time = new Date(time).getTime();
time = `<a class="tag border2 light" href="blog.html#${id}">&nbsp;`+fuPostTime(time)+`&nbsp;</a>`;




return `

<!-- post -->
<div class="`+mode+` bgList brand border3List" id="`+id+`">
<span class="pre">`+post+`</span>
<div class="postFooter">
<span class="postTagList">`+tag+`</span>
<span class="postTime">`+time+`</span>
</div>
</div>
<!-- // post -->

`;
}


function l(text){
text = decodeURIComponent(text);
let text2 = '';
let embed = '';
let symbolForSplit = 'ccbbaa';

let w = '100%';
let h = '190px'; 

text = [...text];
let forSplit = [`
`, " ", ","];
text.forEach((item) => {
forSplit.forEach((item2) => { // foreach
if(item == item2){
console.log(item2);
item = symbolForSplit+item+symbolForSplit;
}
});
text2 += item;
});

//return text = text.toString();
//return text = text.join("");

//return text = text2;
//text = [...text];

text = '';
const myArray = text2.split(symbolForSplit);
myArray.forEach((item) => {

//text += item.hostname;
//if(item.search("http") != -1){ 
if(item[0]+item[1]+item[2]+item[3] == 'http'){ 
var host = new URL(item).hostname;
}

switch (host) {

case "youtu.be":
case "m.youtube.com":
case "www.youtube.com":
case "music.youtube.com":

var play = item.split('v=').pop();

if(play != ''){
embed = `<!--<iframe id="player" style="border:0;" height="${h}" width="${w}" src="https://www.youtube.com/embed/${play}"></iframe>--><iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/${play}" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
break;

case "twitter.com":
case "mobile.twitter.com":
embed = `<style>.twitter-tweet { margin-top: 0px !important; }</style><div style="display: block; width: 100%; max-width: 550px; margin: 0 auto;"><blockquote class="twitter-tweet" data-lang="${lang}" data-theme="${confThemeEmbed}"><a href="${item}"></a></blockquote></div><!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->`;

break;

}

/*
if(item.search("jpg|jpeg|png|gif|img|ico") != -1){ 
embed = `<a href="${item}"><img class="border3" src="${item}" width=""></a>`
}*/



//if(item.search("http") != -1){ 
if(item[0]+item[1]+item[2]+item[3] == 'http'){ 
var ico = `https://www.google.com/s2/favicons?domain_url=${host}`;
//let ico = `https://api.statvoo.com/favicon/?url=${host}`;
//let ico = `https://api.faviconkit.com/${host}/16`;
item = `<a target="_blank" href="${item}"><img class="ico op" src="${ico}" width="14px" alt="ico"> ${item}</a>`;
}





//add tag
if(item[0] == '#'){
item = item.replace(/#/g, "");
item = `<a class="tag light border2" href="./?q=%23${item}">#${item}</a> <a style="" rel="nofollow" class="tag light border2" target="blank" href="/?q=${item} tag">#${item} <span class="sup">⇗</span></a>`;
}







text += item;
});


return text+embed;
}








// Time  post date
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

function fuPostTime(p){
const  date_future = Date.now();
const  date_now = new Date(p * 1000);


// get total seconds between the times
var delta = Math.abs(date_future - date_now) / 1000;

var year = Math.floor(delta / 31557600);
delta -= year * 31557600;

var month = Math.floor(delta / 2629800);
delta -= month * 2629800;

// calculate (and subtract) whole days
var days = Math.floor(delta / 86400);
delta -= days * 86400;

// calculate (and subtract) whole hours
var hours = Math.floor(delta / 3600) % 24;
delta -= hours * 3600;

// calculate (and subtract) whole minutes
var minutes = Math.floor(delta / 60) % 60;
delta -= minutes * 60;

// what's left is seconds
var seconds = delta % 60;  // in theory the modulus is not required

if(year > 0){
time = year+' year ';
} else if(month > 0){
time = month+' month ';
} else if (days > 0){
time = days+' day ';
} else if(hours > 0){
time = hours+' h ';
} else if (minutes > 0) { time = minutes+' m '; }
else { time = checkTime(Math.floor(seconds))+' s '; }

return time;
//document.getElementById("time").innerHTML = '&nbsp;'+time+'&nbsp;';
}


fuPostTime();
var tmp = setInterval(fuPostTime, 1000);

}
