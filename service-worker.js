const CACHE_NAME = "naturfreeze-app-v1";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/logo-naturfreeze-mark.jpg",
  "./assets/logo-naturfreeze.jpeg",
  "./assets/logo-naturfreeze-cropped.jpg",
  "./assets/tilapia.jpg",
  "./assets/pollo-picoso.jpg",
  "./assets/mix-berries.jpg",
  "./assets/mango.jpg",
  "./assets/fresas.jpg",
  "./assets/papas.jpg",
  "./assets/nuggets.jpg",
  "./assets/filete-pechuga.jpg",
  "./assets/boneless.jpg",
  "./assets/filete-empanizado.jpg",
  "./assets/aros-cebolla.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
