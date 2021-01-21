import React from 'react';


const Recipe = ({title, carbs, image, ingredients}) => {
        return(
            <div>
                <h3>{title}</h3>
                <p>{carbs}g</p>
                <img src={image} alt="" />
                <ol>
                    {ingredient => (
                        <li>
                            {ingredients.text}
                        </li>
                    )}
                </ol>
            </div>
        )
    }

export default Recipe;