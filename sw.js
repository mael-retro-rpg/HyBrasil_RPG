const CACHE_NAME = 'hybrasil-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon.png'
];

// Instala o Service Worker e guarda os arquivos básicos no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Intercepta as requisições
self.addEventListener('fetch', event => {
  // Ignora as chamadas para a API do Gemini, elas precisam ir para a rede sempre
  if (event.request.url.includes('generativelanguage.googleapis.com')) {
      return;
  }
  
  // Para o resto (imagens, html, css), tenta buscar do cache primeiro para carregar rápido
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request);
      })
  );
});