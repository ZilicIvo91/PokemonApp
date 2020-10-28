import React from 'react';
import './Navbar.scss';
import Poke_Ball from '../../images/Poke_Ball.png';

export default function Navbar() {
    return (
        <div className="navbar-container">
            <img src={Poke_Ball} alt="Poke_Ball" />
            <h1>Pokemon Application</h1>
        </div>
    )
}
