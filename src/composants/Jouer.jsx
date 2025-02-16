import './Jouer.css';

function Jouer() {
    return (
        <div className='Jouer'>
            <section className="contenu">
            <h1>Jouer à Escape The Labyrinth</h1>
                <p className="sous-titre">Téléchargez le jeu ou jouez en ligne dès maintenant !</p>

                <div className="options-jeu">
                    <a href="/telechargement/EscapeTheLabyrinth.zip" className="bouton-telechargement" download>
                        Télécharger le jeu
                    </a>
                    <a href="/version-web" className="bouton-jouer">
                        Jouer en ligne
                    </a>
                </div>

                <div className="configuration">
                    <h2>Configuration Requise</h2>
                    <ul>
                        <li>OS: Windows 10/11</li>
                        <li>Taille du fichier : 1.5 Go</li>
                        <li>Moteur de jeu : Unreal Engine</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Jouer;