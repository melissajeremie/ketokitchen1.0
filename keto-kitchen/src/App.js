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
          <h2>"Low" carb recipes for every meal</h2>
      </div>
    );
  }
}


class Breakfast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.search = this.search.bind(this);
    this.updateSearch= this.updateSearch.bind(this);
    this.query = this.query.bind(this);
  }

async handleSubmit(event) {
  event.preventDefault();

  try {
    const res = await axios.get(`https://api.edamam.com/search?q=${query}&diet=low-carb&high-protein&mealType=Breakfast&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.data
    console.log(data.hits);
    this.setState({ recipes: data.hits})
  } catch (e) {
    console.log(e.message);
  }
}

updateSearch(e) {
  this.setState( { search: e.target.value });
  
  console.log(search)
}

getSearch(e) {
  e.preventDefault();

  this.setState( {query: search})
  }


  render() {
    return (
      <div className="breakfast-div">
          <h1>Keto Kitchen</h1>

          <form onSubmit={this.handleSubmit}
          className="bkfst-search">
            <input 
            className="bkfst-input" 
            type="text"
            value={this.search}
            onChange={this.updateSearch} 
            />
            <button className="bkfst-button" type="submit">Search Recipes</button>
          </form>
          
          {
          this.state.recipes && this.state.recipes.map(recipe => (
             <Recipe 
             key={recipe.recipe.label}
             title={recipe.recipe.label } 
             carbs={ recipe.recipe.totalNutrients.CHOCDF.quantity } 
             image={recipe.recipe.image}
             ingredients={recipe.recipe.ingredientLines} />
          ))}
      </div>
    );
  }
}
  
    
export default App;
