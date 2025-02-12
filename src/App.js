import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BarreDeNavigation from './composants/BarreDeNavigation';
import DescriptionDuJeu from './composants/DescriptionDuJeu';
import PiedDePage from './composants/PiedDePage';
import APropos from './composants/APropos';

function App() {
  return (
    <Router>
      <div className="App">
        <BarreDeNavigation />
        <Routes>
          <Route path="/" element={
            <>
              <header className="App-header">
                <h1>Welcome to Escape The Labyrinth</h1>
                <p>Get ready for an exciting adventure through a mysterious maze!</p>
              </header>
              <DescriptionDuJeu />
            </>
          } />
          <Route path="/APropos" element={<APropos />} />
          <Route path="/jouer"/>
        </Routes>
        <PiedDePage />
      </div>
    </Router>
  );
}

export default App;