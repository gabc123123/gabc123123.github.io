// v.1.2.7

function insertIcon(id){

let icons = {
"bird":"🐦", "twitter":"🐦",
"blog":"📝", "todo":"📝", "task":"📝", "note":"📝", "reminde":"📝", "paper":"📝",
"cut":"✂️",
"clock":"🕑",
"cofee":"☕",
"comment":"💬","talk":"💬","chat":"💬",
"css":"🖥️", "php":"🖥️", "java":"🖥️", "code":"🖥️", "unicorn":"🦄",
"db":"💾", "data":"💾", "database":"💾", "keep":"💾", "save":"💾", 
"document":"📄", "page":"📄",
"draw":"✏️",
"game":"🎮",
"geany":"🫖",
"fox":"🦊",
"github":"🐱",
"hello":"👋",
"hot":"🔥", "fire":"🔥",
"info":"ℹ️", "faq":"ℹ️", "about":"ℹ️", 
"insert":"📋", "paste":"📋",
"keyboard":"⌨️","typing":"⌨️",
"laptop":"💻", "notebook":"💻",
"live":"🔴", "online":"🔴",
"like":"❤","love":"❤","fav":"❤",
"mammoth ":"🦣", "mastodon":"🦣",
"mail":"📧",
"music": "🎶",
"pumpkin":"🎃", "halloween":"🎃",
"pc":"🖥",
"random":"🎲","rnd":"🎲",
"share":"🔁",
"script":"📜", "code":"📜", "history":"📜",
"search": "🔎",
"sleep":"😴💤", "bed":"🛏",
"store":"🛍️","shop":"🛍️",
"style":"🎨", "css":"🎨", "color":"🎨", "theme":"🎨", "palette":"🎨",
"time":"⌛",
"tmp":"⏳", "temporary":"⏳",
"training":"🏃", "run":"🏃",
"test":"🧪","demo":"🧪",
"play":"▶️",
"progress":"█░░",
"url":"🔗","link":"🔗","www":"🔗",
"web":"🕸️", "internet":"🕸️", "browser":"🕸️",
"wallpaper":"🖼", "picture":"🖼", "image":"🖼", "img":"🖼", "pixel":"🖼","instagram":"🖼",
"question":"❓"
};
let iconsArr = Object.getOwnPropertyNames(icons);


const divId = document.getElementById(id);
const allLinks = divId.querySelectorAll("a");

allLinks.forEach((item, index) => {

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
divId.getElementsByTagName("a")[index].innerHTML = linkText;
}else{
//linkText = '<span class="op pre">📄 </span>'+linkText;
linkText = '<span class="pre"> </span>' +linkText+'<span class="pre"> </span>';
divId.getElementsByTagName("a")[index].innerHTML = linkText;
}

ckeck = '';
icArr = [];
});

}


