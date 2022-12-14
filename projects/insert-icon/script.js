// v.1.2.11

function insertIcon(id){

let icons = {
"bird":"๐ฆ", "twitter":"๐ฆ",
"blog":"๐", "todo":"๐", "task":"๐", "note":"๐", "reminde":"๐", "paper":"๐",
"book":"๐", "quiz":"๐",
"bookmark":"๐",
"brain":"๐ง ", "memory":"๐ง ",
"cut":"โ๏ธ",
"clock":"๐",
"cofee":"โ",
"comment":"๐ฌ","talk":"๐ฌ","chat":"๐ฌ",
"css":"๐ฅ๏ธ", "php":"๐ฅ๏ธ", "java":"๐ฅ๏ธ", "code":"๐ฅ๏ธ", "unicorn":"๐ฆ",
"db":"๐พ", "data":"๐พ", "database":"๐พ", "keep":"๐พ", "save":"๐พ",
"dir":"๐๏ธ",
"dev":"๐ปโ๏ธ",
"document":"๐", "page":"๐",
"draw":"โ๏ธ",
"file":"๐๏ธ",
"game":"๐ฎ",
"geany":"๐ซ",
"fox":"๐ฆ",
"github":"๐ฑ",
"hello":"๐",
"hot":"๐ฅ", "fire":"๐ฅ",
"info":"โน๏ธ", "faq":"โน๏ธ", "about":"โน๏ธ", 
"insert":"๐", "paste":"๐",
"joystick":"๐น",
"keyboard":"โจ๏ธ","typing":"โจ๏ธ",
"mark":"โ๏ธ", "check":"โ",
"label":"๐ท๏ธ", "tag":"๐ท๏ธ",
"laptop":"๐ป", "notebook":"๐ป",
"live":"๐ด", "online":"๐ด",
"like":"โค","love":"โค","fav":"โค",
"mammoth ":"๐ฆฃ", "mastodon":"๐ฆฃ",
"mail":"๐ง",
"music": "๐ถ",
"network":"๐ถ",
"news":"๐ฐ",
"pumpkin":"๐", "halloween":"๐",
"pc":"๐ฅ",
"project":"๐", "tpl":"๐",
"radio":"๐ป",
"random":"๐ฒ","rnd":"๐ฒ", "rand":"๐ฒ", "dice":"๐ฒ",
"robot":"๐ค", "auto":"๐ค",
"share":"๐",
"script":"๐", "code":"๐", "history":"๐",
"search": "๐",
"sleep":"๐ด๐ค", "bed":"๐",
"store":"๐๏ธ","shop":"๐๏ธ",
"style":"๐จ", "css":"๐จ", "color":"๐จ", "theme":"๐จ", "palette":"๐จ",
"time":"โ",
"tmp":"โณ", "temporary":"โณ",
"training":"๐", "run":"๐",
"test":"๐งช", "demo":"๐งช", "lorem":"๐งช", "ipsum":"๐งช", 
"play":"โถ๏ธ",
"progress":"โโโ",
"rain":"๐ง",
"sun":"๐",
"tool":"๐จ",
"tv":"๐บ",
"url":"๐","link":"๐","www":"๐",
"setting":"โ๏ธ", "custom":"โ๏ธ",
"snow":"โ๏ธ", "cold":"โ๏ธ", "winter":"โ๏ธ", 
"web":"๐ธ๏ธ", "internet":"๐ธ๏ธ", "browser":"๐ธ๏ธ",
"wallpaper":"๐ผ", "picture":"๐ผ", "image":"๐ผ", "img":"๐ผ", "pixel":"๐ผ","instagram":"๐ผ","pxlmo":"๐ผ",
"question":"โ",
"light":"โฌ๏ธ", "white":"โฌ๏ธ",
 "dark":"โฌ", "black":"โฌ",
"red":"๐ฅ",
"orange":"๐ง",
"yellow":"๐จ",
"green":"๐ฉ",
"indigo":"๐ช",
"violet":"๐ช",
"blue":"๐ฆ"

};

let iconsArr = Object.getOwnPropertyNames(icons);

if(document.getElementById(id) == null){
console.log('id null');
}else{

let divId = document.getElementById(id);

const allLinks = divId.querySelectorAll("a");
allLinks.forEach((item, index) => {

let linkText = item.innerHTML;
let check = '';
let icArr = [];

iconsArr.forEach((item) => {
let textIcon = item;
let icon = icons[textIcon];
if(linkText.toLowerCase().search(textIcon) != -1&&linkText.toLowerCase().search(icon) == -1){
icArr.push(icon+'');
check = 'exit';
}
});

if(check == 'exit'){
icArr = [...new Set(icArr)];
//icon = icArr.toString();
icon = icArr.join('');
linkText = '<span class="ico2 pre">'+icon+'</span><span class="pre"> </span>'+linkText;
divId.getElementsByTagName("a")[index].innerHTML = linkText;
}else{
//linkText = '<span class="op pre">๐ </span>'+linkText;
linkText = '<span class="pre"> </span>' +linkText+'<span class="pre"> </span>';
divId.getElementsByTagName("a")[index].innerHTML = linkText;
}

ckeck = '';
icArr = [];
});


const allButtons = divId.querySelectorAll("button");
allButtons.forEach((item, index) => {

let linkText = item.innerHTML;
let check = '';
let icArr = [];

iconsArr.forEach((item) => {
let textIcon = item;
let icon = icons[textIcon];
if(linkText.toLowerCase().search(textIcon) != -1&&linkText.toLowerCase().search(icon) == -1){
icArr.push(icon);
check = 'exit';
}
});

if(check == 'exit'){
icArr = [...new Set(icArr)];
//icon = icArr.toString();
icon = icArr.join('');
linkText = '<span class="ico2 pre">'+icon+'</span><span class="pre"> </span>'+linkText;
divId.getElementsByTagName("button")[index].innerHTML = linkText;
}else{
//linkText = '<span class="op pre">๐ </span>'+linkText;
linkText = '<span class="pre"> </span>' +linkText+'<span class="pre"> </span>';
divId.getElementsByTagName("button")[index].innerHTML = linkText;
}

ckeck = '';
icArr = [];
});

}
}


