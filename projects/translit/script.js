// v.1.0.0

document.getElementById('text').value = '';
var task = '';
var geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");

/*if(q != null){ localStorage.setItem("qtranslit", q); q = q; }else{
if(localStorage.getItem("qtranslit")){ q = localStorage.getItem("qtranslit"); }
}*/

q = decodeURI(q);



count = 0;

// first letter
var a = {
"А":"A", "а":"a",
"Б":"B", "б":"b",
"В":"V", "в":"v",
"Г":"H", "г":"h",
"Ґ":"G", "ґ":"g",
"Д":"D", "д":"d",
"Е":"E", "е":"e",
"Є":"Ie", "є":"ie",
"Ж":"Zh", "ж":"zh",
"З":"Z", "з": "z",
"И":"Y", "и":"y",
"І":"I", "і":"i",
"Ї":"I", "ї":"i",
"Й":"I", "й":"i",
"К":"K", "к":"k",
"Л":"L", "л":"l",
"М":"M", "м":"m",
"Н":"N", "н":"n",
"О":"O", "о":"o",
"П":"P", "п":"p",
"Р":"R", "р":"r",
"С":"S", "с":"s",
"Т":"T", "т":"t",
"У":"U", "у":"u",
"Ф":"F", "ф":"f",
"Х":"Kh", "х":"kh",
"Ц":"Ts", "ц":"ts",
"Ч":"Ch", "ч":"ch",
"Ш":"Sh", "ш":"sh",
"Щ":"Shch", "щ":"shch",
"Ю":"Iu", "ю":"iu",
"Я":"Ia", "я":"ia",
"Ь":"", "ь":"",
"'":"", "'":"",
" ":" "
};

// other letter
var b = {
"А":"A", "а":"a",
"Б":"B", "б":"b",
"В":"V", "в":"v",
"Г":"H", "г":"h",
"Ґ":"G", "ґ":"g",
"Д":"D", "д":"d",
"Е":"E", "е":"e",
"Є":"Ye", "є":"ye",
"Ж":"Zh", "ж":"zh",
"З":"Z", "з": "z",
"И":"Y", "и":"y",
"І":"I", "і":"i",
"Ї":"Yi", "ї":"yi",
"Й":"Y", "й":"y",
"К":"K", "к":"k",
"Л":"L", "л":"l",
"М":"M", "м":"m",
"Н":"N", "н":"n",
"О":"O", "о":"o",
"П":"P", "п":"p",
"Р":"R", "р":"r",
"С":"S", "с":"s",
"Т":"T", "т":"t",
"У":"U", "у":"u",
"Ф":"F", "ф":"f",
"Х":"Kh", "х":"kh",
"Ц":"Ts", "ц":"ts",
"Ч":"Ch", "ч":"ch",
"Ш":"Sh", "ш":"sh",
"Щ":"Shch", "щ":"shch",
"Ю":"Yu", "ю":"yu",
"Я":"Ya", "я":"ya",
"Ь":"", "ь":"",
"'":"", "'":"",
" ":" "
};




function transliterate(word){
word = ' '+word+' ';
word = [...word];

return word.map(function (char) {

if(char== 'Ь' || char == 'ь'){ char = ''; }

count++;
//console.log(count);

//console.log(char);
if(char == ' '){
//console.log('test');
count = 0;
}

if(count == 1){
//console.log(a[char]+':'+char);
return a[char] || char; 
}else{
//console.log(b[char]+':'+char);
return b[char] || char; 
}

}).join("");

}


if(q != "null"){
document.getElementById("result").innerHTML = transliterate(q).trim(); 
}


// input listener and print result
if(document.querySelectorAll('textarea').length >= 1){
var inputA = document.querySelectorAll('textarea')[0];
inputA.addEventListener('input', updateValueInput);
}

function updateValueInput(e) {
//q = encodeURIComponent(e.target.value);
q = e.target.value;
document.getElementById("result").innerHTML = transliterate(q).trim(); 
}

fuWorker('on');
