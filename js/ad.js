/* v.1.1.16*/

function fuAds(themeAds, idAds, maxAds, comAds){

if(document.getElementById(idAds) != null){

let ads;
var adsPrint = '';


//ads = JSON.parse(adsJson);
ads = adsJsonVar;

if(ads != null){
const random = Math.floor(Math.random() * ads.length);
//console.log(ads[random]['text']);
adsText = ads[random]['text']; if(adsText == null) { adsText = ''; }
adsURL = ads[random]['url'];	if(adsURL == null){ adsURL = ''; }



// privacy
if(adsText.search("src=") != -1&&localStorage.getItem('confDataCollection') != 'on'){ adsText = ''; }

if(adsText.search("src=") != -1){
adsPrint = '<a class="tag zero op" style="float: right; margin-bottom: 5px;" href="/ads.'+confExt+'">ads, links</a><br />'+adsText+' <br /><a target="blank" href="'+adsURL+'">'+adsURL+'</a>';
}else{
adsPrint = '<a class="tag zero op" style="float: right; margin-bottom: 5px;" href="/ads.'+confExt+'">ads, links</a><br />'+adsText+' <a target="blank" href="'+adsURL+'">'+adsURL+'</a>';
}


if(adsText != ''&&adsText.search("src=") == -1){
document.getElementById(idAds).innerHTML = '<div class="center"><div class="post brand light border3" style="text-align: left; margin: 10px 0; padding-bottom: 25px;">'+adsPrint+'</div></div>';
}else if(adsText != ''){
document.getElementById(idAds).innerHTML = '<div class="center"><div class="light border3" style="text-align: left; display: inline-block; padding: 7px; padding-bottom: 25px; max-width: 100%; margin: 10px 0;">'+adsPrint+'</div></div>';
}



if(comAds == 'all'){
adsPrint = '';
ads.forEach((item, index) => { 
if(ads[index]['text'].search("src=") != -1&&localStorage.getItem('confDataCollection') != 'on'){ ads[index]['text'] = `<span class="op" title="hidden, because: Data Collection = off">hidden (privacy)</span>`;   }
adsPrint  += '<div class="post brand  border4List">'+ads[index]['text']+' <a target="blank" href="'+ads[index]['url']+'">'+ads[index]['url']+'</a></div>';
 });
 document.getElementById(idAds).innerHTML = '<div class="center"><div class="post border3 light">'+adsPrint+'</div></div>';
 }




}

}




// Google Analytics 
// privacy part
if(localStorage.getItem('confDataCollection') == 'on'){
var scriptStat = document.createElement('script');
scriptStat.type='text/javascript';
scriptStat.src = 'https://www.googletagmanager.com/gtag/js?id=G-D0LBEE4Q77';      
document.getElementsByTagName('head')[0].appendChild(scriptStat);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D0LBEE4Q77');
  
}











}








