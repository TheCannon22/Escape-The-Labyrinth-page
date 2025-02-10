import logo from './logo.svg';
import './App.css';
import BarreDeNavigation from './composants/BarreDeNavigation';
import DescriptionDuJeu from './composants/DescriptionDuJeu';
import PiedDePage from './composants/PiedDePage';

function App() {
  return (
    <div className="App">
      <BarreDeNavigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Welcome to Escape The Labyrinth</h1>
        <p> Get ready for an exciting adventure through a mysterious maze! </p>
      </header>
      <DescriptionDuJeu />
      <PiedDePage />
    </div>
  );
}

export default App;
