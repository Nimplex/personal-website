const filesToCache = [
    '/',
    '/manifest.json',
    '/css/style.css',
    '/css/navbar.css',
    '/assets/fonts/Montserrat-Regular.ttf',
    '/js/main.js',
    '/js/preload.js'
]

const staticCacheName = 'pages-cache-1'

self.addEventListener('install', event => {
    console.log('Attempting to install service worker and cache static assets')
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            return cache.addAll(filesToCache)
        })
    )
})

self.addEventListener('activate', function(event) {
    console.log('Service worker activated')
})