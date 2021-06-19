import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'routes/Home'
import NavBar from 'components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
