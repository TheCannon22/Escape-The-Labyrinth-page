import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BarreDeNavigation from './composants/BarreDeNavigation';
import DescriptionDuJeu from './composants/DescriptionDuJeu';
import PiedDePage from './composants/PiedDePage';
import APropos from './composants/APropos';
import banniere from './assets/banniere.jpg';

function App() {
  return (
    <Router>
      <div className="App">
        <BarreDeNavigation />
        <Routes>
          <Route path="/" element={
            <>
              <header className="App-header">
                <img src={banniere} alt="Escape The Labyrinth" className="banniere" />
                <div className="header-content">
                  <h1>Escape The Labyrinth</h1>
                  <p>Un jeu palpitant où chaque tournant du labyrinthe réserve des surprises et des défis !</p>
                </div>
              </header>
              {/* <DescriptionDuJeu /> */}
            </>
          } />
          <Route path="/APropos" element={<APropos />} />
          <Route path="/jouer" />
        </Routes>
        <PiedDePage />
      </div>
    </Router>
  );
}

export default App;