import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import './Game.css'

import NavBar from '../NavBar/NavBar'

import TungstenIcon from '@mui/icons-material/Tungsten';
import logo from './steps-icon.png';

import { countScore, getHighScore, lightSwitch } from '../../services/Game'
import { getUser } from '../../services/User';

export default function Game() {
    const [name, setName] = useState('');
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
    });

    function pressButton(btn) {
       // isRed ? setHighScore(0) : null;
        countScore(btn, highScore) ? setScore(score + 1) : setScore(score - 1);
    }

    return (
        <div className="content-wrapper">
            <NavBar className="navbar navbar" name={name ? name : ''} />
            <div className="game-content">
                <p>High Score: {highScore >= score ? highScore : setHighScore(score)}</p>
                <div className="stoplight">
                    <TungstenIcon sx={{ color: lightSwitch(score) }} />
                </div>
                <p>Score: {score < 0 ? setScore(0) : score}</p>
                <div className="buttons">
                    <Button variant="contained"
                        onClick={() => { pressButton('l') }}
                        startIcon={<img src={logo}
                        className="icon-shoes icon-left" 
                        alt="logo" />}>
                        LEFT
                    </Button>
                    <Button variant="contained"
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