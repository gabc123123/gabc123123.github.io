// v.1.0.0


//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
function onError(error) {
  console.log(`Error: ${error}`);

}

function onGot(item) {
  let rUrl = "options.html";
  if (item.rUrl) {
    rUrl = item.rUrl; 
  }
newTabRedir(rUrl);
}

const getting = browser.storage.sync.get("url");
//const getting = browser.storage.local.get("rUrl");
getting.then(onGot, onError);






function newTabRedir(rUrl){
if(String(window.location.href).indexOf('moz-extension://') >= 0&&String(window.location.href).indexOf('/my-new-tab.html') >= 0){

//https://stackoverflow.com/questions/10982593/open-link-in-new-window-or-focus-to-it-if-already-open
//window.open('http://localhost/','mywindow').focus();
window.open(rUrl,'newTab').focus();
//window.location.replace("http://localhost/");
window.close();
}

}
