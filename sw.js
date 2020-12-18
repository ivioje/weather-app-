const staticApp = "cool-weather-app-v1"
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

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticApp).then(
            cache => {
                cache.addAll(assets)
            }
        )
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})