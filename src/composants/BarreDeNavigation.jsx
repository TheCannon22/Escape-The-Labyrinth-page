import React from 'react';
import { Link } from 'react-router-dom';
import './BarreDeNavigation.css';

function BarreDeNavigation() {
    return (
        <nav className='BarreDeNavigation'>
            <ul>
                <li><a href="/"> Accueil </a></li>
                <li><a href="/APropos"> À propos </a></li>
                <li><a href="/jouer"> Jouer </a></li>
            </ul>
        </nav>
    );
}

export default BarreDeNavigation;