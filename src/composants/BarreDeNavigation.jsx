import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BarreDeNavigation.css';

function BarreDeNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='BarreDeNavigation'>
            <button className='menu-toggle' onClick={toggleMenu}>
                ☰
            </button>
            <ul className={isOpen ? 'open' : ''}>
                <li><Link to="/"> Accueil </Link> </li>
                <li><Link to="/APropos"> À propos </Link> </li>
                <li><Link to="/jouer"> Jouer </Link> </li>
            </ul>
        </nav>
    );
}

export default BarreDeNavigation;