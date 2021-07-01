import HeroPage from './HeroPage'
import NavBar from './NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <HeroPage />
      </header>
    </div>
  );
}

export default App;
