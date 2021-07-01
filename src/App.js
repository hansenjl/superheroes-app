import HeroPage from './HeroPage'
import NavBar from './NavBar';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Switch>
          <Route path="/heroes">
            <HeroPage />
          </Route>
          <Route path="/villians">
            <h1>EVIL</h1>
          </Route>
          <Route path="/">
            <h1>Homepage</h1>
          </Route>
        </Switch>
    
      </header>
    </div>
  );
}

export default App;
