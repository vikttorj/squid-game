import { cacheCustom } from '../utils/utils';
import { publish} from '../utils/events';

export function createUser(cacheName, name) {
    getUser(cacheName, name).then((n) => {
        if (n === undefined) {
            cacheCustom.setCacheName(cacheName, name, 0);
        } else {
            console.log('User exists: ', name);
        }
        publish('createUserEvent', {'name': name});
    })
    return;
}

export async function getUser(cacheName, url) {
    return cacheCustom.getCacheName(cacheName, url);
}

