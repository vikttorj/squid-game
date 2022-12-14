import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import logo from '../../logo.svg';
import logoTeam from './img/team.png';
import logoSquid from './img/squid_logo.png';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { createUser } from '../../services/User';
import { unsubscribe } from '../../utils/events';
import { literals, nameEvents } from '../../utils/const';

export default function Home() {

    const [name, setName] = useState('');
    const [type, setType] = useState('info');
    const [helper, setHelper] = useState('');
    const navigate = useNavigate();
    const handleChange = (event) => {
        event?.keyCode === 13 ? pressButton() : null;
        setHelper('');
        setType('info');
        setName(event.target.value);
    };

    function pressButton() {
        if (name) {
            createUser(name);
            navigate('/game');
            unsubscribe(nameEvents?.createUser);
        } else {
            setHelper(literals?.errorHelperName);
            setType('error');
        }
    }

    return (
        
        <section className="home">
            <div className='logo'>
                <img src={logoSquid} className="App-logo-squid" alt="logo team" />
                <img src={logoTeam} className="App-logo-team" alt="logo squid" />
            </div>
            <div className="main">
                <img src={logo} className="App-logo" alt="logo" />
                <h3 className="App-title">New player</h3>

                <TextField label="Name" id="name-field"
                    variant="standard"
                    color="secondary"
                    error={(type === 'info') ? false : true}
                    value={name}
                    onChange={handleChange}
                    onKeyUp={handleChange}
                    helperText={(helper)}
                    fullWidth
                    focused />
                <Button label="Join" 
                    color="secondary"
                    variant="contained" 
                    fullWidth
                    onClick={() => {pressButton();}}>Join</Button>
            </div>
        </section>
    );
} 