import React, { PropTypes } from 'react'

let RecipeList = ({ recipes }) => {
  return (
    <ul>
      {
        recipes.map(recipe =>
          <li key={recipe.id}>{recipe.title}</li>
        )
      }
    </ul>
  )
}


export default RecipeList;