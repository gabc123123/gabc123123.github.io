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

post = insertEmbed(post);

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


function insertEmbed(text){
text = decodeURIComponent(text);
let text2 = '';
let embed = '';
let symbolForSplit = 'ccbbaa';

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
if(item.search("http") != -1){ 
embed = new URL(item).hostname;
}

text += item;
});

text = text+embed;



return text;
}














}
