import React from 'react'

const RecipeTextArea = ({ onChange, label, value }) => {
  return (
    <textarea onChange={onChange} data-label={label} value={value} />
  )
}

export default RecipeTextArea;