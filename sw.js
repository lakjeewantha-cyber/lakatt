const CACHE_NAME = "time-logger-v4";

const urlsToCache = [
  "index.html",
  "manifest.json",
  "sw.js",
  "jspdf.umd.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      return response || fetch(event.request);
    })
  );
});