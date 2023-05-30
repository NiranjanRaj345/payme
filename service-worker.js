// service-worker.js

// Cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/index.html',
          '/css/style.css',
          '/js/script.js',
          '/default.html',
          '/page.html',
          '/compress.html',
          // Add more assets to cache
        ]);
      })
    );
  });
  
  // Intercept fetch requests
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  