import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../../logo.svg';

import { createTheme } from '@mui/material/styles';
import cyan from '@mui/material/colors/cyan';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { createUser } from '../../services/User';

const theme = createTheme({
    palette: {
        primary: cyan,
    },
});

export default function Home() {

    const [name, setName] = useState('');
    const handleChange = (event) => {
        setName(event.target.value);
    };
    return (
        <section className="home">
            <img src={logo} className="App-logo" alt="logo" />
            <h3 className="App-title">Create new player</h3>
            <TextField label="Name" id="name" value={name} onChange={handleChange} fullWidth required focused />
            <Link className='game-button' to='/game'>
                <Button label="Join" fullWidth variant="contained" onClick={() => { createUser(name) }}>Join</Button>
            </Link>
        </section>
    );
} 