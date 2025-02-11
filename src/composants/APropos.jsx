import React from 'react';
import './APropos.css';
import BarreDeNavigation from './BarreDeNavigation';
import PiedDePage from './PiedDePage';

function APropos() {
    return (
        <div className='APropos'>
            <BarreDeNavigation />
            <section className="contenu">
                <h1>À propos de "Escape The Labyrinth"</h1>
                <p>
                    "Escape The Labyrinth" est un jeu d'aventure où les joueurs doivent naviguer dans un labyrinthe rempli d'énigmes et de pièges.
                    Le jeu met à l'épreuve votre capacité à résoudre des casse-têtes et à trouver la sortie avant qu'il ne soit trop tard.
                </p>
                <p>
                    Développé avec passion, ce jeu offre une atmosphère immersive et une expérience de jeu captivante. Oserez-vous relever le défi ?
                </p>
            </section>
            <PiedDePage />
        </div>
    );
}

export default APropos;