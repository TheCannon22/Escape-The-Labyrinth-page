import React from 'react';
import './PiedDePage.css';
import '@fortawesome/fontawesome-free/css/all.css';

function PiedDePage() {
    return (
        <div className='PiedDePage'>
            <div className='social-icons'>
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-facebook-f'></i>
                </a>
                <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-twitter'></i>
                </a>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-instagram'></i>
                </a>
            </div>
            <p>&copy; 2025 Escape The Labyrinth | Tous droits réservés à Alexander Rankov</p>
        </div>
    );
}

export default PiedDePage;