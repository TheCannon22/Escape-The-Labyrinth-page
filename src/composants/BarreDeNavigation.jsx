import React from 'react';
import { Link } from 'react-router-dom';
import './BarreDeNavigation.css';

function BarreDeNavigation() {
    return (
        <nav className='BarreDeNavigation'>
            <ul>
                <li><Link to="/"> Accueil </Link> </li>
                <li><Link to="/APropos"> À propos </Link> </li>
                <li><Link to="/jouer"> Jouer </Link> </li>
            </ul>
        </nav>
    );
}

export default BarreDeNavigation;