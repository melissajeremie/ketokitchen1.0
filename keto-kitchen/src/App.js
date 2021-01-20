import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Recipe from './Recipe'


const APP_ID = "879706d9";
const APP_KEY = "44acc469b344fb4332aa8c272ec92c00";

const URL = `https://api.edamam.com/search?q=breakfast&diet=low-carb&high-protein&app_id=${APP_ID}&app_key=${APP_KEY}`;

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
        </ul>

        <Switch>
          <Route path="/breakfast">
            <Breakfast />
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
          <h2>Low-carb recipes for every meal</h2>
      </div>
    );
  }
}


class Breakfast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.searchBkfst = this.searchBkfst.bind(this);
  }

async getBkfst() {
  try {
    const res = await axios.get(URL);
    this.setState({recipes: res.data});
  } catch(e) {
    console.error(e);
  }
}

async searchBkfst(e) {
  e.preventDefault();

  const { label, image, ingredientLines } = this.state;

  const recipe = { label, image, ingredientLines };
}

componentDidMount() {
  this.getBkfst();
}


  render() {
    return (
      <div className="breakfast-div">
          <h1>Keto Kitchen</h1>
          <h3>Breakfast Recipes</h3>
          <form onSubmit={this.searchBkfst} className="bkfst-search">
            <input 
            className="bkfst-input" 
            type="text"
            value={search}
            onChange={updateSearch} />
            <button classname="bkfst-button" type="submit">Search Recipes</button>
          </form>
         {recipes.map (recipe => (
           <Recipe 
           key={recipes.recipe.label}
           title={recipes.recipe.label}
           carbs={recipes.recipe.cal}
           ingredients={recipes.recipe.ingredients}
           />
         ))}
      </div>
    );
  }
}

export default App;
