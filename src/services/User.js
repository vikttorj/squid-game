export function createUser(name) {
    addDataIntoCache('GameSquid', 'user', name);
    return;
}

export async function getUser(cacheName, url) {
    if (typeof caches === 'undefined') return false;

    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);

    return cachedResponse.json().then((item) => {
        return item;
    });
}

/**
 * Functions User
 */
const addDataIntoCache = (cacheName, url, response) => {
    try {
        const data = new Response(JSON.stringify(response));

        if ('caches' in window) {
            caches.open(cacheName).then((cache) => {
                cache.put(url, data);
            });
        }
    } catch (err) { console.error(err); }
};