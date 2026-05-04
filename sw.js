self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('cat-cache').then(cache => {
      return cache.addAll([
        '/Cat-bkn/cat-pro-visual.html',
        '/Cat-bkn/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
