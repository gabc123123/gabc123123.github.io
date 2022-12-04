// v.1.1.4

var geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");
var rUrlGet = url.searchParams.get("rUrl");

var random = '';
var urlList = [];

var sRedirUrl = '';

var tmp = '';


let sUrlText = ''+url+'';
if(q != null&&q == ''){ q = 'n'; }
const myArray = sUrlText.split("q=");
sUrlText = myArray[0];

if(q != null&&q != ''&&sUrlText.search("cache") == -1){

q = q.trim();
//q = q.replace(/%([^\d].)/, "%25$1");
q = q.replace(/%/g, "%25");
q = decodeURIComponent(q);

if(q == ''){ q = 'n'; }

// for the command at the end of the search query
var strArray = q.split(" ");
var q2 = strArray[strArray.length - 1] + "#";
var q3 = q + "#";



switch (q2) {

case 'r#':
case 'rand#':
urlList = [
'https://www.w3.org/',
'https://isocpp.org/tour',
'https://www.ruby-lang.org/en/documentation/',
'https://docs.scala-lang.org/',
'https://docs.python.org/',
'https://golang.org/doc/',
'https://www.rust-lang.org/learn',
'https://www.php.net/docs.php',
'https://www.w3schools.com/',
'https://developer.mozilla.org/docs/',
'https://devdocs.io/',
'https://docs.julialang.org/',
'https://www.typescriptlang.org/docs/',
'http://www.lua.org/docs.html'
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl = random;
break;

case 'g#':
case 'goo#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.google.com/search?q=" + q;
if(q == ''){ url = "https://newsstand.google.com/?nsro=true&hl=en"; }
sRedirUrl = url;
break;

case 'bi#':
case 'bin#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.bing.com/search?q=" + q;
if(q == ''){ url = "https://www.msn.com/"; }
sRedirUrl = url;
break;


case 'qwa#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.qwant.com/?q=" + q;
sRedirUrl = url;
break;


case 'w#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://wikipedia.org/w/index.php?search=" + q;
if(q == ''){ url = "https://wikipedia.org/wiki/Special:Random"; }
sRedirUrl = url;
break;

case 'l#':  case 'll#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);

url = "./?q="+q+' q';
sRedirUrl = url;
break;



case 'tag#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://twitter.com/search?q="+q,
"https://www.reddit.com/search/?q="+q+"&t=day&type=link",
//"https://www.tumblr.com/search/"+q+"?t=1",
"https://medium.com/tag/"+q.toLowerCase()+"/latest"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://twitter.com/explore",
//"https://www.tumblr.com/explore/",
"https://medium.com/"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;


case 's#':
case 'soc#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://twitter.com/search?q="+q,
"https://www.reddit.com/search/?q="+q+"&t=day&type=link",
//"https://www.reddit.com/search/?q="+q+"&t=day&type=link&sort=new",
//"https://www.tumblr.com/search/"+q+"?t=1",
"https://medium.com/search?q="+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://twitter.com/explore",
//"https://www.tumblr.com/explore/",
"https://medium.com/"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'gig#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.gigablast.com/search?q=" + q;
sRedirUrl = url;
break;

case 'twi#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://twitter.com/search?q=" + q;
if(q == ''){ url = "https://twitter.com/explore"; }
sRedirUrl = url;
break;

case 'twii#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://twitter.com/search?q="+q+"&f=live";
if(q == ''){ url = "https://twitter.com/explore"; }
sRedirUrl = url;
break;

case 'red#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.reddit.com/search/?q=" + q+"&type=link";
if(q == ''){ url = "https://www.reddit.com/rpan/"; }
sRedirUrl = url;
break;

case 'redd#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.reddit.com/search/?q="+q+"&t=day&type=link&sort=hot";
if(q == ''){ url = "https://www.reddit.com/rpan/"; }
sRedirUrl = url;
break;

case 'med#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://medium.com/search?q="+q;
if(q == ''){ url = "https://twitter.com/explore"; }
sRedirUrl = url;
break;

case 'medd#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://medium.com/tag/"+q.toLowerCase()+"/latest";
if(q == ''){ url = "https://twitter.com/explore"; }
sRedirUrl = url;
break;

case 'tum#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.tumblr.com/search/"+q;
if(q == ''){ url = "https://www.tumblr.com/explore/"; }
sRedirUrl = url;
break;

case 't#':
case 'tr#':
case 'tra#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://translate.google.com/#auto/auto/" + q,
"https://translate.google.com/#auto/auto/" + q,
"https://translate.google.com/#auto/auto/" + q,
"https://www.deepl.com/translator#auto/auto/"+q,
"https://www.bing.com/translator/?text="+q+"&from=auto&to=auto"
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl= random;
break;

case 'tt#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://translate.google.com/#auto/en/" + q,
"https://translate.google.com/#auto/en/" + q,
"https://translate.google.com/#auto/en/" + q,
"https://www.deepl.com/translator#auto/en/"+q,
"https://www.bing.com/translator/?text="+q+"&from=auto&to=en"
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl = random;
break;

case 'tg#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://translate.google.com/#auto/auto/"+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
sRedirUrl = url;
break;

case 'tb#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.bing.com/translator/?text="+q+"&from=auto&to=auto"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
sRedirUrl = url;
break;

case 'n#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+q+"&tbm=nws",
"https://www.bing.com/news/search?q="+q,
"https://www.qwant.com/?t=news&q="+q
];

random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://slashdot.org/",
"https://flipboard.com/topic/technology",
"https://news.ycombinator.com/",
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB",
"https://www.bing.com/news/search?q=Sci/Tech",
"https://getpocket.com/explore/technology",
"https://www.reddit.com/r/technology/",
"https://medium.com/tag/technology",
"./?q=cod"
//"https://twitter.com/explore/tabs/news"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;


case 'y#':
case '.#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.youtube.com/results?search_query=" + q;
if(q == ''){ url = "https://www.youtube.com/feed/explore"; }
sRedirUrl = url;
break;

case 'yy#':
case '..#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.youtube.com/results?search_query="+q+"&sp=EgIIAg%253D%253D";
if(q == ''){ url = "https://www.youtube.com/feed/explore"; }
sRedirUrl = url;
break;

case 'v#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+q+"&newwindow=1&tbm=vid",
"https://www.bing.com/videos/search?q="+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://www.youtube.com/feed/explore",
"https://vimeo.com/watch",
"https://www.dailymotion.com/"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'vv#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.youtube.com/results?search_query=" + q,
"https://vimeo.com/search?q=" + q,
"https://www.dailymotion.com/search/"+ q +"/videos",
"https://search.joinpeertube.org/search?search="+ q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://www.youtube.com/feed/explore",
"https://vimeo.com/watch",
"https://www.dailymotion.com/"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;


case 'm#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://music.youtube.com/search?q=" + q,
"https://soundcloud.com/search?q="+ q
//"https://www.deezer.com/search/"+ q +"/track",
//"https://music.apple.com/search?term="+q,
//"https://audiomack.com/search?q="+q,
//"https://www.twitch.tv/directory/game/Music?tl=57e81aba-c8ae-48aa-8fba-7a7eb9d3dd23"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://music.youtube.com/explore",
//"https://www.deezer.com/channels/explore",
"https://soundcloud.com/discover",
"https://vimeo.com/categories/music"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'mus#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.bbc.co.uk/sounds/play/live:bbc_radio_one",
"https://www.bbc.co.uk/sounds/play/live:bbc_1xtra"
];
if(confDevice == 'mobile'){
urlList.push("https://kexp.org/");
}else{
urlList.push("https://tunein.com/radio/KEXP-903-s32537/");
}
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q != ''){
urlList = [
"?q=n"
];
random = Math.floor(Math.random() * urlList.length);
url = "/?q="+q+' m';
}
sRedirUrl = url;
break;

