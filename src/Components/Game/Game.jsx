import { useState } from 'react';
import Button from '@mui/material/Button';
import './Game.css'

import NavBar from '../NavBar/NavBar'

import TungstenIcon from '@mui/icons-material/Tungsten';
import logo from './steps-icon.png';

import { countScore } from '../../services/Game'
import { getUser } from '../../services/User';

const highScore = 0;
let score = 0;

export default function Game() {
    const [name, setName] = useState('');
    getUser('GameSquid', 'user').then(name => {   
        setName(name)
    });
    return (
        <div className="content-wrapper">
            <NavBar className="navbar navbar" name={name ? name : ''} />
            <div className="game-content">
                <p>High Score: {highScore}</p>
                <div className="stoplight switched-on">
                    <TungstenIcon />
                </div>
                <p>Score: {score}</p>
                <div className="buttons">
                    <Button variant="contained" onClick={() => {countScore(0) ? score++ : score--} } startIcon={ <img src={logo} className="icon-shoes icon-left" alt="logo" />}>
                        LEFT
                    </Button>
                    <Button variant="contained" onClick={() => {countScore(1)? score++ : score--} } endIcon={<img src={logo} className="icon-shoes icon-right" alt="logo" />}>
                        RIGHT
                    </Button>
                </div>
            </div>
        </div>
    );
}