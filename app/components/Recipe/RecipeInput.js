import React from 'react'

const RecipeInput = ({ onChange, label, text }) => {
  return (
    <input onChange={onChange} value={text} data-label={label} />
  )
}

export default RecipeInput;