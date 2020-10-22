import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    await cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(request) {
    const response = await caches.match(request);
    if (response) {
      return response;
    }
    const fetch = await this._fetchRequest(request);
    return fetch;
  },

  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _fetchRequest(request) {
    const response = await fetch(request);
    if (!response || response.status !== 200) {
      return response;
    }
    await this._addCache(request);
    return response;
  },

  async _addCache(request) {
    const cache = await this._openCache();
    await cache.add(request);
  },

  async networkFirst(request) {
    return fetch(request)
      .then(async (response) => {
        await this._addCache(request);
        return response;
      })
      .catch(async () => {
        const matchCaches = await caches.match(request);
        return matchCaches;
      });
  },
};

export default CacheHelper;
