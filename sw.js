const CACHE_NAME = 'pbt-web-v3-ios-fix';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
