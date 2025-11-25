self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("pwa-demo").then(cache => {
      return cache.addAll([
        "/pwa/",
        "/pwa/index.html",
        "/pwa/style.css",
        "/pwa/app.js",
        "/pwa/icon-192.png",
        "/pwa/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
