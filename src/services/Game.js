import { cacheCustom } from '../utils/utils';

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

let color = 'springgreen';
let time = 10000; // 10 seconds

export function lightSwitch(score) {
    // red          3 seconds
    // springgreen  10 seconds or max(10000 - score * 100, 2000) + random(-1500, 1500)
    if (color == 'red') {
        time = 3000;
    } else if (score > 0) {
        time = Math.max(10000 - score * 100, 2000) + Math.random(-1500, 1500)
    }

    // if (!nIntervId) {
        console.log(time, parseInt(time))
        let nIntervId 
        // = setInterval(flashText, parseInt(time));
        console.log(nIntervId)
    // }

    function flashText() {
        if (color === 'red') {
            color = 'springgreen';
        } else {
            color = 'red';
        }
        

        clearInterval(nIntervId);
        // liberar nuestro inervalId de la variable
        nIntervId = null;
        lightSwitch(score)
    }

    return color;
    
}