export function createUser(name) {

    console.log(name);
    addDataIntoCache('GameSquid', 'user', name);

    return name;
}


const addDataIntoCache = (cacheName, url, response) => {
    try {
        const data = new Response(JSON.stringify(response));

        if ('caches' in window) {
            caches.open(cacheName).then((cache) => {
                console.log(url)
                cache.put(url, data);
            });
        }
    } catch (err) { console.error(err); }
};