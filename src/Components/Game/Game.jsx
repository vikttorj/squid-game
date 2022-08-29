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
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        getUser('GameSquid', 'user').then(name => {
            setName(name);
        });
        getHighScore('GameSquid', 'highScore').then(hS => {
            setHighScore(hS);
        });
    });

    return (
        <div className="content-wrapper">
            <NavBar className="navbar navbar" name={name ? name : ''} />
            <div className="game-content">
                <p>High Score: {highScore >= score ? highScore : setHighScore(score)}</p>
                <div className="stoplight switched-on">
                    <TungstenIcon />
                </div>
                <p>Score: {score < 0 ? setScore(0) : score}</p>
                <div className="buttons">
                    <Button variant="contained" onClick={() => {
                        countScore('l', highScore) ? setScore(score + 1) : setScore(score - 1);
                    }} startIcon={<img src={logo} className="icon-shoes icon-left" alt="logo" />}>
                        LEFT
                    </Button>
                    <Button variant="contained" onClick={() => {
                        countScore('r', highScore) ? setScore(score + 1) : setScore(score - 1);
                    }} endIcon={<img src={logo} className="icon-shoes icon-right" alt="logo" />}>
                        RIGHT
                    </Button>
                </div>
            </div>
        </div>
    );
}