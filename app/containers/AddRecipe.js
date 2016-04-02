import React, { Component, PropTypes } from 'react'
import {
        addRecipe,
        addInstruction,
        addIngredient,
        resetInstructions,
        instructionChange,
        resetTitle,
        resetUnits,
        addUnit
      } from '../actions/RecipeActions'
import { connect } from 'react-redux'
import RecipeTextArea from "../components/Recipe/RecipeTextArea"
import InstructionsContainer from './InstructionsContainer'
import TitleContainer from './TitleContainer'
import IngredientContainer from './IngredientContainer'

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    title: state.title,
    instructions: state.instructions,
    ingredients: state.ingredients,
    units: state.units
  }
}

class AddRecipe extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, title, instructions, units, ingredients } = this.props;
    let instructionIndex = Object.keys(instructions).length + 1,
        ingredientIndex = Object.keys(ingredients).length + 1;
    return (
      <div className="create">
        <h1> Create Recipe </h1>
        <form onSubmit={e => {
          e.preventDefault();
          dispatch(addRecipe(title.title, instructions));
          dispatch(resetInstructions());
          dispatch(resetTitle());
          dispatch(resetUnits());
          title.value = '';
          }
        }>
          <TitleContainer />
          <IngredientContainer />
          <a onClick={ () => {
              console.log('clicked');
              dispatch(addIngredient(ingredientIndex));
              dispatch(addUnit(ingredientIndex))
          }} >
            Add Another Ingredient
          </a>
          <InstructionsContainer />
          <a onClick={ () => { dispatch(addInstruction(instructionIndex)) }} >
            Add Another Instruction Field
          </a>
          <button type='submit'> Create Recipe </button>
        </form>
      </div>
    )

  }
}

AddRecipe = connect(mapStateToProps)(AddRecipe);
export default AddRecipe;