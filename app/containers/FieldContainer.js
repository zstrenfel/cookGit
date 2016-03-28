import { connect } from 'react-redux'
import FieldList from '../components/Recipe/FieldList'
import { fieldChange } from '../actions/RecipeActions'

const mapStateToProps = (state) => {
  return {
    fields: state.fields
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFieldChange: (id, text) => {
      dispatch( fieldChange(id, text) )
    }
  }
}

const FieldContainer = connect(mapStateToProps, mapDispatchToProps)(FieldList);

export default FieldContainer