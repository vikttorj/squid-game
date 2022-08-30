import { cacheCustom } from '../utils/utils';

let prevPulsation = '';
const cacheName = 'GameSquidUser';
export const countScore = (pulsation, name, score) => {
    saveScore(cacheName, name, score)
    let success = (prevPulsation != pulsation);
    console.log(success);
    prevPulsation = pulsation;
    return success;
}

export async function getHighScore(cacheName, url) {
    return cacheCustom.getCacheName(cacheName, url);
}

export function saveScore(cacheName, name, score) {
    cacheCustom.setCacheName(cacheName, name, score + 1);
}
