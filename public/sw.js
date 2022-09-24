const APP_PREFIX = "React-PWA_";
const VERSION = "v_1.0.0";
const CACHE_NAME = APP_PREFIX + VERSION;

// Should only contain assets that are essential and persist
// across pages
const CONTENT_TO_CACHE = [
    'index.html',
    'icons/TemplateIcon_512.png',
    'icons/TemplateIcon_IOS.png',
    'favicon.ico'
];

// Pre-Cache any assets on install
self.addEventListener('install', (e) => {
    e.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(CONTENT_TO_CACHE);
    })());
});

// Delete and old caches on activation
self.addEventListener('activate', (e) => {
    const cacheWhiteList = [CACHE_NAME];

    e.waitUntil((async () => {
        await caches.keys().then((keys) => {
            return Promise.all(keys.map(key => {
                if (!cacheWhiteList.includes(key)) {
                    caches.delete(key);
                }
            }));
        });
    })())
});

// Intercept incoming network requests, responding with the cached version FIRST
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(e.request).then(cachedResponse => {
                const fetchedResponse = fetch(e.request).then(networkResponse => {
                    // Update the cached version
                    cache.put(e.request, networkResponse.clone());

                    return networkResponse;
                }).catch(e => {
                    // Keeps the browser from logging a ton of errors if there's no connection
                    return;
                });

                return cachedResponse || fetchedResponse;
            });
        })
    );
})