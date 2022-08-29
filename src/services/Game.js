import  {cacheCustom} from '../utils/utils';

let prevPulsation = '';
export const countScore = (pulsation, highScore) => {
    saveHighScore(highScore);
    let success = (prevPulsation != pulsation);
    prevPulsation = pulsation;
    return success;
}

export async function getHighScore(cacheName, url) {
    return cacheCustom.getCacheName(cacheName, url);
}

function saveHighScore(highScore) {
    cacheCustom.setCacheName('GameSquid', 'highScore', highScore);
}

