const staticAssets = [
    './index.mobile.html',
    './assets/vendor/bootstrap/css/bootstrap.css',
    './assets/css/build.css',
    './assets/css/font-awesome.min.css',
    './assets/vendor/bootstrap/jquery-3.2.1.min.js',
    './assets/fonts/fontawesome-webfont.woff?v=4.7.0',
    './assets/fonts/fontawesome-webfont.woff2?v=4.7.0',
    './language_switcher.js',
    './assets/img/background.png',
    './assets/img/logo-apple.png',
    './assets/img/logo-asus.png',
    './assets/img/logo-bbc.png',
    './assets/img/logo-cisco.png',
    './assets/img/logo-cnn.png',
    './assets/img/logo-google.png',
    './assets/img/logo-intel.png',
    './assets/img/logo-microsoft.png',
    './assets/img/logo-qualcom.png',
    './assets/img/logo-switch.png',
    './assets/img/logo-yahoo.png',
    './assets/img/meet-the-team-1.jpg',
    './assets/img/meet-the-team-2.jpg',
    './assets/img/meet-the-team-3.jpg',
    './assets/img/meet-the-team-4.jpg',
    './assets/img/meet-the-team-5.jpg',
    './assets/img/our-latest-work-pic1.jpg',
    './assets/img/our-latest-work-pic2.jpg',
    './assets/img/our-latest-work-pic3.jpg',
    './assets/img/our-latest-work-pic4.jpg',
    './assets/img/our-latest-work-pic5.jpg',
    './assets/img/our-latest-work-pic6.jpg',
    './assets/img/our-latest-work-pic7.jpg',
    './assets/img/our-latest-work-pic8.jpg',
    './assets/img/recent-posts-pic1.jpg',
    './assets/img/recent-posts-pic2.jpg',
    './assets/img/recent-posts-pic3.jpg',
    './assets/img/recent-posts-pic4.jpg',
    './assets/img/recent-posts-pic5.jpg',
    './assets/img/sprite1.png',
    './assets/img/what-we-do-pic1.png',
    './assets/img/what-we-do-pic2.png',
    './assets/img/what-we-do-pic3.png',
    './text-en.json',
];

self.addEventListener('install', async event => {
    const cache = await caches.open('news-static');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);
    
    if(url.origin === location.origin){
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkFirst(req));
    }
});

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open('news-dynamic');
    
    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (error) {
        return await cache.match(req);
    }
}