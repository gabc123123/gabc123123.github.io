



// sw.js



//https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event
addEventListener("message", (event) => {
  // event is an ExtendableMessageEvent object
  console.log(`The client sent me a message: ${event.data}`);
var test = event.data;
  event.source.postMessage(`Hi client. you message: ${event.data}`);
});




//https://github.com/mdn/pwa-examples
self.addEventListener('install', (e) => {
  e.waitUntil(



    caches.open('test-webapp-store').then((cache) => cache.addAll([

'index.html',

'/js/main.js',
'/js/ad.js',
'/data/adsJsonVar.js',
'/css/light.css',
'/css/style-main.css',

'script.js',
'style.css'
])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
