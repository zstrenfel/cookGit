import React from 'react'

const RecipeTextArea = ({ onChange, label, text }) => {
  return (
    <textarea onChange={onChange} data-label={label} value={text} />
  )
}

export default RecipeTextArea;