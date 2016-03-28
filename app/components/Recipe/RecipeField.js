import React, { Component } from 'react';



const RecipeField = ({ onChange, id, text }) => {
  return (
    <textarea onChange={onChange} data-index={id} value={text} />
  )
}

export default RecipeField;