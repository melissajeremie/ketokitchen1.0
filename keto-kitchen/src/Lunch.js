import React from 'react';
import axios from 'axios';
import Recipe from './Recipe'

const APP_ID = "879706d9";
const APP_KEY = "44acc469b344fb4332aa8c272ec92c00";

class Lunch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
      this.handleSubmit = this.handleSubmit.bind(this);
    //   this.getSearch = this.getSearch.bind(this);
      this.updateSearch= this.updateSearch.bind(this);
    }
  
    async getLunch() {
      try {
        const res = await axios.get(`https://api.edamam.com/search?q=salad&diet=low-carb&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await res.data;
        this.setState({ recipes: data.hits });
  
      } catch(e) {
        console.error(e);
      }
    }
  
    componentDidMount() {
      this.getLunch();
    }
  
    updateSearch(e) {
      e.preventDefault();
  
      var search = e.target.value
      
      console.log(search);
  
    }
    
    // getSearch(e) {
    //   e.preventDefault();
      
    
    //   this.setState( {})
    //   }
      
  
  async handleSubmit(event) {
    event.preventDefault();
    let query = "salmon"
    try {
      const res = await axios.get(`https://api.edamam.com/search?q=${query}&diet=low-carb&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await res.data
      console.log(data.hits);
      this.setState({ recipes: data.hits})
    } catch (e) {
      console.log(e.message);
    }
  }
  
  
    render() {
  
      return (
  
        <div className="lunch-div">
            <h2>Lunch Recipes</h2>
  
            <form onSubmit={this.handleSubmit}
            className="lunch-search">
              <input 
              className="lunch-input" 
              type="text"
              value=""
              onChange={this.updateSearch} 
              />
              <button className="lunch-button" type="submit">Search</button>
            </form>
            
            {
            this.state.recipes && this.state.recipes.map(recipe => (
               <Recipe 
               key={recipe.recipe.label}
               title={recipe.recipe.label } 
               carbs={ recipe.recipe.totalNutrients.CHOCDF.quantity } 
               image={recipe.recipe.image}
               ingredients={recipe.recipe.ingredients} />
            ))}
        </div>
      );
    }
  }

export default Lunch;