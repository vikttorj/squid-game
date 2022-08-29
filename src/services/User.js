import  {cacheCustom} from '../utils/utils';

export function createUser(name) {
    cacheCustom.setCacheName('GameSquid', 'user', name);
    return;
}

export async function getUser(cacheName, url) {
    return cacheCustom.getCacheName(cacheName, url);
}

