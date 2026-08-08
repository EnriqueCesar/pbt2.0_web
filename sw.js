const CACHE_NAME = 'pbt2-web-v18-operational-ui';
const DATA_CACHE = 'pbt2-web-v18-data';
const SHELL_FILES = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css?v=18',
  './js/app.js?v=18',
  './data/project.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL_FILES).catch(()=>{})));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME && key !== DATA_CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isEngineData = url.pathname.endsWith('/js/data.js') || url.pathname.endsWith('/js/excel_data.js');
  if (isEngineData) {
    event.respondWith(caches.open(DATA_CACHE).then(cache => cache.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response.ok) cache.put(event.request, response.clone()).catch(()=>{});
        return response;
      });
    })));
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(()=>{});
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
