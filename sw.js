const staticApp = "cool-weather-app-v1";
//cache the assets that will be needed offline
const assets = [
    "/",
    "/index.html",
    "/css/styles.css",
    "/js/index.js",
    "/images/newlogo 1-124.png",
    "/images/newlogo 1-144.png",
    "/images/newlogo 1-152.png",
    "/images/newlogo 1-512.png",
    "/images/newlogo 72.png",
    "/images/newlogo 96.png",
]
/* To cache the assets in the browser, attach an event listener to the service worker (self) to listen to the install event */
self.addEventListener("install", installEvent => {
    //use a waitUntil() method because caching is asynchronous
    installEvent.waitUntil(
        caches.open(staticApp).then(
            cache => {
                cache.addAll(assets)
            }
        )
    )
});

//fetch the cache
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})