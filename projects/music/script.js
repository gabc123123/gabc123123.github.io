// v.1.0.0



var json = musicFPJson;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}




//alert(json[getRandomInt(json.length)]);
//alert(json.length);

var id = getRandomInt(json.length);

var randomTitle = json[id]['text'];
var randomURL = json[id]['url'];

var tmp = document.createElement ('a');
tmp.href   = randomURL;
var host = tmp.hostname;

document.getElementById("playTitle").innerHTML =  randomTitle; 

document.getElementById("playURL").innerHTML =  '<a target="blank" href="'+randomURL+'">'+randomURL+' ⇗</a>'; 
 


var w = '100%';
var h = '275px';


switch (host) {

case "youtu.be":
case "m.youtube.com":
case "www.youtube.com":
case "music.youtube.com":
  
//alert(randomURL);
var play = randomURL.split('v=').pop();



//alert(play);
    //<!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
     document.getElementById("playerxx").innerHTML = '<div id="player"></div>'; 

      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: h,
          width: w,
          videoId: play,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onStateChange': onPlayerStateChange2
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
//event.target.mute();
//event.target.setVolume(100); 
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
 if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
}
       
}
function stopVideo() {
        player.stopVideo();
      }


function onPlayerStateChange2(event) {
		  if(event.data === 0) {            
// Simulate an HTTP redirect:
location.reload();  
}
}



break;
   

case 'vimeo.com':

function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

injectScript('https://player.vimeo.com/api/player.js')
    .then(() => {
        console.log('Script loaded!');
        
        
        
        
        
        
var play = randomURL.split('/').pop();
document.getElementById("playerxx").innerHTML = '<div id="myVideo" data-vimeo-id="'+play+'" data-vimeo-autoplay="true"></div>'; 

var options = {
    url: "https://vimeo.com/"+play,
   // width:400
   height:h
  };

  var videoPlayer = new Vimeo.Player('myVideo', options);

videoPlayer.on('play', function() {
    console.log('Played the video');
  });
  
videoPlayer.on('ended', function(data) {
location.reload(); 
location.reload(); 
});
        
        
        
        
        
    }).catch(error => {
        console.error(error);
    });
    
    
    
    



    break;

    
case "soundcloud.com":

function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

injectScript('https://w.soundcloud.com/player/api.js')
    .then(() => {
        console.log('Script loaded!');
        

  document.getElementById("playerxx").innerHTML = '<iframe  id="sc-widget" width="'+w+'" height="'+h+'" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url='+randomURL+'&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'; 


  (function(){
    var widgetIframe = document.getElementById('sc-widget'),
        widget       = SC.Widget(widgetIframe);

    widget.bind(SC.Widget.Events.READY, function() {
      // load new widget
      widget.bind(SC.Widget.Events.FINISH, function() {
// Simulate an HTTP redirect:

location.reload(); 
location.reload(); 
      });
    });

  }());

 }).catch(error => {
 console.error(error);
    });

 break;
    
default:
console.log(`default switch`);
}











