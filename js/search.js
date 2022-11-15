// v.1.0.12

var  geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");

var random = '';
var urlList = [];



var tmp = '';

//console.log(url);
//alert(q);
if(q != null&&q == ''){ q = 'n'; }
//alert(url);
if(q != null&&q != ''){
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
window.location.href = random;
break;

case 'g#':
case 'goo#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.google.com/search?q=" + q;
if(q == ''){ url = "https://newsstand.google.com/?nsro=true&hl=en"; }
window.location.href = url;
break;

case 'bi#':
case 'bin#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.bing.com/search?q=" + q;
if(q == ''){ url = "https://www.msn.com/"; }
window.location.href = url;
break;


case 'qwa#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.qwant.com/?q=" + q;
window.location.href = url;
break;

case 'd#':
case 'duc#':
case 'duk#':
case 'duck#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://duckduckgo.com/?q=" + q;
if(q == ''){ url = "https://duckduckgo.com/about"; }
window.location.href = url;
break;

case 'w#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://wikipedia.org/w/index.php?search=" + q;
if(q == ''){ url = "https://wikipedia.org/wiki/Special:Random"; }
window.location.href = url;
break;

case 'l#':  case 'll#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://duckduckgo.com/?q=%5C" + q;
if(q == ''){ url = "https://duckduckgo.com/about"; }
window.location.href = url;
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
window.location.href = url;
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
window.location.href = url;
break;

case 'gig#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.gigablast.com/search?q=" + q;
window.location.href = url;
break;

case 'twi#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://twitter.com/search?q=" + q;
if(q == ''){ url = "https://twitter.com/explore"; }
window.location.href = url;
break;

case 'twii#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://twitter.com/search?q="+q+"&f=live";
if(q == ''){ url = "https://twitter.com/explore"; }
window.location.href = url;
break;

case 'red#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.reddit.com/search/?q=" + q+"&type=link";
if(q == ''){ url = "https://www.reddit.com/rpan/"; }
window.location.href = url;
break;

case 'redd#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.reddit.com/search/?q="+q+"&t=day&type=link&sort=hot";
if(q == ''){ url = "https://www.reddit.com/rpan/"; }
window.location.href = url;
break;

case 'med#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://medium.com/search?q="+q;
if(q == ''){ url = "https://twitter.com/explore"; }
window.location.href = url;
break;

case 'medd#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://medium.com/tag/"+q.toLowerCase()+"/latest";
if(q == ''){ url = "https://twitter.com/explore"; }
window.location.href = url;
break;

case 'tum#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.tumblr.com/search/"+q;
if(q == ''){ url = "https://www.tumblr.com/explore/"; }
window.location.href = url;
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
"https://translate.google.com/#auto/auto/" + q,
"https://translate.google.com/#auto/auto/" + q,
"https://translate.google.com/#auto/auto/" + q,
"https://www.deepl.com/translator#auto/auto/"+q,
"https://www.bing.com/translator/?text="+q+"&from=auto&to=auto"
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
window.location.href = random;
break;

case 'tt#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://translate.google.com/#auto/en/" + q,
"https://translate.google.com/#auto/en/" + q,
"https://translate.google.com/#auto/en/" + q,
"https://translate.google.com/#auto/en/" + q,
"https://translate.google.com/#auto/en/" + q,
"https://translate.google.com/#auto/en/" + q,
"https://www.deepl.com/translator#auto/en/"+q,
"https://www.bing.com/translator/?text="+q+"&from=auto&to=en"
];
random = Math.floor(Math.random() * urlList.length);
random = urlList[random];
window.location.href = random;
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
window.location.href = url;
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
window.location.href = url;
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
"https://news.ycombinator.com/",
"https://flipboard.com/topic/technology",
"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB",
"https://www.bing.com/news/search?q=Technology",
"https://www.mojeek.com/news?top=technology",
"https://getpocket.com/explore/technology",
"https://www.reddit.com/r/technology/",
"https://medium.com/tag/technology"
//"https://twitter.com/explore/tabs/news"
];
random = Math.floor(Math.random() * urlList.length);
url = urlList[random];
}
window.location.href = url;
break;


case 'y#':
case '.#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.youtube.com/results?search_query=" + q;
if(q == ''){ url = "https://www.youtube.com/feed/explore"; }
window.location.href = url;
break;

case 'yy#':
case '..#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "https://www.youtube.com/results?search_query="+q+"&sp=EgIIAg%253D%253D";
if(q == ''){ url = "https://www.youtube.com/feed/explore"; }
window.location.href = url;
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
window.location.href = url;
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
window.location.href = url;
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
window.location.href = url;
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
window.location.href = url;
break;

case 'o#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
urlList = [
"https://www.mojeek.com/search?q="+q,
"https://www.qwant.com/?q="+q+"&t=web&vt=1&b=1",
//"https://search.brave.com/search?q="+q,
"https://swisscows.com/web?query="+q,
"https://search.seznam.cz/?q="+q,
"https://www.gigablast.com/search?q="+q,
"https://search.goo.ne.jp/web.jsp?MT="+q+"&IE=UTF-8&OE=UTF-8",
"https://search.naver.com/search.naver?query="+q
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
window.location.href = url;
break;

case 'ti#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "/projects/timer" + q;
window.location.href = url;
break;

case 'si#':
case 'ww#':
case 'www#':
q = q3.replace(q2, '');
q = q.trim();
q = encodeURIComponent(q);
url = "/?q=site:" + q;
window.location.href = url;
break;

case 'mm#':
window.location.href = "music.html";
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
window.location.href = random;
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
window.location.href = random;
}
}
