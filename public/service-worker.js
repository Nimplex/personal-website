const filesToCache = [
    '/',
    '/manifest.json',
    '/css/style.css',
    '/css/navbar.css',
    '/assets/fonts/Montserrat-Regular.ttf',
    '/js/main.js',
    '/js/preload.js'
]

self.addEventListener('activate', event => {
    console.log('Service worker activated')
})

self.addEventListener('install', event => {
    console.log('Attempting to install service worker and cache static assets')
    event.waitUntil(
        caches.open('pages-cache-1').then(cache => {
            return cache.addAll(filesToCache)
        })
    )
})

self.addEventListener('fetch', event => {
    console.log('Fetching from cache')
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) return response
            return fetch(event.request)
        })
    )
})