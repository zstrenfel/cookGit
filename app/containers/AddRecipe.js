import React, { Component, PropTypes } from 'react'
import {
        addRecipe,
        addInstruction,
        addIngredient,
        resetIngredients,
        resetInstructions,
        instructionChange,
        resetTitle,
        resetUnits,
        addUnit
      } from '../actions/RecipeActions'
import { connect } from 'react-redux'
import RecipeTextArea from "../components/Recipe/RecipeTextArea"
import InstructionsContainer from './Recipe/InstructionsContainer'
import TitleContainer from './Recipe/TitleContainer'
import IngredientContainer from './Recipe/IngredientContainer'

const mapStateToProps = (state) => {
  console.log(state);
  return {
    title: state.title,
    instructions: state.instructions,
    ingredients: state.ingredients,
    units: state.units
  }
}

/** concats units and ingredients together in a comma-deliniated string;
  * takes in untis and ingredients from state.
  * */
const generateIngredients = (units, ingredients) => {
  let appended = Object.keys(ingredients).map((key) => {
    return units[key] + "," + ingredients[key];
  })
  return appended;
}

let AddRecipe = ({ dispatch, title, instructions, units, ingredients }) => {
  let instructionIndex = Object.keys(instructions).length + 1,
      ingredientIndex = Object.keys(ingredients).length + 1,
      tags;
  return (
    <div className="create">
      <h1> Create Recipe </h1>
      <form onSubmit={e => {
        e.preventDefault();
        let genIngredients = generateIngredients(units, ingredients);
        dispatch(addRecipe(title.title, title.description, genIngredients, instructions, tags.value));
        dispatch(resetInstructions());
        dispatch(resetTitle());
        dispatch(resetUnits());
        dispatch(resetIngredients());
        tags.value = '';
        }
      }>
        <TitleContainer />
        <IngredientContainer />
        <a onClick={ () => {
            dispatch(addIngredient(ingredientIndex));
            dispatch(addUnit(ingredientIndex))
        }} >
          Add Another Ingredient
        </a>
        <InstructionsContainer />
        <a onClick={ () => { dispatch(addInstruction(instructionIndex)) }} >
          Add Another Instruction Field
        </a>
        <label htmlFor="tags"> Add Tags </label>
        <input className="tags" ref={node => {tags = node}} />
        <button type='submit'> Create Recipe </button>
      </form>
    </div>
  )
}


AddRecipe = connect(mapStateToProps)(AddRecipe);
export default AddRecipe;