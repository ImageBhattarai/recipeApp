import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title, image, calories, ingredients}) => {
    return (
                
        <div className={style.container} >
            <h2>{title}</h2>
            <h3>Calories: {Math.round(calories)}</h3>
            <img src={image} alt="product" />
            <ol>
                {ingredients.map(ingredient => (
                    
                        <li>{ingredient.text}</li>
                
                ))}
            </ol>
        
        </div>

    )
}

export default Recipe
