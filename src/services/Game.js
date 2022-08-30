import { cacheCustom } from '../utils/utils';
import { nameCache } from '../utils/const';

let prevPulsation = '';
const cacheName = nameCache?.user;
export const countScore = (pulsation, name, score) => {
    saveScore(cacheName, name, score);
    let success = (prevPulsation !== pulsation);
    prevPulsation = pulsation;
    return success;
}

export async function getHighScore(url) {
    return cacheCustom.getCacheName(cacheName, url);
}

export async function saveScore(cacheName, name, score) {
    await cacheCustom.setCacheName(cacheName, name, score + 1);
}
