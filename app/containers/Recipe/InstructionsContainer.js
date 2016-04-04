import { connect } from 'react-redux'
import InstructionList from '../../components/Recipe/InstructionList'
import { instructionChange } from '../../actions/RecipeActions'

const mapStateToProps = (state) => {
  return {
    instructions: state.instructions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInstructionChange: (id, text) => {
      dispatch( instructionChange(id, text) )
    }
  }
}

const InstructionsContainer = connect(mapStateToProps, mapDispatchToProps)(InstructionList);

export default InstructionsContainer

