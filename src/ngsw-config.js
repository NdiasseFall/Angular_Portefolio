/**
 * Angular Service Worker configuration
 * See https://angular.io/guide/service-worker-config for more details.
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
// Workbox precache inject:ignore
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "1"
  },
  {
    "url": "favicon.ico",
    "revision": "1"
  },
  {
    "url": "main.js",
    "revision": "1"
  },
  {
    "url": "polyfills.js",
    "revision": "1"
  },
  {
    "url": "styles.css",
    "revision": "1"
  },
  {
    "url": "manifest.json",
    "revision": "1"
  }
].concat(self.__precacheManifest || []);
// Workbox precache inject:end

// Runtime caching
self.addEventListener('fetch', event => {
  // Cache and update strategy for API calls
  if (event.request.url.includes('/api/')) {
    event.respondWith(
      caches.open('api-cache').then(cache => {
        return fetch(event.request).then(response => {
          // Put a copy of the response in the cache
          const responseCopy = response.clone();
          cache.put(event.request, responseCopy);
          return response;
        }).catch(() => {
          // If network fails, try to get from cache
          return cache.match(event.request);
        });
      })
    );
    return;
  }

  // Cache first strategy for static assets
  if (event.request.destination === 'document' ||
      event.request.destination === 'style' ||
      event.request.destination === 'script' ||
      event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        return cachedResponse || fetch(event.request).then(response => {
          return caches.open('assets-cache').then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        }));
      })
    );
  }
});

// Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName.startsWith('app-') &&
                 cacheName !== self.registration.scope;
        }).map(cacheName => caches.delete(cacheName))
      );
    })
  );
});