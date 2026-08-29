const CACHE_NAME = "google-launcher-v1";

const FILES_TO_CACHE = [
  "./",
  "./index-light.html",

  "./icons/launcher-icon.png",
  "./icons/google-g.png",

  "./icons/google-drive.png",
  "./icons/google-docs.png",
  "./icons/sheets.png",
  "./icons/slides.png",
  "./icons/youtube.png",

  "./icons/calendar.png",
  "./icons/chrome.png",
  "./icons/gemini.png",
  "./icons/gmail.png",
  "./icons/google-cloud.png",
  "./icons/google-maps.png",
  "./icons/google-translate.png",
  "./icons/meet.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});