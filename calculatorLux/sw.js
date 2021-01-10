//on install - caching the appllication shell
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('sw-cache').then(function(cache){
            //cache any static files that make up the applivatin shell
            return cache.add('index.html')
        })
    )
})

//on network request
self.addEventListener('fetch', function(event){
    event.respondWith(
        //try the cache
        caches.match(event.request).then(function(response){
            //if response found return it, else fetch again
            return response || fetch(event.request)
        })
    )
})