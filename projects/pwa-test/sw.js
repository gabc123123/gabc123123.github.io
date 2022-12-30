////https://github.com/mdn/pwa-examples
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('webapp-store').then((cache) => cache.addAll([

'index.html',

'/js/main.js',
'/js/ad.js',
'/data/adsJsonVar.js',
'script.js',

'/css/light.css',
'/css/style-main.css',
'style.css',

'/img/logo.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
