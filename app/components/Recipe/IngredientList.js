import React, { Component, PropTypes } from 'react';
import IngredientInput from './IngredientInput';



let IngredientList = ({ ingredients, units, onIngredientChange, onUnitChange }) => {
  return (
    <div className="ingredients">
    <label> Ingredients </label>
    {
      Object.keys(ingredients).map((key) => {
          return <IngredientInput
            onIngredientChange={(e) => {
              onIngredientChange(key, e.target.value)
            }}
            onUnitChange={(e) => {
              onUnitChange(key, e.target.value);
            }}
            key={key}
            unit_value={units[key]}
            text_value={ingredients[key]} />
        })
    }
    </div>
  )
}

export default IngredientList;