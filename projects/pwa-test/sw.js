self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pwa-store').then((cache) => cache.addAll([
'./',
'/index.html',
'index.html',

'/js/main.js',
'/js/ad.js',
'/data/adsJsonVar.js',
'./script.js',

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
