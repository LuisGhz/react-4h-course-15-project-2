import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'routes/Home'
import EditForm from 'routes/EditForm';
import NavBar from 'components/NavBar';
import Favorites from 'components/Favorites';
import NoteDetail from 'components/NoteDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/note/:id" component={ NoteDetail } />
          <Route exact path="/edit-note/:id" component={ EditForm } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
