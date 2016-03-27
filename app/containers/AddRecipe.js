import React, { Component, PropTypes } from 'react'
import { addRecipe, addField, resetField, fieldChange } from '../actions/RecipeActions'
import { connect } from 'react-redux'
import RecipeField from "../components/RecipeField"

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

  getChildContext() {
    return {change: this.onFieldChange.bind(this)}
  }

  onFieldChange(text, index) {
    const { dispatch } = this.props;
    dispatch(fieldChange(text, index));
  }

  getFields(fields) {
    return Object.keys(fields).map((key) => {
      return <RecipeField text={fields[key]} key={key} data-index={key} />
    })
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
          if (title.value === "") { return }
          title = title.value;
          dispatch(addRecipe(title, "hooply"));
          title = '';
          }
        }>
          <input ref={node => {title = node}} />
          <div className='instructions'>
            {nodes}
          </div>
          <a onClick={ () => { dispatch(addField(index)) }} > Add Instruction </a>
          <button type='submit'> Create Recipe </button>
        </form>
      </div>
    )

  }
}

AddRecipe.childContextTypes = { change: PropTypes.func };
// AddRecipe.childContextTypes({change: PropTypes.func})

AddRecipe = connect(mapStateToProps)(AddRecipe);
export default AddRecipe;