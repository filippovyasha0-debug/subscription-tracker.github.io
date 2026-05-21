const CACHE_NAME = 'subend-v2';
const ASSETS = [
  './',
  './index.html',
  './icon.png',
  './apple-icon.png',
  './icon-192.png',
  './icon-512.png',
  './manifest.json',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js'
];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request))));