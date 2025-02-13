import React from 'react';
import './APropos.css';
import BarreDeNavigation from './BarreDeNavigation';
import PiedDePage from './PiedDePage';

function APropos() {
    return (
        <div className='APropos'>
            <section className="contenu">
                <h1>Échapper au labyrinthe</h1>
                <p className="sous-titre">Un défi d'énigmes et de survie dans un labyrinthe mystérieux</p>

                <div className="trailer-container">
                    <iframe
                        width="800"
                        height="450"
                        src="https://www.youtube.com/embed/TON_LIEN_DE_TRAILER"
                        title="Escape The Labyrinth - Trailer"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="details">
                    <h2>Caractéristiques du jeu</h2>
                    <ul>
                        <li>Développé avec Unreal Engine, les Blueprints et C++</li>
                        <li>Utilise Blueprints et Unreal Engine pour certaines mécaniques</li>
                        <li>Expérience immersive avec des graphismes et une ambiance sonore soignée</li>
                        <li>Puzzles interactifs et niveaux de difficulté progressive</li>
                        <li>Projet de fin d’études mettant en valeur mes compétences en programmation de jeux</li>
                    </ul>
                </div>

                <div className="galerie">
                    <h2>Captures d’écran</h2>
                    <div className="images">
                        <img src="/images/screenshot1.jpg" alt="Capture d’écran du jeu 1" />
                        <img src="/images/screenshot2.jpg" alt="Capture d’écran du jeu 2" />
                        <img src="/images/screenshot3.jpg" alt="Capture d’écran du jeu 3" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default APropos;