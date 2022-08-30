import { cacheCustom } from '../utils/utils';
import { publish } from '../utils/events';
import { nameEvents, nameCache } from '../utils/const'

const cacheName = nameCache?.user;
export function createUser(name) {
    getUser(cacheName, name).then((n) => {
        if (n === undefined) {
            cacheCustom.setCacheName(cacheName, name, 0);
        } else {
            console.log('User exists: ', name);
        }
        publish(nameEvents?.createUser, {'name': name});
    })
    return;
}

export async function getUser(cacheName, url) {
    return cacheCustom.getCacheName(cacheName, url);
}

