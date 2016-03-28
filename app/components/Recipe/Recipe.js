import React, { Component } from 'react';



const Recipe = ({ onClick, id }) => {
  return (
    <textarea onChange={onChange} data-index={id} value={text} />
  )
}

export default RecipeField;