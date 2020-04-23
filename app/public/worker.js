/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  '/',
  '/images/*',
  '/static/js/*.js',
];

// Install a service worker
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

// Cache and return requests
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});

// Update a service worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(caches.keys().then(cacheNames => Promise.all(
    cacheNames.map((cacheName) => {
      if (cacheWhitelist.indexOf(cacheName) === -1) {
        return caches.delete(cacheName);
      }
    }),
  )));
});
