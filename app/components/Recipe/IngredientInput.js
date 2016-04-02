import React from 'react'

const RecipeInput = ({ onIngredientChange, onUnitChange, unit_value, text_value }) => {
  return (
    <div className="ingredient-input-container">
      <input
        className="ingredient-input unit"
        onChange={onUnitChange}
        value={unit_value}
        data-label="unit"
        placeholder="Unit"
      />
      <input
        className="ingredient-input value"
        onChange={onIngredientChange}
        value={text_value}
        data-label="value"
        placeholder="Ingredient"
      />
    </div>
  )
}

export default RecipeInput;