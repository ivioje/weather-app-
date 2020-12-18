const staticApp = "cool-weather-app-v1"
const assets = [
    "/",
    "/index.html",
    "/css/styles.css",
    "/js/index.js",
    "/images/Blogo 1-152.png",
    "/images/Blogo 1-192.png",
    "/images/Blogo 1-384.png",
    "/images/Blogo 1128.png",
    "/images/Blogo-72.png",
    "/images/Blogo-92.png",
    "/images/Blogo-144.png",
    "/images/Blogo-512.png",
    "/images/Blogo.png",
    "/images/city.jpg",
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