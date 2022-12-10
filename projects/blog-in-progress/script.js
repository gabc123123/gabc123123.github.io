// v.1.0.0



function blog(printId, json, mode){

const explodeKey = 'aabbcc';
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



}
