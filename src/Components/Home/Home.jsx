import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const [type, setType] = useState('info');
    const [helper, setHelper] = useState('');
    const navigate = useNavigate();
    const handleChange = (event) => {
        setHelper('');
        setType('info')
        setName(event.target.value);
    };


    return (
        <section className="home">
            <img src={logo} className="App-logo" alt="logo" />
            <h3 className="App-title">Create new player</h3>

            <TextField label="Name" id="name-field"
                error={(type == 'info') ? false : true}
                value={name}
                onChange={handleChange}
                helperText={(helper)}
                fullWidth
                required
                focused />
            <Button label="Join" fullWidth variant="contained" onClick={() => {
                if (name) {
                    createUser(name);
                    navigate('/game');
                } else {
                    setHelper('Name necessary');
                    setType('error')
                }
            }}>Join</Button>
        </section>
    );
} 