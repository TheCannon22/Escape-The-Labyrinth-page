import React from 'react';
import './BarreDeNavigation.css';

function BarreDeNavigation() {
    return (
        <nav className='BarreDeNavigation'>
            <ul>
                <li><a href="/"> Accueil </a></li>
                <li><a href="/a-propos"> À propos </a></li>
                <li><a href="/jouer"> Jouer </a></li>
            </ul>
        </nav>
    );
}

export default BarreDeNavigation;