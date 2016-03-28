import { connect } from 'react-redux'
import FieldList from '../components/FieldList'

const mapStateToProps = (state) => {
  return {
    fields: state.fields
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFieldChange: (vars) => {
      dispatch(fieldChange(id, text))
    }
  }
}

const RecipeListContainer = connect(mapStateToProps)(RecipeList);

export default RecipeListContainer