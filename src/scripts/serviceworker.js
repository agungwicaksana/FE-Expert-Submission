/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import API_ENDPOINT from './globals/api-endpoint';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  // Avoid error. Data from API changes every 15 minutes.
  if (event.request.url.includes(API_ENDPOINT.LIST)) {
    event.respondWith(CacheHelper.networkFirst(event.request));
  } else {
    event.respondWith(CacheHelper.revalidateCache(event.request));
  }
});
