// v.1.0.0


//https://github.com/mdn/pwa-examples
self.addEventListener('install', (e) => {
  e.waitUntil(

caches.open('v3').then((cache) => cache.addAll([

'/',
'/js/main.js',
'/js/ad.js',
'/data/adsJsonVar.js',
'/css/light.css',
'/css/style-main.css',

'/audio/click.ogg',
'/audio/error.ogg',
'/audio/game-over.ogg',
'/audio/neutral.ogg',
'/audio/ok.ogg',
'/audio/win.ogg',

'index.html',
'style.css',
'script.js'

])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});




