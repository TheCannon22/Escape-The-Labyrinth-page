import React from 'react';
import './APropos.css';
import BarreDeNavigation from './BarreDeNavigation';
import PiedDePage from './PiedDePage';

function APropos() {
    return (
        <div className='APropos'>
            <section className="contenu">
                <h1>À propos de "Escape The Labyrinth"</h1>
                <p>
                    "Escape The Labyrinth" est un jeu d'aventure où les joueurs doivent naviguer dans un labyrinthe rempli d'énigmes et de pièges.
                    Le jeu met à l'épreuve votre capacité à résoudre des casse-têtes et à trouver la sortie avant qu'il ne soit trop tard.
                </p>
                <p>
                    Développé avec passion, ce jeu offre une atmosphère immersive et une expérience de jeu captivante. Oserez-vous relever le défi ?
                </p>

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
            </section>
        </div>
    );
}

export default APropos;