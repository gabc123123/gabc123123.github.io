// v.1.0.1
//https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page

//store local
//https://news.ycombinator.com/item?id=25218240

function saveOptions(e) {
  e.preventDefault();
browser.storage.sync.set({
//browser.storage.local.set({
    rUrl: document.querySelector("#q").value
  });
//document.querySelector("#msg").innerHTML = 'status: '+document.querySelector("#q").value;
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#q").value = result.rUrl || "about:home";


  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

let getting = browser.storage.sync.get("rUrl");
//let getting = browser.storage.local.get("rUrl");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);


