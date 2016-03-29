import React, { Component, PropTypes } from 'react'
import { addRecipe, addInstruction, resetInstructions, instructionChange, resetTitle } from '../actions/RecipeActions'
import { connect } from 'react-redux'
import RecipeTextArea from "../components/Recipe/RecipeTextArea"
import InstructionContainer from './InstructionContainer'
import TitleContainer from './TitleContainer'

const mapStateToProps = (state) => {
  return {
    title: state.title,
    instructions: state.instructions
  }
}

class AddRecipe extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { title, instructions, dispatch } = this.props;
    let index = Object.keys(instructions).length > 0 ? Object.keys(instructions).length + 1 : 1;
    return (
      <div className="create">
        <h1> Create Recipe </h1>
        <form onSubmit={e => {
          e.preventDefault();
          dispatch(addRecipe(title.title, instructions));
          dispatch(resetInstructions());
          dispatch(resetTitle());
          title.value = '';
          }
        }>
          <TitleContainer />
          <InstructionContainer />
          <a onClick={ () => { dispatch(addInstruction(index)) }} > Add Another Instruction Field </a>
          <button type='submit'> Create Recipe </button>
        </form>
      </div>
    )

  }
}

AddRecipe = connect(mapStateToProps)(AddRecipe);
export default AddRecipe;