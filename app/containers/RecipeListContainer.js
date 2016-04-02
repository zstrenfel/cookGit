import { connect } from 'react-redux'
import RecipeList from '../components/Recipe/RecipeList'

const mapStateToProps = (state) => {
  console.log('recipe state called');
  return {
    recipes: state.recipes
  }
}

const RecipeListContainer = connect(mapStateToProps)(RecipeList);

export default RecipeListContainer