import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import BarreDeNavigation from './composants/BarreDeNavigation';
import PiedDePage from './composants/PiedDePage';
import APropos from './composants/APropos';
import Jouer from './composants/Jouer';
import banniere from './assets/banniere.png';
import logo from './assets/EscapeTheLabyrinth-Logo.png';

function App() {
  return (
    <Router>
      <div className="App">
        <BarreDeNavigation />
        <Routes>
          <Route path="/" element={
            <>
              <motion.header 
                className="App-header"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.img 
                  src={logo} 
                  alt='Escape The Labyrinth logo' 
                  className='App-Logo'
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
                <motion.img 
                  src={banniere} 
                  alt="Escape The Labyrinth" 
                  className="banniere"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                />
                <motion.div 
                  className="header-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <h1>Escape The Labyrinth</h1>
                  <p>Un jeu palpitant où chaque tournant du labyrinthe réserve des surprises et des défis !</p>
                  <motion.div 
                    className="header-info"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    <p>Créé par Alexander Rankov, Escape The Labyrinth est un jeu d'aventure et d'exploration immersif</p>
                    <p>Le concept du jeu était né lors de mon cours « Méthodes de recherche et préparation au marché du travail ». On devait choisir une nouvelle technologie dont on n'avait jamais utilisé, puis j'ai décidé d'utiliser Unreal Engine et créer un labyrinthe</p>
                    <p>Pourquoi un labyrinthe ? Parce que chaque joueur aime se perdre pour mieux se retrouver et je n'avais jamais fait un jeu avec un labyrinthe.</p>
                    <p>Le but est simple : s'échapper du labyrinthe en survivant les différents obstacles dans le jeu</p>
                    <p>Créé avec React et les dernières pratiques en développement web...</p>
                    <p>Je vous invite à plonger dans cet univers...</p>
                    <h2>Caractéristiques du Jeu</h2>
                    <h2>Comment Jouer</h2>
                    <p>Utilisez les touches fléchées pour vous déplacer dans le labyrinthe, la barre d'espacement pour sauter et le bouton "Esc" pour ouvrir le menu de pause. Évitez les obstacles et trouvez la sortie pour gagner !</p>
                    <h2>FAQ</h2>
                    <p><strong>Q: Combien de niveaux y a-t-il dans le jeu ?</strong></p>
                    <p>R: Le jeu comporte actuellement 1 niveaux, le labyrinthe au complet.</p>
                    <p><strong>Q: Puis-je jouer au jeu sur mon téléphone ?</strong></p>
                    <p>R: Non, le jeu est seulement compatible sur PC.</p>
                    <p><strong>Q: Y a-t-il des achats intégrés dans le jeu ?</strong></p>
                    <p>R: Non, le jeu est entièrement gratuit sans achats intégrés.</p>
                  </motion.div>
                </motion.div>
              </motion.header>
            </>
          } />
          <Route path="/APropos" element={<APropos />} />
          <Route path="/jouer" element={<Jouer />} />
        </Routes>
        <PiedDePage />
      </div>
    </Router>
  );
}

export default App;