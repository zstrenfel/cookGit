import React, { Component, PropTypes } from 'react'
import { addRecipe, addField, resetFields, fieldChange } from '../actions/RecipeActions'
import { connect } from 'react-redux'
import RecipeField from "../components/RecipeField"
import FieldContainer from './FieldContainer'

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    fields: state.fields
  }
}

class AddRecipe extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { fields, dispatch, count } = this.props;
    let title,
        nodes = this.getFields(fields),
        index = Object.keys(fields).length > 0 ? Object.keys(fields).length + 1 : 1;
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          dispatch(addRecipe(fields));
          dispatch(resetFields());
          console.log('here', title);
          title.value = '';
          }
        }>
          <FieldContainer />
          <a onClick={ () => { dispatch(addField(index)) }} > Add Instruction </a>
          <button type='submit'> Create Recipe </button>
        </form>
      </div>
    )

  }
}

AddRecipe = connect(mapStateToProps)(AddRecipe);
export default AddRecipe;