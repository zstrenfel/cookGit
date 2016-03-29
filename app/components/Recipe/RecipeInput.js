import React from 'react'

const RecipeInput = ({ onChange, label, value }) => {
  return (
    <input onChange={onChange} value={value} data-label={label} />
  )
}

export default RecipeInput;