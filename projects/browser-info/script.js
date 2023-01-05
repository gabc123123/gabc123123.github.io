// v.1.0.9





/*async function  notifications(){
const permission =  await navigator.permissions.query({name: "notifications"});
alert( permission.state);
}*/

document.getElementsByClassName("result")[0].innerHTML =  ''
+'<span class="op">window.navigator.userAgent </span><br />'+window.navigator.userAgent+'<hr />'
+'<span class="op">window.navigator.appVersion </span><br />'+window.navigator.appVersion+'<hr />'
+'<span class="op">window.navigator.platform </span><br />'+window.navigator.platform+'<hr />'

+'<span class="op">navigator.doNotTrack</span><br />'+navigator.doNotTrack+'<hr />'
+'<span class="op">'+"window.navigator.language"+'</span><br />'+window.navigator.language+'<hr />'
+'<span class="op">'+"navigator.cookieEnabled"+'</span><br />'+navigator.cookieEnabled+'<hr />'
+'<span class="op">'+"navigator.hardwareConcurrency"+'</span><br />'+navigator.hardwareConcurrency+'<hr />'
+'<span class="op">'+"navigator.maxTouchPoints"+'</span><br />'+navigator.maxTouchPoints+'<hr />'
+'<span class="op">'+"navigator.onLine"+'</span><br />'+navigator.onLine+'<hr />'
+'<span class="op">'+"navigator.pdfViewerEnabled"+'</span><br />'+navigator.pdfViewerEnabled+'<hr />'

+'<span class="op">window.screen.width, window.screen.height</span><br />'+window.screen.width+"/"+window.screen.height + '<hr />'
+'<span class="op">window.screen.availWidth, window.screen.availHeight</span><br />'+window.screen.availWidth+'/'+window.screen.availHeight+'<hr />'
+'<span class="op">self.innerWidth, self.innerHeight </span><br />'+self.innerWidth+'/'+self.innerHeight+' <hr />'
+'<span class="op">window.screen.pixelDepth</span><br />'+window.screen.pixelDepth+'<hr />'
+'<span class="op">'+"window.outerHeight"+'</span><br />'+window.outerHeight+'<hr />'
+'<span class="op">'+"window.outerWidth"+'</span><br />'+window.outerWidth+'<hr />'

+'<span class="op">'+"window.matchMedia('(prefers-color-scheme: dark)').matches"+'</span><br />'+window.matchMedia('(prefers-color-scheme: dark)').matches+'<hr />'
+'<span class="op">document.referrer</span><br />'+document.referrer+'<hr />'
+'<span class="op">window.location.href</span><br />'+decodeURI(window.location.href)+'<hr />'


+'<span class="op">'+"Intl.DateTimeFormat().resolvedOptions().timeZone"+'</span><br />'+Intl.DateTimeFormat().resolvedOptions().timeZone+'<hr />'

+'<span class="op">'+"window.history.length"+'</span><br />'+window.history.length+'<hr />'




;
