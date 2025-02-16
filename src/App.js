import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
              <header className="App-header">
                <img src={logo} alt='Escape The Labyrinth logo' className='App-Logo'/>
                <img src={banniere} alt="Escape The Labyrinth" className="banniere" />
                <div className="header-content">
                  <h1>Escape The Labyrinth</h1>
                  <p>Un jeu palpitant où chaque tournant du labyrinthe réserve des surprises et des défis !</p>
                </div>
              </header>
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