import React from 'react';


class Recipe extends React.Component {
    constructor(props)
    render() {
        return(
            <div>
                <h3>{title}</h3>
                <p>{carbs}</p>
                <img src={image} alt="" />
            </div>
        )
    }
}

export default Recipe;