case 'cod#':
case 'dev#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://github.com/search?q="+q+"&type=code",
"https://beta.sayhello.so/search?q="+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"https://www.reddit.com/r/programming/",
"https://flipboard.com/topic/computerscience",
"https://news.google.com/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNREZ0YTNFU0FtVnVLQUFQAQ",
"https://www.bing.com/news/search?q=computer science",
"https://www.reddit.com/r/computerscience/",
"https://www.reddit.com/r/compsci/",
"https://www.reddit.com/r/programming/",
"https://www.reddit.com/r/webdev/",
"https://medium.com/tag/web-development",
"https://medium.com/tag/programming",
"https://medium.com/tag/computer-science"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;


case 'o#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.qwant.com/?q="+q+"&t=web&vt=1&b=1",
"https://www.gigablast.com/search?q="+q
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
if(q == ''){
urlList = [
"?q=n"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
sRedirUrl = url;
break;

case 'ti#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "/projects/timer" + q;
sRedirUrl = url;
break;

case 'si#':
case 'ww#':
case 'www#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "/?q=site:" + q;
sRedirUrl = url;
break;

case 'mm#':
sRedirUrl = "/music.html";
break;

case 'q#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://www.google.com/search?q="+ q,
"https://www.google.com/search?q="+ q,
"https://www.google.com/search?q="+ q,
"https://www.google.com/search?q="+ q,

"https://www.bing.com/search?q="+ q
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl = random;
break;


default:
q = encodeURIComponent(q);
urlList = [
"https://www.google.com/search?q="+ q,
"https://www.google.com/search?q="+ q,
"https://www.google.com/search?q="+ q,
"https://www.google.com/search?q="+ q,

"https://www.bing.com/search?q="+ q
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
sRedirUrl = random;
}

if(sRedirUrl != ''&&sRedirUrl != undefined){
window.location.href = "./search."+confExt+"?rUrl="+sRedirUrl;
}



}









