import React from 'react'
import RecipeInput from './RecipeInput'
import RecipeTextArea from './RecipeTextArea'

let FormTitle = ({ title, onTitleChange }) => {
  return (
    <div className="recipe-title">
      <RecipeInput onChange={ onTitleChange } value={ title.title} data-label={"title"} />
      <RecipeTextArea onChange={ onTitleChange } value={ title.description } data-label={"description"} />
    </div>
  )
}

export default FormTitle;