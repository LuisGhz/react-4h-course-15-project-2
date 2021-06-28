import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'routes/Home'
import NavBar from 'components/NavBar';
import Favorites from 'components/Favorites';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/favorites" component={ Favorites } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
