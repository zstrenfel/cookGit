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
    const { fields, dispatch } = this.props;
    let title,
        index = Object.keys(fields).length > 0 ? Object.keys(fields).length + 1 : 1;
    return (
      <div className="create">
        <h1> Create Recipe </h1>
        <form onSubmit={e => {
          e.preventDefault();
          dispatch(addRecipe(title.value, fields));
          dispatch(resetFields());
          title.value = '';
          }
        }>
          <input ref={node => {title = node}} />
          <FieldContainer />
          <a onClick={ () => { dispatch(addField(index)) }} > Add Another Instruction Field </a>
          <button type='submit'> Create Recipe </button>
        </form>
      </div>
    )

  }
}

AddRecipe = connect(mapStateToProps)(AddRecipe);
export default AddRecipe;