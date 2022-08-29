import * as React from 'react';

import { Link } from 'react-router-dom';
import './NavBar.css'

import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar({ name }) {
    return (
        <div className="navbar">
            <div className="navbar-inner">
                <h4 className="navbar-header">Hi, {name}</h4>
                <Link className='home-button' to='/'>
                    <IconButton aria-label="delete">
                        <LogoutIcon />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
}
