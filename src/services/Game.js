import { cacheCustom } from '../utils/utils';
import { nameCache } from '../utils/const';

let prevPulsation = '';
const cacheName = nameCache?.user;
export const countScore = (pulsation, name, score) => {
    saveScore(cacheName, name, score)
    let success = (prevPulsation !== pulsation);
    prevPulsation = pulsation;
    return success;
}

export async function getHighScore(cacheName, url) {
    return cacheCustom.getCacheName(cacheName, url);
}

export function saveScore(cacheName, name, score) {
    cacheCustom.setCacheName(cacheName, name, score + 1);
}
