// const CACHE_NAME = 'physis-studio-cache-v1';
// const urlsToCache = [
//     '/',
//     '/css/style.css',
//     '/img/logo.png',
//     // Ajoutez toutes les ressources que vous souhaitez mettre en cache
// ];

// // Installation du Service Worker et mise en cache des ressources
// self.addEventListener('install', event => {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(cache => {
//                 console.log('Opened cache');
//                 return cache.addAll(urlsToCache);
//             })
//     );
// });

// // Activation du Service Worker et nettoyage des caches anciens
// self.addEventListener('activate', event => {
//     const cacheWhitelist = [CACHE_NAME];
//     event.waitUntil(
//         caches.keys().then(cacheNames => {
//             return Promise.all(
//                 cacheNames.map(cacheName => {
//                     if (cacheWhitelist.indexOf(cacheName) === -1) {
//                         return caches.delete(cacheName);
//                     }
//                 })
//             );
//         })
//     );
// });

// // Interception des requêtes et réponse avec le cache ou la ressource réseau
// self.addEventListener('fetch', event => {
//     event.respondWith(
//         caches.match(event.request)
//             .then(response => {
//                 if (response) {
//                     return response;
//                 }
//                 return fetch(event.request);
//             })
//     );
// });
