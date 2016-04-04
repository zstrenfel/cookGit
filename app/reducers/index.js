import { combineReducers } from 'redux'
import recipes from './Recipe/recipes'
import instructions from './Recipe/instructions'
import title from './Recipe/title'
import ingredients from './Recipe/ingredients'
import units from './Recipe/units'

const cookApp = combineReducers({
  recipes,
  instructions,
  title,
  ingredients,
  units
})

export default cookApp