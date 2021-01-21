import React from 'react';


const Recipe = ({title, carbs, image, ingredients}) => {
        return(
            <div>
                <h3>{title}</h3>
                <p>{carbs}g</p>
                <img src={image} alt="" />
                <ul>
                    {ingredients.map(ingredient => (
                        <li> {ingredient.text} </li>
                    ))}
                </ul>
            </div>
        )
    }

export default Recipe;