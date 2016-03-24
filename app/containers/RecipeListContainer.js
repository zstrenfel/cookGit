import { connect } from 'react-redux'
import RecipeList from '../components/RecipeList'

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

const RecipeListContainer = connect(mapStateToProps)(RecipeList);

export default RecipeListContainer