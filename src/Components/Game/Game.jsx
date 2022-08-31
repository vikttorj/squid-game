import { useState, useEffect } from 'react';
import './Game.css';

import NavBar from '../NavBar/NavBar';
import Button from '@mui/material/Button';
import TungstenIcon from '@mui/icons-material/Tungsten';
import logo from './img/steps-icon.png';
import lightRed from './img/light_red.png';
import lightGreen from './img/light_green.png';

import { countScore, getHighScore } from '../../services/Game'
import { getUser } from '../../services/User';
import { gameProps } from '../../utils/const';

export default function Game({ props }) {
    const [name, setName] = useState(props?.name);
    const [fail, setFail] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [colorLight, setColorLight] = useState(gameProps?.initialColor);

    useEffect(() => {
        setName(props?.name);
        lightSwitch(score);
    });

    // First render
    useEffect(() => {
        getUser(name).then(sco => {
            console.log(sco);
            sco === undefined ? setScore(0) : setScore(sco);
        });
        getHighScore(name).then(score => {
            setHighScore(score);
        });
    }, []);

    function pressButton(btn) {
        if (colorLight === gameProps?.colorStop) {
            setFail(true);
            setScore(0);
            window?.navigator?.vibrate ? window.navigator.vibrate(500) : null;
        } else {
            countScore(btn, name, highScore) ? setScore(score + 1) : setScore(score - 1);
        }
    }

    let color = gameProps?.initialColor;
    let time = gameProps?.initialTime; // 10 seconds
    let intervalID;
    function lightSwitch(score) {
        // red          3 seconds
        // springgreen  10 seconds or max(10000 - score * 100, 2000) + random(-1500, 1500)
        if (color === gameProps?.colorStop) {
            time = 3000;
        } else if (score > 0) {
            time = Math.max(10000 - score * 100, 2000) + Math.random(-1500, 1500);
        }
        if (!intervalID) {
            intervalID = setTimeout(() => { flashText(); }, parseInt(time));
        }
        function flashText() {
            if (colorLight === gameProps?.colorStop) {
                color = gameProps?.colorWalk;
            } else {
                color = gameProps?.colorStop;
            }
            setFail(false);
            setColorLight(color);
        }
    }

    return (
        <div className="content-wrapper">
            <NavBar className="navbar navbar" name={name} />
            <div className="game-content">
                <p className="game-score">High Score: <span>{highScore >= score ? highScore : setHighScore(score)}</span></p>
                <div className="stoplight box-container-img">
                    <div className={colorLight == 'red' ? `${colorLight} img-game active` : `${colorLight} img-game`}>
                        <img src={lightRed} 
                            className={colorLight == 'red' ? 'img-game active' : 'img-game'} alt="imagen red" />
                        <img src={lightGreen} 
                            className={colorLight == 'springgreen' ? 'img-game active' : 'img-game'} alt="imagen green" />
                    </div>
                    <TungstenIcon sx={{ color: colorLight }} />
                </div>
                <p className="game-score">Score: <span className={fail ? 'game-score-fail' : 'game-score-success'}>{score < 0 ? setScore(0) : score}</span></p>
                <div className="buttons">
                    <Button variant="contained"
                        color="secondary"
                        onClick={() => { pressButton('l') }}
                        startIcon={<img src={logo}
                            className="icon-shoes icon-left"
                            alt="logo" />}>
                        LEFT
                    </Button>
                    <Button variant="contained"
                        color="secondary"
                        onClick={() => { pressButton('r') }}
                        endIcon={<img src={logo}
                            className="icon-shoes icon-right"
                            alt="logo" />}>
                        RIGHT
                    </Button>
                </div>
            </div>
        </div>
    );
}