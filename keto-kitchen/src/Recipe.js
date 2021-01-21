import React from 'react';


const Recipe = ({title, carbs, image}) => {
        return(
            <div>
                <h3>{title}</h3>
                <p>{carbs}</p>
                <img src={image} alt="" />
            </div>
        )
    }

export default Recipe;