import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import logo from '../../logo.svg';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { createUser } from '../../services/User';
import { unsubscribe } from '../../utils/events';

export default function Home() {

    const [name, setName] = useState('');
    const [type, setType] = useState('info');
    const [helper, setHelper] = useState('');
    const navigate = useNavigate();
    const handleChange = (event) => {
        event?.keyCode == 13 ? pressButton() : null;
        setHelper('');
        setType('info');
        setName(event.target.value);
    };

    function pressButton() {
        if (name) {
            createUser('GameSquidUser', name);
            unsubscribe('createUserEvent');
            navigate('/game');
        } else {
            setHelper('Name necessary');
            setType('error');
        }
    }

    return (
        <section className="home">
            <img src={logo} className="App-logo" alt="logo" />
            <h3 className="App-title">Create new player</h3>

            <TextField label="Name" id="name-field"
                color="secondary"
                error={(type == 'info') ? false : true}
                value={name}
                onChange={handleChange}
                onKeyUp={handleChange}
                helperText={(helper)}
                fullWidth
                required
                focused />
            <Button label="Join" 
                color="secondary"
                variant="contained" 
                fullWidth
                onClick={() => {pressButton();}}>Join</Button>
        </section>
    );
} 