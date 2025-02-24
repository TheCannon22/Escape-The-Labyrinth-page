import React, { useEffect, useState } from 'react';
import './APropos.css';

function APropos() {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const content = document.querySelector('.contenu');
            const contentTop = content.getBoundingClientRect().top;
            const contentHeight = content.offsetHeight;

            if (contentTop + contentHeight > window.innerHeight) {
                setInView(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='APropos'>
            <section className={`contenu ${inView ? 'in-view' : ''}`}>
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

                <div className="equipe">
                    <h2>Équipe</h2>
                    <div className="membre">
                        <h3>Alexander Rankov</h3>
                        <p>Développeur principal et créateur du projet « Échapper au labyrinthe » ("Escape The Labyrinth" en anglais). Passionné par la programmation de jeux vidéo, j'ai utilisé Unreal Engine, les Blueprints et un peu de C++ pour créer ce jeu. J'adore concevoir des expériences immersives et des énigmes captivantes.</p>
                        <p>Contactez-moi à : <a href="">alexanderrankov@gmail.com</a></p>
                    </div>
                </div>

                <div className="details">
                    <h2>Caractéristiques du jeu</h2>
                    <ul>
                        <li>Développé avec Unreal Engine, les Blueprints et un peu de C++</li>
                        <li>Expérience immersive avec des graphismes et une ambiance sonore soignée</li>
                        <li>Projet de fin d’études mettant en valeur mes compétences en programmation de jeux, mes compétences en design et mes compétences en intégration</li>
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
