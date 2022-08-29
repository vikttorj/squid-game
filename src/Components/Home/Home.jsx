import { useState } from 'react';
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



export default function Home({ name }) {

    return (
        <section className="home">
            <img src={logo} className="App-logo" alt="logo" />
            <h3 className="App-title">Create new player</h3>
            <TextField label="Name" id="name" fullWidth required focused />
            <Button label="Join" fullWidth variant="contained" onClick={() => {console.log(name)} }>Join</Button>
        </section>
    );
} 