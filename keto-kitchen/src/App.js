import React from 'react';
// import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';



// const query = ""

// const BKFST_URL = ;

class App extends React.Component {
  render() {
    return (
      <Router>
      <div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/breakfast">Breakfast</Link>
          </li>
          <li>
            <Link to="/lunch">Lunch</Link>
          </li>
          <li>
            <Link to="/dinner">Dinner</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/breakfast">
            <Breakfast />
          </Route>
          <Route path="/lunch">
            <Lunch />
          </Route>
          <Route path="/dinner">
            <Dinner />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="home-div">
          <h1>Keto Kitchen</h1>
          <h2>"Low" carb recipes for every meal</h2>
      </div>
    );
  }
}
  
    
export default App;
