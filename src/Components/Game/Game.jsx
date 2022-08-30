import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import './Game.css'

import NavBar from '../NavBar/NavBar'

import TungstenIcon from '@mui/icons-material/Tungsten';
import logo from './steps-icon.png';

import { countScore, getHighScore } from '../../services/Game'
import { getUser } from '../../services/User';

export default function Game() {
    const [name, setName] = useState('');
    const [fail, setFail] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [colorLight, setColorLight] = useState('springgreen');

    useEffect(() => {
        getUser('GameSquid', 'user').then(name => {
            setName(name);
        });
        getHighScore('GameSquid', 'highScore').then(hS => {
            setHighScore(hS);
        });
        lightSwitch(score)
    });

    function pressButton(btn) {
        if (colorLight == 'red') {
            setFail(true);
            setScore(0);
            window?.navigator?.vibrate ?  window.navigator.vibrate(500) : null;
        } else {
            countScore(btn, highScore) ? setScore(score + 1) : setScore(score - 1);
        }
    }

    let color = 'springgreen';
    let time = 10000; // 10 seconds
    let intervalID;
    function lightSwitch(score) {
        // red          3 seconds
        // springgreen  10 seconds or max(10000 - score * 100, 2000) + random(-1500, 1500)
        if (color == 'red') {
            time = 3000;
        } else if (score > 0) {
            time = Math.max(10000 - score * 100, 2000) + Math.random(-1500, 1500)
        }
        if (!intervalID) {
            intervalID = setTimeout(() => { flashText(); }, parseInt(time));
        }
        function flashText() {
            if (colorLight === 'red') {
                color = 'springgreen';
            } else {
                color = 'red';
            }
            setFail(false);
            setColorLight(color);
        }
    }



    return (
        <div className="content-wrapper">
            <NavBar className="navbar navbar" name={name ? name : ''} />
            <div className="game-content">
                <p className="game-score">High Score: <span>{highScore >= score ? highScore : setHighScore(score)}</span></p>
                <div className="stoplight">
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