// v.1.0.4



// main function 

function blog(printId, json, mode, embedStatus, tagListStatus, limit, scriptDir){

if(scriptDir == undefined||scriptDir == ''){ scriptDir = './'; }
if(limit == undefined||limit == ''){ limit = '1'; }
if(mode == undefined||mode == ''){ mode = 'post'; }

var url = new URL(window.location);

var q = url.searchParams.get("q");
if(q != null){
q = q.replace(/%/g, "%25");
q = decodeURIComponent(q);
}

var id = url.searchParams.get("id");
if(id != null){
id = id.replace(/%/g, "%25");
id = decodeURIComponent(id);
}

var symbolForSplit = 'ccbbaa';
var postId = '';
var postText = '';
var postTag = '';
var postTime = '';


var print = '';
var printTagList = '';
var getTag = '';



function main(q, id){
let searchLimit = 1000;
let com = '';

if(q != null){
com = 'search';
embedStatus = 'off';
limit = searchLimit;
}
if(id != null){
com = 'id';
limit = 1;
}


print += `<h3 class="tCenter">${com}</h3>`;

let i = 0;
json.forEach((item) => {


postId = item['id'];
postText = item['text']+' '+item['url'];
postTag = item['tag'];
postTime = item['time'];



switch (com){

case 'search':
if(i <= limit -1){
q = q.replace(/ /g, "|");
if((postText+' '+postTag).search(q) != -1){
print += fuPrintPost(postId, postText, postTag, postTime);
i++;
}
}
break;

case 'id':
if(i <= limit -1){
if(postId == id){
print += fuPrintPost(postId, postText, postTag, postTime);
i++;
}
}
break;

default:
if(i <= limit -1){
print += fuPrintPost(postId, postText, postTag, postTime);
i++;
}
}

// collect all tag
printTagList += postTag+symbolForSplit;

});


// tagList gen
if(tagListStatus != 'off'){
print += `<div class="wrapper3"><div id="tagList" class="tCenter padding"  style="width: 100%">`+tagList(printTagList)+`</div></div>`;
}

// echo all
document.getElementById(printId).innerHTML = print;

}

main(q, id);



// other functions 




//  tagList
function tagList(tagList2){
let color = 'silver';
let size = '';

tagList = '';


tagList2 = tagList2.replace(/,/g, symbolForSplit);
tagList2 = tagList2.replace(/ /g, symbolForSplit);

tagList2 = tagList2.split(symbolForSplit);
//https://stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
tagList2.sort(function (a, b) {
return a.toLowerCase().localeCompare(b.toLowerCase());
});





// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
var tagListCount = {};
tagList2.forEach(function (x) {
if(x != null&&x != ''){
tagListCount[x] = (tagListCount[x] || 0) + 1;
}
});




// tag font-size and color
var tagAverage = 0;
var tagTotal = 0;
/*
tagAverage = (Math.min(...Object.values(tagListCount))+Math.max(...Object.values(tagListCount)))/2;
//console.log(tagAverage);*/

Object.values(tagListCount).forEach(function (x) {
tagTotal = tagTotal+x;
});
tagAverage = tagTotal/Object.values(tagListCount).length;

var tagSize = '';
var tagColor = '';

function fuTag(tagCount){
//let tagPercentage = (Math.floor((tagCount*100)/tagTotal)); // from 100%
let tagPercentage = (Math.floor((tagCount*100)/tagAverage)); // over 100%
//console.log(tagPercentage);

switch (true) {

case tagPercentage >= 500:
tagColor = "var(--red)";
tagSize = "200%";
break;

case tagPercentage >= 300:
tagColor = "var(--orange)";
tagSize = "150%";
break;

case tagPercentage >= 250:
tagColor = "var(--yellow)";
tagSize = "130%";
break;

case tagPercentage >= 100:
tagColor = "var(--green)";
tagSize = "120%";
break;

case tagPercentage >= 80:
tagColor = "var(--blue)";
tagSize = "110%";
break;

case tagPercentage >= 50:
tagColor = "var(--indigo)";
tagSize = "105%";
break;

case tagPercentage >= 30:
tagColor = "var(--violet)";
tagSize = "100%";
break;

default:
tagColor = "var(--c2)";
tagSize = "95%";
}

//console.log(tagColor);
//return tagColor;
}




// https://masteringjs.io/tutorials/fundamentals/foreach-object
Object.entries(tagListCount).forEach(entry => {
const [key, value] = entry;
//console.log(key, value);

//alert('test');

tag = key.trim();
tagCount = value;


fuTag(tagCount);

if(tag != ''){
let printTag = tag.replace(/#/g, "");
let goTag = encodeURIComponent(tag);

let hlClass = 'hlClass'+printTag[0];

if(q == tag){
tagList += `

<a class="tag light border2 ${hlClass}" href="${scriptDir}?q=${goTag}" style="background: ${tagColor}; color: var(--l4); font-size: ${tagSize} !important;">${printTag}</a>

`;
}else{

tagList += `

<a class="tag light border2 ${hlClass}" onmouseover="hlwClassAdd('${hlClass}')"  onmouseout="hlwClassRemove('${hlClass}')" href="${scriptDir}?q=${goTag}"  style="color: ${tagColor}; font-size: ${tagSize} !important;">${printTag}</a>

`;
}
}
});
return tagList;
}
//  end tag list






function fuPrintPost(id, post, tag, time){

post = highlightText(post, 'out');
tag = highlightText(tag);
//time = new Date(time).getTime();
time = `<a href="${scriptDir}?id=${id}#${id}">&nbsp;`+fuPostTime(time)+`&nbsp;</a>`;

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







function highlightText(text, hrefInOut){
text = decodeURIComponent(text);
let text2 = '';
let embed = '';


let w = '100%';
let h = '190px'; 

text = [...text];
let forSplit = [`
`, " ", ","];
text.forEach((item) => {
forSplit.forEach((item2) => { // foreach
if(item == item2){
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
if(embedStatus != 'off'){
item = `<a target="_blank" href="${item}"><img class="ico op" src="${ico}" width="14px" alt="ico"> ${item}</a>`;
}else{
item = `<a target="_blank" href="${item}">${item}</a>`;
}
}




//add tag
if(item[0] == '#'){
item = item.replace(/#/g, "");
if(hrefInOut == 'out'){
/*item = `<a rel="nofollow" href="/projects/blog-in-progress/?q=${item} tag">#${item} <span class="sup">⇗</span></a>`;*/
item = `<a rel="nofollow" href="${scriptDir}?q=%23${item}">#${item}</a>`;
}else{
item = `<a rel="nofollow" href="${scriptDir}?q=%23${item}">#${item}</a>`;
}
}





text += item;
});

if(embedStatus == 'off'){ return text; } else { return text+embed; }

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





// pagination in future

if(embedStatus != 'off'){
// for Twitter embed
let script = document.createElement('script');
script.type='text/javascript';
script.async = true;
script.charset = 'utf-8';
script.src = 'https://platform.twitter.com/widgets.js';      
document.getElementsByTagName('head')[0].appendChild(script);
}











}


