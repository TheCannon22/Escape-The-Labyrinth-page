import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import BarreDeNavigation from './composants/BarreDeNavigation';
import PiedDePage from './composants/PiedDePage';
import APropos from './composants/APropos';
import Jouer from './composants/Jouer';
import banniere from './assets/banniere.jpg';
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
                    <p>Créé par Alexander Rankov, Escape The Labyrinth est un jeu d'aventure immersif...</p>
                    <p>Le concept du jeu est né lors de longues nuits de réflexion...</p>
                    <p>Pourquoi un labyrinthe ? Parce que chaque joueur aime se perdre pour mieux se retrouver...</p>
                    <p>Le but est simple : s'échapper du labyrinthe en résolvant des énigmes...</p>
                    <p>Créé avec React et les dernières pratiques en développement web...</p>
                    <p>Je vous invite à plonger dans cet univers...</p>
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