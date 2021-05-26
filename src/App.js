
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
