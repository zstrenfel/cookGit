import { connect } from 'react-redux'
import IngredientList from '../../components/Recipe/IngredientList'
import { ingredientChange, unitChange } from '../../actions/RecipeActions'

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    units: state.units
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientChange: (id, text) => {
      dispatch( ingredientChange(id, text) )
    },
    onUnitChange: (id, text) => {
      dispatch( unitChange(id, text) )
    }
  }
}

const IngredientContainer = connect(mapStateToProps, mapDispatchToProps)(IngredientList);

export default IngredientContainer